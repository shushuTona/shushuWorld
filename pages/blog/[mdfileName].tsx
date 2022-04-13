import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import { getPostByMdfile, getAllPosts } from '@/lib/api'
import { markdownToHtml } from '@/lib/markdownToHtml'

const getStaticPaths = async () => {
    // 対象記事ページのmdファイル名一覧を取得
    const posts = getAllPosts( ['mdfileName'] );

    return {
        paths: posts.map( ( post ) => {
            return {
                params: {
                    mdfileName: post.mdfileName,
                },
            }
        } ),
        fallback: false,
    }
}

const getStaticProps = async ( { params }: any ) => {
    // 対象記事ページのmdファイル名を基に、記事のタイトル・日付・内容を取得
    const post = getPostByMdfile( params.mdfileName, [
        'title',
        'date',
        'content',
        'mdfileName',
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

const Post = ( { post }: any ) => {
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
                    {post.title} | Next.js Blog Example with
                </title>
            </Head>

            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </>
    )
}

export { getStaticProps, getStaticPaths }
export default Post;
