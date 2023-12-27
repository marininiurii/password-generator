import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <span className={styles.lable}>
        {t('main.created')}{' '}
        <a className={styles.myName} href="https://github.com/marininiurii">
          Marinin Iurii
        </a>
      </span>
    </div>
  );
};
