import React, { useState } from 'react';
import styles from './Generator.module.css';
import { Checkbox } from '../primitivs/Checkbox/Checkbox';
import { Input } from '../primitivs/Input/Input';
import { Button } from '../primitivs/Button/Button';
import { passwordGenerator } from './generator';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
          label={t('main.numberOfSymbols')}
          value={generatorSetings.numberOfSymbols}
          onChange={handleChangeNumberOfSymbols}
        />
        <Input
          className={styles.input}
          label={t('main.separatorInterval')}
          value={generatorSetings.numberOfInterval}
          onChange={handleChangeNumberOfInterval}
        />
        <Checkbox label={t('main.uppercase')} value={generatorSetings.includeUppercase} onChange={handleSetUppercase} />
        <Checkbox label={t('main.numbers')} value={generatorSetings.includeNumbers} onChange={handleSetNumbers} />
        <Checkbox label={t('main.symbols')} value={generatorSetings.includeSymbols} onChange={handleSetSymbols} />
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleGeneratePassword}>{t('main.generate')}</Button>
        <div className={styles.inputPassword}>
          <p id="password">{password}</p>
        </div>
        <Button onClick={handleCopyPassword}>{t('main.copy')}</Button>
      </div>
    </div>
  );
};
