import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/components/Header.module.scss';

const navList = [
    {
        path: '/',
        pageName: 'Home'
    },
    {
        path: '/about',
        pageName: 'About'
    },
    {
        path: '/blog',
        pageName: 'Blog'
    },
];

const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <ul className={styles.header__list}>
                {
                    navList.map( ( item ) => {
                        return (
                            <li className={styles.header__listItem} key={item.pageName}>
                                <Link href={item.path}>
                                    <a className={router.pathname === item.path ? 'active' : ''}>{ item.pageName }</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}

export { Header };
