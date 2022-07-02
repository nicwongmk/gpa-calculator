import { useState } from 'react';
import styles from '../../styles/components/header/header.module.css';
import HamburgerButton from '../UI/button/hamburgerButton';
import MainButton from '../UI/button/mainButton';
import RightNavbar from './rightNavbar';
import Setting from './setting/setting';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showSetting, setShowSetting] = useState(false);

    return (
        <header>
            <div className={ styles.container }>
                <h1>GPA Calculator</h1>
                <div className={ styles.buttonContainer }>
                    <MainButton className={ styles.mainButton } onClick={() => setShowSetting((prev) => !prev)}>Setting</MainButton>
                    <MainButton className={ styles.mainButton }>About</MainButton>
                    <MainButton className={ styles.mainButton }>Contact</MainButton>
                    <HamburgerButton className={ styles.hamburgerButton } onClick={() => setShowNavbar((prev) => !prev)}>≡</HamburgerButton>
                    { showSetting && <Setting closeSetting={() => setShowSetting((prev) => !prev)} /> }
                </div>
            </div>
            { showNavbar && <RightNavbar showNavbar={() => setShowNavbar((prev) => !prev)} showSetting={ () => { setShowNavbar((prev) => !prev); setShowSetting((prev) => !prev) } }/> }
        </header>
    );
};

export default Header;