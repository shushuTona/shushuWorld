import Head from 'next/head';
import { VFC, useState, useEffect, useMemo, useRef } from 'react';

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
    const ulElemRef = useRef<HTMLUListElement>(null);
    const headingElemRef = useRef<HTMLHeadingElement>(null);
    const asideElemRef = useRef<HTMLElement>(null);
    const isIntersectingRef = useRef<boolean>(false);

    // 見出し部分のHTML文字列を基にアンカーリンクの一覧を生成する
    useEffect( () => {
        // HTML文字列を基にアンカーリンクを生成する
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

        // 記事の見出しをサイドメニュー追従の基準に設定する
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        const observer = new IntersectionObserver( ( entries ) => {
            entries.forEach( entry => {
                isIntersectingRef.current = entry.isIntersecting;
            } );
        }, options );

        if (
            headingElemRef.current
        ) {
            observer.observe( headingElemRef.current );
        }

        // スクロールに合わせてサイドメニューを追従させる
        window.addEventListener( 'scroll', () => {
            if (
                isIntersectingRef.current === false &&
                ulElemRef.current &&
                asideElemRef.current
            ) {
                const topValue = window.scrollY - asideElemRef.current.offsetTop + 16;
                ulElemRef.current.style.top = topValue < 0 ? '0px' : topValue + 'px';
            }
        } );
    }, [headingElemList, setAnchorLinkList, ulElemRef] );

    return (
        <div className={styles.postPageLayout}>
            <Head>
                <title>{post.title} : shushuTona - World</title>
            </Head>

            <Header />

            <main className={styles.postPageLayout__main}>
                <p className={styles.postPageLayout__date}>{post.date}</p>
                <PageHeading headingText={post.title} isPostPage={true} _ref={headingElemRef} />

                <div className={styles.postPageLayout__contents}>
                    <article className={styles.postPageLayout__article}>
                        <PostTagList tags={post.tags} />

                        <div
                            className={styles.postPageLayout__articleInner}
                            dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>

                    <aside className={styles.postPageLayout__side} ref={asideElemRef}>
                        <ul
                            className={styles.postPageLayout__sideList}
                            ref={ulElemRef}
                        >
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
