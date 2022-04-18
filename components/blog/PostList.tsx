import type { NextPage } from 'next';
import Link from 'next/link';
import type { PostItem } from '@/lib/api';

import styles from '@/styles/components/blog/PostList.module.scss';

type PageProps = {
    posts: PostItem[]
}

const PostList: NextPage<PageProps> = ( { posts }) => {
    return (
        <ul className={styles.postList}>
            {
                posts.map( ( post: PostItem ) => {
                    const pagePath = '/blog/' + post.year + '/' + post.mdfileName;

                    return (
                        <li
                            key={pagePath}
                            className={styles.postList__item}
                        >
                            <Link href={pagePath}>
                                <a className={styles.postList__link}>
                                    <h2 className={styles.postList__title}>{post.title}</h2>
                                    <p className={styles.postList__date}>{post.date}</p>
                                    <div className={styles.postList__tagList}>
                                        <ul className={styles.postList__tagListInner}>
                                            {
                                                post.tags.map( ( tag: string ) => {
                                                    return (
                                                        <li
                                                            key={tag}
                                                            className={styles.postList__tag}
                                                        >{tag}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                } )
            }
        </ul>
    )
}

export default PostList;
