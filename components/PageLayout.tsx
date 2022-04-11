import Head from "next/head";
import { FC, ReactNode } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHeading } from '@/components/PageHeading';

import styles from '@/styles/components/PageLayout.module.scss';

type Props = {
    children: ReactNode,
    title: string,
    headingText: string
}

const PageLayout: FC<Props> = ( { children, title, headingText } ) => {
    return (
        <div className={styles.pageLayout}>
            <Head>
                <title>{ title } : shushuTona - World</title>
            </Head>

            <Header />

            <main className={styles.pageLayout__main}>
                <PageHeading headingText={headingText} />

                <div className={styles.pageLayout__contents}>
                    { children }
                </div>
            </main>

            <Footer />
        </div>
    )
}

export { PageLayout };
