import styles from './Input.module.css';
import React from 'react';

type Props = { label: string; value: string; onChange: (newValue: string) => void };

export const Input: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input
        type="text"
        className={styles.inputText}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      ></input>
    </div>
  );
};
