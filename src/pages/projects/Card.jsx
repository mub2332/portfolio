import React from 'react';
import s from './projects.module.scss';

const Card = ({ title, description, image, links, tags, fullRow }) => {
  const navigate = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <div className={s.card + ' ' + (fullRow ? s.fullRow : '')}>
      <img className={s.image} src={image} alt={title} />
      <div className={s.content}>
        <h2 className={s.header}>{title}</h2>
        <p className={s.description}>{description}</p>
        <ul className={s.tags}>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      <div className={s.actions}>
        {links.map((link) => (
          <button onClick={() => navigate(link.url)} className={s.link}>
            {link.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
