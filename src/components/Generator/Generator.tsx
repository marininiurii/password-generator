import React, { useState } from 'react';
import styles from './Generator.module.css';
import { Checkbox } from '../primitivs/Checkbox/Checkbox';
import { Input } from '../primitivs/Input/Input';
import { Button } from '../primitivs/Button/Button';
import { passwordGenerator } from './generator';

export const Generator: React.FC = () => {
  const [password, setPassword] = useState<string>();
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [numberOfSymbols, setNumberOfSymbols] = useState<string>('15');
  const [numberOfInterval, setNumberOfInterval] = useState<string>('5');
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          label="Number of symbols:"
          value={numberOfSymbols}
          onChange={(newValue: string) => {
            setNumberOfSymbols(newValue);
          }}
        />
        <Input
          label="Separator interval:"
          value={numberOfInterval}
          onChange={(newValue: string) => {
            setNumberOfInterval(newValue);
          }}
        />
        <Checkbox
          label="Uppercase"
          value={includeUppercase}
          onChange={() => {
            setIncludeUppercase(!includeUppercase);
          }}
        />
        <Checkbox
          label="Number"
          value={includeNumbers}
          onChange={() => {
            setIncludeNumbers(!includeNumbers);
          }}
        />
        <Checkbox
          label="Symbols"
          value={includeSymbols}
          onChange={() => {
            setIncludeSymbols(!includeSymbols);
          }}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => {
            console.log('Generating Password');
            setPassword(
              passwordGenerator(numberOfSymbols, numberOfInterval, includeUppercase, includeNumbers, includeSymbols)
            );
            console.log(password);
          }}
        >
          Generate Password
        </Button>
        <p className={styles.inputPassword} id="password">
          {password}
        </p>
        <Button
          onClick={() => {
            console.log('Copy Password');
          }}
        >
          Copy
        </Button>
      </div>
    </div>
  );
};
