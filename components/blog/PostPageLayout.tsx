import Head from "next/head";
import { VFC } from 'react';

import { PostItem } from '@/lib/api';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHeading } from '@/components/PageHeading';
import { PostTagList } from '@/components/blog/PostTagList';

import styles from '@/styles/components/blog/PostPageLayout.module.scss';

type Props = {
    post: PostItem,
}

const PostPageLayout: VFC<Props> = ( { post } ) => {
    return (
        <div className={styles.postPageLayout}>
            <Head>
                <title>{post.title} : shushuTona - World</title>
            </Head>

            <Header />

            <main className={styles.postPageLayout__main}>
                <p className={styles.postPageLayout__date}>{ post.date }</p>
                <PageHeading headingText={post.title} isPostPage={true} />

                <div className={styles.postPageLayout__contents}>
                    <article className={styles.postPageLayout__article}>
                        <PostTagList tags={post.tags} />

                        <div
                            className={styles.postPageLayout__articleInner}
                            dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>

                    <aside className={styles.postPageLayout__side}>
                        <p>見出しの一覧</p>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export { PostPageLayout };
