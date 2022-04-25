import Head from 'next/head';
import { VFC, useState, useEffect, useMemo } from 'react';

import { PostItem } from '@/lib/api';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHeading } from '@/components/PageHeading';
import { PostTagList } from '@/components/blog/PostTagList';

import styles from '@/styles/components/blog/PostPageLayout.module.scss';

type Props = {
    post: PostItem,
}

type AnchorItem = {
    tag: string;
    anchorLink: string;
    contents: string;
}

const PostPageLayout: VFC<Props> = ( { post } ) => {
    const headingElemList = useMemo( () => {
        return post.content.match( /<h[2|3|4|5|6] id=".+">.+<\/h[2|3|4]>/g ) || [];
    }, [post.content] );

    const [anchorLinkList, setAnchorLinkList] = useState<AnchorItem[]>( [] );

    // 見出し部分のHTML文字列を基にアンカーリンクの一覧を生成する
    useEffect( () => {
        const anchorItemList: AnchorItem[] = headingElemList.map( ( headingElemStr ) => {
            const elem = document.createElement( 'div' );
            elem.innerHTML = headingElemStr;

            const headingElem = elem.children[0];

            const tag = headingElem.tagName.toLowerCase();
            const id = headingElem.id;
            const contents = headingElem.textContent || '';

            const anchorItem: AnchorItem = {
                tag,
                anchorLink: location.pathname + '#' + id,
                contents,
            }

            return anchorItem;
        } );

        setAnchorLinkList( anchorItemList );
    }, [headingElemList, setAnchorLinkList] );

    return (
        <div className={styles.postPageLayout}>
            <Head>
                <title>{post.title} : shushuTona - World</title>
            </Head>

            <Header />

            <main className={styles.postPageLayout__main}>
                <p className={styles.postPageLayout__date}>{post.date}</p>
                <PageHeading headingText={post.title} isPostPage={true} />

                <div className={styles.postPageLayout__contents}>
                    <article className={styles.postPageLayout__article}>
                        <PostTagList tags={post.tags} />

                        <div
                            className={styles.postPageLayout__articleInner}
                            dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>

                    <aside className={styles.postPageLayout__side}>
                        <ul className={styles.postPageLayout__sideList}>
                            {
                                anchorLinkList && anchorLinkList.map( ( item: AnchorItem ) => {
                                    return (
                                        <li
                                            className={( item.tag === 'h2' ) ? styles.postPageLayout__listItem : styles.postPageLayout__listChildItem}
                                            key={item.anchorLink}
                                        >
                                            <a href={item.anchorLink}>
                                                {item.contents}
                                            </a>
                                        </li>
                                    )
                                } )
                            }
                        </ul>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export { PostPageLayout };
