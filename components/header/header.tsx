import styles from '../../styles/components/header/header.module.css'
import HamburgerButton from '../UI/hamburgerButton';
import MainButton from '../UI/mainButton';
import RightNavbar from './rightNavbar';

const Header = () => {
    return (
        <header className={ styles.container }>
            <h1>GPA Calculator</h1>
            <div className={ styles.buttonContainer }>
                <MainButton className={ styles.mainButton }>Setting</MainButton>
                <MainButton className={ styles.mainButton }>About</MainButton>
                <MainButton className={ styles.mainButton }>Contact</MainButton>
                <HamburgerButton className={ styles.hamburgerButton }>≡</HamburgerButton>
            </div>
            <RightNavbar />
        </header>
    );
};

export default Header;