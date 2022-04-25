import { VFC, RefObject } from 'react';
import styles from '@/styles/components/PageHeading.module.scss';

type Props = {
    headingText: string
    isPostPage?: boolean
    _ref?: RefObject<HTMLHeadingElement>
}

const PageHeading: VFC<Props> = ( { headingText, isPostPage, _ref } ) => {
    const headingClassName = isPostPage ? styles.postPageHeading : styles.pageHeading;

    return (
        <h1 className={headingClassName} ref={_ref}>{ headingText }</h1>
    )
}

export { PageHeading };
