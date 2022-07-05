import { useState } from 'react';
import styles from '../../styles/components/header/header.module.css';
import HamburgerButton from '../UI/button/hamburgerButton';
import MainButton from '../UI/button/mainButton';
import About from './about/about';
import Contact from './contact/contact';
import RightNavbar from './rightNavbar';
import Setting from './setting/setting';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <header>
            <div className={ styles.container }>
                <h1>GPA Calculator</h1>
                <div className={ styles.buttonContainer }>
                    <MainButton className={ styles.mainButton } onClick={() => setShowSetting((prev) => !prev)}>Setting</MainButton>
                    <MainButton className={ styles.mainButton } onClick={() => setShowAbout((prev) => !prev)}>About</MainButton>
                    <MainButton className={ styles.mainButton } onClick={() => setShowContact((prev) => !prev)}>Contact</MainButton>
                    <HamburgerButton className={ styles.hamburgerButton } onClick={() => setShowNavbar((prev) => !prev)}>≡</HamburgerButton>
                    { showSetting && <Setting closeSetting={() => setShowSetting((prev) => !prev)}/> }
                    { showAbout && <About closeAbout={() => setShowAbout((prev) => !prev)}/> }
                    { showContact && <Contact closeContact={() => setShowContact((prev) => !prev)}/> }
                </div>
            </div>
            { showNavbar && 
                <RightNavbar 
                    showNavbar={() => setShowNavbar((prev) => !prev)} 
                    showSetting={ () => { setShowNavbar((prev) => !prev); setShowSetting((prev) => !prev) } }
                    showAbout={ () => { setShowNavbar((prev) => !prev); setShowAbout((prev) => !prev) } }
                    showContact={() => { setShowNavbar((prev) => !prev); setShowContact((prev) => !prev)} }
                /> 
            }
        </header>
    );
};

export default Header;