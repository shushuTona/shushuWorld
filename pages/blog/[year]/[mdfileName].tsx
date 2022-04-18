import type { InferGetStaticPropsType, NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';

import { getPostByMdfile, getAllPosts, PostItem, Params } from '@/lib/api';
import { markdownToHtml } from '@/lib/markdownToHtml';

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    // 対象記事ページのmdファイル名一覧を取得
    const posts = getAllPosts( [
        'year',
        'mdfileName'
    ] );

    const paths = posts.map( ( post ) => {
        return {
            params: {
                year: post.year,
                mdfileName: post.mdfileName,
            },
        }
    } );

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: any) => {
    // 対象記事ページのmdファイル名を基に、記事のタイトル・日付・内容を取得
    const post = getPostByMdfile( params, [
        'year',
        'mdfileName',
        'title',
        'date',
        'content',
        'tags',
    ] );

    const content = await markdownToHtml( post.content || '' );

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<PageProps> = ( { post }: any ) => {
    const router = useRouter();
    if (
        !router.isFallback &&
        !post?.mdfileName
    ) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <Head>
                <title>
                    {post.title} : shushuTona - World
                </title>
            </Head>

            <ul>
                {
                    post.tags.map( ( tag: string ) => {
                        return (
                            <li key={tag}>{ tag }</li>
                        )
                    })
                }
            </ul>
            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </>
    )
}

export default PostPage;
