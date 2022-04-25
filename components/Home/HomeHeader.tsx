import Link from 'next/link';

import styles from '@/styles/components/Home/HomeHeader.module.scss';

const HomeHeader = () => {
    return (
        <header className={styles.homeHeader}>
            <ul className={styles.homeHeader__list}>
                <li className={styles.homeHeader__listItem}>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li className={styles.homeHeader__listItem}>
                    <Link href="/blog">BLOG</Link>
                </li>
                <li className={styles.homeHeader__listItem}>
                    <a href="https://github.com/shushuTona" target="_blank" rel='noreferrer'>Github</a>
                </li>
            </ul>
        </header>
    )
}

export { HomeHeader };
