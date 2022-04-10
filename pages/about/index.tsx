import { PageLayout } from '@/components/pageLayout';

import styles from '@/styles/pages/About.module.scss';

const About = () => {
    return (
        <PageLayout headingText="About">
            <div>
                <h2>自己紹介</h2>
                <p>現在都内の事業会社でwebエンジニアとして働いています。</p>
                <p>Webアプリケーション開発が好きです。</p>

                <h2>職務経歴</h2>
                <p>大学4年生の就職活動時にWeb開発の勉強を始めて、以下の経歴で生きてきました。</p>
                <dl>
                    <div>
                        <dt>2018年4月～2020年12月</dt>
                        <dd>新宿のweb制作会社でフロントエンドエンジニアとして勤務していました。企業のコーポレートサイトのリニューアル案件を主に扱っていました。</dd>
                    </div>
                    <div>
                        <dt>2021年1月～</dt>
                        <dd>新宿の事業会社でwebエンジニアとして勤務しています。</dd>
                    </div>
                </dl>
            </div>
        </PageLayout>
    )
}

export default About;
