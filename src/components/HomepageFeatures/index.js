import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SectionList = [
  {
    title: 'Introduction',
    path: 'docs/intro',
    Svg: require('@site/static/img/introduction.svg').default,
    description: (
      <>
        Guide will help you understand how to navigate the documentation, manage content.
      </>
    ),
  },
  {
    title: 'Documentation',
    path: 'docs/documentation/intro',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Covers documents, guidelines, and resources related to our company.
      </>
    ),
  },
  {
    title: 'Rule',
    path: 'docs/rule/intro',
    Svg: require('@site/static/img/rule.svg').default,
    description: (
      <>
        Covers company rules and work rules.
      </>
    ),
  },
  {
    title: 'Backend',
    path: 'docs/be/intro',
    Svg: require('@site/static/img/backend.svg').default,
    description: (
      <>
        Covers rules, guidelines, and technical information for backend development.
      </>
    ),
  },
  {
    title: 'Frontend',
    path: 'docs/fe/intro',
    Svg: require('@site/static/img/frontend.svg').default,
    description: (
      <>
        Covers rules, guidelines, and technical information for frontend development.
      </>
    ),
  },
  {
    title: 'Blog',
    path: 'blog',
    Svg: require('@site/static/img/blogs.svg').default,
    description: (
      <>
        Covers technical and company updates, articles, and tutorials.
      </>
    ),
  },
];

function Feature({ Svg, title, description, path }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={path}>
            {title}
          </a>
        </Heading>
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
          {SectionList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
