import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Google サンタを追いかけよう',
    href: 'https://santatracker.google.com/intl/ja/',
    imgSrc: require('@site/static/img/img_features_01.jpg').default,
    description: (
      <>
        サンタさんの妖精たちと一緒にサンタ村を探検したり、ゲームをしたり、クリスマスについて学ぼう！
      </>
    ),
  },
  {
    title: 'クリスマスツリーを飾ろう',
    href: 'https://www.amazon.co.jp/s?k=%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%84%E3%83%AA%E3%83%BC&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27WECPA72RKJU&sprefix=%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%84%E3%83%AA%E3%83%BC+%E9%80%9A%E8%B2%A9%2Caps%2C265&ref=nb_sb_noss_2',
    imgSrc: require('@site/static/img/img_features_02.jpg').default,
    description: <>クリスマスツリーを飾って気分をあげよう！</>,
  },
  {
    title: '大切な人にプレゼントを贈ろう',
    href: 'https://www.amazon.co.jp/b?ie=UTF8&node=10358336051&pd_rd_w=N86T3&content-id=amzn1.sym.fc3588ca-d765-46aa-b326-a95cd476e3ee&pf_rd_p=fc3588ca-d765-46aa-b326-a95cd476e3ee&pf_rd_r=C5WJZ9FS4EGYRRDKT2PK&pd_rd_wg=pZMOv&pd_rd_r=814a4a9c-a117-4e57-93ad-010343805994',
    imgSrc: require('@site/static/img/img_features_03.jpg').default,
    description: <>大切なあの人へのプレゼントを選ぼう！</>,
  },
];

function Feature({ href, imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <a
        className={styles.featureLink}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='text--center'>
          <img src={imgSrc} className={styles.featureImg} role='img' />
        </p>
        <div className='text--center padding-horiz--md'>
          <Heading as='h3'>{title} →</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
