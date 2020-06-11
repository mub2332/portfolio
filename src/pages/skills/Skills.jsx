import React from 'react';
import Card from '../../components/card/Card';

import s from './skills.module.scss';

const Skills = () => {
  return (
    <ul className={s.cards}>
      <Card>
        <h2>Frontend</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Angular</li>
          <li>Ionic</li>
          <li>Flutter</li>
          <li>SCSS</li>
          <li>SVG</li>
          <li>Responsive Design</li>
        </ul>
      </Card>
      <Card>
        <h2>Backend</h2>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Spring Boot</li>
          <li>Java</li>
          <li>Ruby On Rails</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
      </Card>
      <Card>
        <h2>Databases</h2>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
      </Card>
      <Card>
        <h2>ORMs</h2>
        <ul>
          <li>Mongoose</li>
          <li>Sequelize</li>
        </ul>
      </Card>
      <Card>
        <h2>Cloud</h2>
        <ul>
          <li>Firebase</li>
          <li>AWS</li>
          <li>GCP</li>
        </ul>
      </Card>
      <Card>
        <h2>DevOps</h2>
        <ul>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </Card>
      <Card>
        <h2>Tools</h2>
        <ul>
          <li>VS Code</li>
          <li>Jira</li>
          <li>Confluence</li>
        </ul>
      </Card>
      <Card>
        <h2>Other</h2>
        <ul>
          <li>GraphQL</li>
          <li>REST</li>
          <li>Microservices</li>
        </ul>
      </Card>
    </ul>
  );
};

export default Skills;
