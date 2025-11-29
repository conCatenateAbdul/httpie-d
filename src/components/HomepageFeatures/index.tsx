import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/documentation.png').default,
    description: (
      <>
        Offers user guides, API references, system architecture overviews, release notes, and more.
      </>
    ),
  },
  {
    title: 'Meet the Author',
    image: require('@site/static/img/abdulmalik_uthman.jpg').default,
    description: (
      <>
        Abdulmalik Uthman is a versatile Technical Writer and Cybersecurity Analyst with a wealth of experience and numerous projects under his belt.
      </>
    ),
  },
  {
    title: 'Cybersecurity',
    Svg: require('@site/static/img/cybersecurity.png').default,
    description: (
      <>
        Covers compliance standards (ISO, GDPR), incident response plans, firewall configuration, penetration testing reports, secure coding practices, and more.
      </>
    ),
  },
];

function Feature({ title, Svg, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={image} className={styles.featureSvg} alt={title} style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
