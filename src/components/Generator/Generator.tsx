import React, { useState } from 'react';
import styles from './Generator.module.css';
import { Checkbox } from '../primitivs/Checkbox/Checkbox';
import { Input } from '../primitivs/Input/Input';
import { Button } from '../primitivs/Button/Button';
import { passwordGenerator } from './generator';

type GeneratorSettings = {
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  numberOfSymbols: string;
  numberOfInterval: string;
};

const defaultSettings: GeneratorSettings = {
  includeUppercase: false,
  includeNumbers: false,
  includeSymbols: false,
  numberOfSymbols: '15',
  numberOfInterval: '5',
};

export const Generator: React.FC = () => {
  const [password, setPassword] = useState<string>();
  const [generatorSetings, setGeneratorSetings] = useState<GeneratorSettings>(defaultSettings);
  const handleChangeNumberOfSymbols = (newValue: string) => {
    setGeneratorSetings({ ...generatorSetings, numberOfSymbols: newValue });
  };
  const handleChangeNumberOfInterval = (newValue: string) => {
    setGeneratorSetings({ ...generatorSetings, numberOfInterval: newValue });
  };
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password ?? '');
  };
  const handleSetUppercase = () => {
    setGeneratorSetings({ ...generatorSetings, includeUppercase: !generatorSetings.includeUppercase });
  };
  const handleSetNumbers = () => {
    setGeneratorSetings({ ...generatorSetings, includeNumbers: !generatorSetings.includeNumbers });
  };
  const handleSetSymbols = () => {
    setGeneratorSetings({ ...generatorSetings, includeSymbols: !generatorSetings.includeSymbols });
  };
  const handleGeneratePassword = () => {
    setPassword(
      passwordGenerator(
        generatorSetings.numberOfSymbols,
        generatorSetings.numberOfInterval,
        generatorSetings.includeUppercase,
        generatorSetings.includeNumbers,
        generatorSetings.includeSymbols
      )
    );
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          className={styles.input}
          label="Number of symbols:"
          value={generatorSetings.numberOfSymbols}
          onChange={handleChangeNumberOfSymbols}
        />
        <Input
          className={styles.input}
          label="Separator interval:"
          value={generatorSetings.numberOfInterval}
          onChange={handleChangeNumberOfInterval}
        />
        <Checkbox label="Uppercase" value={generatorSetings.includeUppercase} onChange={handleSetUppercase} />
        <Checkbox label="Number" value={generatorSetings.includeNumbers} onChange={handleSetNumbers} />
        <Checkbox label="Symbols" value={generatorSetings.includeSymbols} onChange={handleSetSymbols} />
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleGeneratePassword}>Generate Password</Button>
        <p className={styles.inputPassword} id="password">
          {password}
        </p>
        <Button onClick={handleCopyPassword}>Copy</Button>
      </div>
    </div>
  );
};
