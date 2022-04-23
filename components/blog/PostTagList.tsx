import { VFC } from 'react';

import styles from '@/styles/components/blog/PostTagList.module.scss';

type Props = {
    tags: string[]
}
const PostTagList: VFC<Props> = ( { tags }: Props ) => {
    return (
        <div className={styles.postTagList}>
            <ul className={styles.postTagList__inner}>
                {
                    tags.map( ( tag: string ) => {
                        return (
                            <li
                                key={tag}
                                className={styles.postTagList__tag}
                            >{tag}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export { PostTagList }
