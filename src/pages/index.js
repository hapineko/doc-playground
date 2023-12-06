import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            5分でわかるクリスマス ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='クリスマス当日を楽しみに待つためのサイトです。'
    >
      <HomepageHeader />
      <main>
        <Heading as='h2' className={styles.heading02}>
          おすすめリンク
        </Heading>
        <HomepageFeatures />
        <p className={styles.materialCopyrightText}>
          ねこアイコン素材：
          <a
            href='https://mozneko.boo.jp/'
            target='blank'
            rel='noopener noreferrer'
          >
            もずねこ
          </a>
          様
        </p>
      </main>
    </Layout>
  );
}
