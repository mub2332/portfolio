import React from 'react';
import s from './projects.module.scss';
import Card from './Card';
import seraph from '../../images/seraph.png';
import glipher from '../../images/glipher.png';
import hwa from '../../images/hwa.png';

const projectData = [
  {
    image: glipher,
    title: 'Glipher',
    description:
      'A Chrome extension to clip sections of YouTube videos and create animated GIFs from them',
    links: [{ text: 'View Code', url: 'https://github.com/mub2332/glipher' }],
    tags: ['jQuery', 'AWS', 'Serverless'],
  },
  {
    image: hwa,
    title: 'Monash HWA Calculator',
    description:
      'A Chrome extension to help honors students calculate their honors weighted average mark easily',
    links: [{ text: 'View Code', url: 'https://github.com/mub2332/glipher' }],
    tags: ['jQuery'],
  },
];

const Projects = () => {
  return (
    <div className={s.container}>
      {projectData.map((project) => (
        <Card {...project} />
      ))}
    </div>
  );
};

export default Projects;
