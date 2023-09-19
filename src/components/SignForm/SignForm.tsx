import React from 'react';
import styles from './SignForm.module.css';
import { Button } from '../primitivs/Button/Button';
import { InputSignForm } from './InputSignForm/inputSignForm';

export const SignForm: React.FC = () => {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.signForm}>
        <div className={styles.inputsContainer}>
          <InputSignForm className={styles.input} label="User Name:" value={''} onChange={() => {}} />
          <InputSignForm className={styles.input} label="Password:" value={''} onChange={() => {}} />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={() => {}}>Sign Up</Button>
          <Button onClick={() => {}}>Login</Button>
        </div>
      </div>
    </div>
  );
};
