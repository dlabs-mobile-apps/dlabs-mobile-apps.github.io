import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Neat is Beautiful',
    Svg: require('../../../static/img/mobi_mountain.svg').default,
    description: (
      <>
        Neat will make it easier for you to maintain a project. 
        A neat project will also make you excited when coding and solving issues.
      </>
    ),
  },
  {
    title: 'Docs for Guidance',
    Svg: require('../../../static/img/mobi_tree.svg').default,
    description: (
      <>
        Documentation of mobile development standarization which is developed and made by dlabs mobile dev team
        to guide developers towards their goals.
      </>
    ),
  },
  {
    title: 'Coding & Sharing',
    Svg: require('../../../static/img/mobi_flutter.svg').default,
    description: (
      <>
        You can share your research results on this site by writing blogs. 
        Surely research that improve our skills, solving problems etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
