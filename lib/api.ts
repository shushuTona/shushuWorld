import { ParsedUrlQuery } from 'node:querystring'
import fs from 'fs';
import { join, parse } from 'path';
import glob from 'glob';
import matter from 'gray-matter';

export type PostItem = {
    title: string;
    date: string;
    content: string;
    year: string;
    mdfileName: string;
    tags: string[];
}

export interface Params extends ParsedUrlQuery {
    year: string;
    mdfileName: string;
}

const postDirectory = join( process.cwd(), '_blog' );

/**
 * getPostMdFileList
 *
 * _blogディレクトリ直下の.mdファイルの一覧を取得する
 *
 * @returns string[]
 */
const getPostMdFileList = (): string[] => {
    const mdDirList = fs.readdirSync( postDirectory );

    return mdDirList;
}

/**
 * getPostByMdfile
 *
 * 
 */
const getPostByMdfile = ( mdFileObj: Params, fields: string[] = [] ) => {
    // mdファイル名を取得
    const year = mdFileObj.year;
    const mdfile = mdFileObj.mdfileName + '.md';

    // mdファイル内容を取得
    const fullPath = join( postDirectory, year, mdfile );

    // 記事内容を取得
    const fileContents = fs.readFileSync( fullPath, 'utf8' );

    // mdファイルのメタ内容と記事内容を取得
    const { data, content } = matter( fileContents );

    const postItem: PostItem = {
        title: '',
        date: '',
        content: '',
        year: '',
        mdfileName: '',
        tags: [],
    }
    fields.forEach( ( field ) => {
        if ( field === 'year' ) {
            postItem[field] = year;
        }

        if ( field === 'mdfileName' ) {
            postItem[field] = mdFileObj.mdfileName;
        }

        if ( field === 'content' ) {
            postItem[field] = content;
        }

        if (
            field === 'title' ||
            field === 'date' ||
            field === 'tags'
        ) {
            postItem[field] = data[field]
        }
    } );

    return postItem;
}

/**
 * getAllPosts
 *
 * 記事ページの西暦とファイル名の一覧を取得する
 *
 * @param fields string[]
 * @returns
 */
const getAllPosts = ( fields: string[] = [] ) => {
    // 対象ディレクトリに存在する記事ページ用mdファイル名一覧を取得
    const mdDirList = getPostMdFileList();

    const mdFileList: Params[] = [];
    mdDirList.forEach( ( dirName ) => {
        const mdFilePathList = glob.sync( './_blog/' + dirName + '/*.md' );
        mdFilePathList.forEach( ( mdFilePath ) => {
            const parseFile = parse( mdFilePath );

            mdFileList.push( {
                year: dirName,
                mdfile: parseFile.base,
                mdfileName: parseFile.name,
            } );
        } );
    } );

    const posts = mdFileList
                                .map( ( mdFileObj ) => {
                                    return getPostByMdfile( mdFileObj, fields );
                                } )
                                .sort( ( post1, post2 ) => {
                                    return post1.date > post2.date ? -1 : 1;
                                } );

    return posts
}

export { getPostMdFileList, getPostByMdfile, getAllPosts }
