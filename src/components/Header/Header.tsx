import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{t('main.header')}</h1>
      <img
        className={styles.imgLockIcon}
        width="48"
        height="48"
        src="https://img.icons8.com/doodle/48/password.png"
        alt="password"
      />
      <div className={styles.login}>
        <span>
          <Link to="/">{t('main.home')}</Link> | <Link to="/login">{t('main.login')}</Link>
        </span>
        <Switch
          className={styles.switch}
          id="switch"
          checked={i18n.language === 'en'}
          onChange={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
          checkedChildren="rus"
          unCheckedChildren="eng"
        />
      </div>
    </div>
  );
};
