import styles from './Input.module.css';
import React from 'react';

type Props = { className?: string; label: string; value: string; onChange: (newValue: string) => void };

export const Input: React.FC<Props> = ({ className, label, value, onChange }) => {
  return (
    <div className={styles.input}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type="text"
        className={className}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      ></input>
    </div>
  );
};
