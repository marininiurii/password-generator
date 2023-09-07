import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Password Generator</h1>
      <img
        className={styles.imgLockIcon}
        width="48"
        height="48"
        src="https://img.icons8.com/doodle/48/password.png"
        alt="password"
      />
    </div>
  );
};
