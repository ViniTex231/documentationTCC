import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Extraia Relatórios',
    Svg: require('@site/static/img/extraiarelatorio.svg').default,
    description: (
      <>
        O Metrix simplifica a gestão de calibrações, oferecendo uma experiência intuitiva e análise detalhada de resultados passados para maior eficiência estratégica.
      </>
    ),
  },
  {
    title: 'Sua Solução!',
    Svg: require('@site/static/img/site.svg').default,
    description: (
      <>
        O Metrix é uma solução tudo-em-um para a gestão de calibrações, oferecendo funcionalidades poderosas, relatórios detalhados, comparações eficientes e conveniência centralizada para otimizar suas operações.
      </>
    ),
  },
  {
    title: 'Acompanhe as Calibrações dos Instrumentos',
    Svg: require('@site/static/img/dashboard.svg').default,
    description: (
      <>
        O Metrix é uma ferramenta completa para gerenciar calibrações de instrumentos. Proporciona visualização detalhada de resultados passados e eficiente acompanhamento futuro para garantir precisão e conformidade. Ganhe controle, visibilidade e excelência com o Metrix.
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
        <Heading as="h3">{title}</Heading>
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
