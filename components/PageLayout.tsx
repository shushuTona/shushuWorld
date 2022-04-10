import { FC, ReactNode } from 'react';

import { Header } from '@/components/Header';
import { PageHeading } from '@/components/PageHeading';

import styles from '@/styles/components/PageLayout.module.scss';

type Props = {
    children: ReactNode,
    headingText: string
}

const PageLayout: FC<Props> = ( { children, headingText } ) => {
    return (
        <>
            <Header />

            <main className={styles.pageLayout}>
                <PageHeading headingText={headingText} />

                <div className={styles.pageLayout__contents}>
                    { children }
                </div>
            </main>
        </>
    )
}

export { PageLayout };
