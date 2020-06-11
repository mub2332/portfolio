import React from 'react';
import s from './card.module.scss';

const Card = ({ children }) => {
  return <div className={s.card}>{children}</div>;
};

export default Card;
