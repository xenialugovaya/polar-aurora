import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            © Полярная Аврора {new Date().getFullYear()}
        </footer>
    );
};
