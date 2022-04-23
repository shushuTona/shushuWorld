import { VFC } from 'react';
import styles from '@/styles/components/PageHeading.module.scss';

type Props = {
    headingText: string
    isPostPage?: boolean
}

const PageHeading: VFC<Props> = ( { headingText, isPostPage } ) => {
    const headingClassName = isPostPage ? styles.postPageHeading : styles.pageHeading;

    return (
        <h1 className={headingClassName}>{ headingText }</h1>
    )
}

export { PageHeading };
