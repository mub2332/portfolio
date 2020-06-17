import React from 'react';
import resumeImage from '../../images/resume.png';
import resume from './resume.pdf';
import s from './resume.module.scss';

const Resume = () => {
  const download = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={s.container}>
      <div className={s.center}>
        <img className={s.image} src={resumeImage} alt="Resume" />
      </div>
      <div className={s.center}>
        <button onClick={download}>Download</button>
      </div>
    </div>
  );
};

export default Resume;
