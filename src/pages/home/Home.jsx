import React from 'react';
import s from './home.module.scss';

import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <div className={s.header}>
      <section className={s.headerText}>
        <h1 className={s.title}>Mubtasim Mahmud</h1>
        <h1 className={s.subtitle}>Fullstack Web Developer</h1>
      </section>
      <section className={s.about}>
        <h2 className={s.header}>About Me</h2>
        <p className={s.content}>
          I have experience in creating full stack web apps using a variety of
          web technologies. My preferred tech stack is <strong>React</strong>,{' '}
          <strong>Node</strong> and <strong>Firebase</strong>, but I've also
          created apps using <strong>Angular</strong>, <strong>Ionic</strong>,{' '}
          <strong>Flutter</strong>, <strong>Spring</strong> and{' '}
          <strong>Ruby on Rails</strong>. I've worked with both SQL and NoSQL
          databases, including <strong>MySQL</strong>,{' '}
          <strong>PostgreSQL</strong> and <strong>MongoDB</strong>, as well as
          ORMs like <strong>Mongoose</strong> and <strong>Sequelize</strong>.
          I'm also proficient with two major cloud platforms,{' '}
          <strong>AWS</strong> and <strong>GCP</strong>.
          <br />
          <br />I consider myself to be language agnostic. I can pick up a
          language or framework and become productive with it in short order.
          I'm usually upskilling myself in emerging technologies, such as{' '}
          <strong>PWAs</strong>, <strong>GraphQL</strong> and{' '}
          <strong>hybrid-native mobile apps</strong> created using web
          technologies.
        </p>
        <div className={s.center}>
          <button onClick={() => history.push('/projects')} className={s.view}>
            Check out my work
          </button>
          <button className={s.view}>Download my resume</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
