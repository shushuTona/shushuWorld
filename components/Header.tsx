import Link from 'next/link';

import styles from '@/styles/components/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.header__list}>
                <li className={styles.header__listItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.header__listItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.header__listItem}>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </header>
    )
}

export { Header };
