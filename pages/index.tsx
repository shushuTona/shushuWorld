import Head from "next/head";
import { HomeHeader } from '@/components/Home/HomeHeader';
import { HomeHeading } from '@/components/Home/HomeHeading';

import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>shushuTona - World</title>
      </Head>

      <main className={styles.container}>
        <HomeHeading />
      </main>

      <HomeHeader />
    </>
  )
}

export default Home;
