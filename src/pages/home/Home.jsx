import React from 'react';
import s from './home.module.scss';

const Home = () => {
  return (
    <div className={s.header}>
      <section className={s.headerText}>
        <h1 className={s.title}>Mubtasim Mahmud</h1>
        <h1 className={s.subtitle}>Full Stack Developer</h1>
      </section>
      <section className={s.about}>
        <h2 className={s.header}>About Me</h2>
        <p className={s.content}>
          I have experience in creating full stack apps using a variety of web
          technologies. I consider myself to be language agnostic, and am used
          to learning a new language or framework on the job.
          <br />
          <br />I like to upskill myself regularly with emerging technologies
          such as PWAs, GraphQL, Natural Language Processing and hybrid-native
          mobile app development using web technologies. As a software
          developer, I believe in continuously improving myself, as I believe
          that in this profession, lifelong learning is an inescapable part of
          the lifestyle.
        </p>
      </section>
    </div>
  );
};

export default Home;
