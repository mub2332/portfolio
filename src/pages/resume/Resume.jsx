import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

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
    <>
      <Document
        renderMode={'svg'}
        className={s.container}
        file={resume}
        onLoadError={console.error}
      >
        <Page
          renderAnnotationLayer={false}
          className={s.page}
          width={window.innerWidth * 0.7}
          renderMode="svg"
          pageNumber={1}
        />
      </Document>
      <div className={s.center}>
        <button onClick={download}>Download my resume</button>
      </div>
    </>
  );
};

export default Resume;
