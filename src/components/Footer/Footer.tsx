import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.lable}>
        Created by <a href="https://github.com/marininiurii">Marinin Iurii</a>
      </span>
    </div>
  );
};
