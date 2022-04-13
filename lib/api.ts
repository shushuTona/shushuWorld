import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postDirectory = join( process.cwd(), '_blog' );

/**
 * getPostMdFileList
 *
 * _blogディレクトリ直下の.mdファイルの一覧を取得する
 *
 * @returns string[]
 */
const getPostMdFileList = (): string[] => {
    return fs.readdirSync( postDirectory );
}

/**
 * getPostByMdfile
 *
 * 
 */
const getPostByMdfile = ( mdfileName: string, fields: string[] = [] ) => {
    // mdファイル名から拡張子部分（.md）を削除
    const realMdfileName = mdfileName.replace( /\.md$/, '' );

    const fullPath = join( postDirectory, `${realMdfileName}.md` );

    // mdファイル内容を取得
    const fileContents = fs.readFileSync( fullPath, 'utf8' );

    // mdファイルのメタ内容と記事内容を取得
    const { data, content } = matter( fileContents );

    const items: any = {}
    fields.forEach( ( field ) => {
        if ( field === 'mdfileName' ) {
            items[field] = realMdfileName;
        }

        if ( field === 'content' ) {
            items[field] = content;
        }

        if ( typeof data[field] !== 'undefined' ) {
            items[field] = data[field]
        }
    } );

    return items;
}

/**
 * getAllPosts
 *
 * 
 *
 * @param fields string[]
 * @returns 
 */
const getAllPosts = ( fields: string[] = [] ) => {
    // 対象ディレクトリに存在する記事ページ用mdファイル名一覧を取得
    const mdFileNameList = getPostMdFileList();

    const posts = mdFileNameList
                                .map( ( mdfileName ) => {
                                    return getPostByMdfile( mdfileName, fields );
                                } )
                                .sort( ( post1, post2 ) => {
                                    return post1.date > post2.date ? -1 : 1;
                                } );

    return posts
}

export { getPostMdFileList, getPostByMdfile, getAllPosts }
