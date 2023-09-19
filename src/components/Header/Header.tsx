import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

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
      <div className={styles.login}>
        <span>
          <Link to="/">Home</Link> | <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};
