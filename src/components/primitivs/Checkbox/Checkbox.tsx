import styles from './Checkbox.module.css';
import React from 'react';

type Props = { label: string; value: boolean; onChange: () => void };

export const Checkbox: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <label>
        {label}
        <input type="checkbox" onChange={onChange} checked={value}></input>
      </label>
    </div>
  );
};
