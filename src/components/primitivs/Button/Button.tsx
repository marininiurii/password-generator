import styles from './Button.module.css';
import React from 'react';

type Props = { children: string; onClick: () => void };
export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
