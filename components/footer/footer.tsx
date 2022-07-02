import styles from '../../styles/components/footer/footer.module.css'

const Footer = () => {
    return (
        <footer className={ styles.footer }>
            <p>Designed by Nicholas Wong in 2022</p>
            <p>GPA Calculator is designed by Next.js with TypeScript</p>
        </footer>
    );
}

export default Footer;