import type { NextPage, InferGetStaticPropsType } from 'next';
import { getAllPosts } from '@/lib/api';
import { PageLayout } from '@/components/PageLayout';
import PostList from '@/components/blog/PostList';

export const getStaticProps = async () => {
    // 記事一覧を取得する
    const posts = getAllPosts( [
        'year',
        'mdfileName',
        'title',
        'date',
        'tags',
    ] );

    return {
        props: {
            posts
        },
    }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ( { posts } ) => {
    return (
        <PageLayout
            title="Blog"
            headingText="Blog"
        >
            <PostList posts={posts} />
        </PageLayout>
    )
}

export default Blog;
