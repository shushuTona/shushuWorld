import { VFC } from 'react';
import styles from '@/styles/components/PageHeading.module.scss';

type Props = {
    headingText: string
}

const PageHeading: VFC<Props> = ( { headingText } ) => {
    return (
        <h1 className={styles.pageHeading}>{ headingText }</h1>
    )
}

export { PageHeading };
