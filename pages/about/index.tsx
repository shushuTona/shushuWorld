import { PageLayout } from '@/components/PageLayout';

import styles from '@/styles/pages/About.module.scss';

const About = () => {
    const aboutItem = [
        {
            title: '2021年1月 ～ 現在',
            contents: '新宿の事業会社でWebエンジニアとして勤務しています。'
        },
        {
            title: '2018年4月 ～ 2020年12月',
            contents: '新宿のWeb制作会社でフロントエンドエンジニアとして勤務していました。企業のコーポレートサイトのリニューアル案件を主に扱っていました。'
        },
    ];

    return (
        <PageLayout
            title="About"
            headingText="About"
        >
            <div>
                <h2 className={styles.heading}>自己紹介</h2>
                <p>現在都内の事業会社でWebエンジニアとして働いています。</p>
                <p>Webアプリケーション開発が好きです。</p>

                <h2 className={styles.heading}>職務経歴</h2>
                <p>大学4年生の就職活動時にWeb開発の勉強を始めて、Web業界を志望しました。</p>

                <dl className={styles.aboutList}>
                    {
                        aboutItem.map( ( item ) => {
                            return (
                                <div key={item.title} className={styles.aboutList__item}>
                                    <dt className={styles.aboutList__title}>{ item.title }</dt>
                                    <dd className={styles.aboutList__contents}>{ item.contents }</dd>
                                </div>
                            )
                        })
                    }
                </dl>
            </div>
        </PageLayout>
    )
}

export default About;
