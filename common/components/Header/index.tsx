import ExploreIcon from '@mui/icons-material/Explore';
import { Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from "next/link";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <ExploreIcon className={styles.icon} />
          Полярная Аврора
        </div>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.contacts}>
          <span style={{ display: 'flex', alignItems: 'center' }}><PhoneIcon style={{ marginRight: 5 }} /><a href="tel:+79212280472">+7 921 2280472</a></span>
          <span style={{ display: 'flex', alignItems: 'center' }}><MailIcon style={{ marginRight: 5 }} /><a href="mailto:polaraurora@yandex.ru">polaraurora@yandex.ru</a></span>
        </div>
        <Button variant="contained" className={styles.button}>Войти</Button>
      </div>
    </header>
  );
};
