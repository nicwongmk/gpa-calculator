import styles from '../../styles/components/header/rightNavbar.module.css'
import Backdrop from "../UI/backdrop/backdrop";
import NavbarButton from "../UI/button/navbarButton";

const RightNavbar = ({ showNavbar, showSetting, showAbout, showContact }) => {
    return (
        <>
            <Backdrop hideBackdrop={ showNavbar } />
            <nav className={ styles.container }>
                <NavbarButton onClick={ showSetting }>Setting</NavbarButton>
                <NavbarButton onClick={ showAbout }>About</NavbarButton>
                <NavbarButton onClick={ showContact }>Contact</NavbarButton>
            </nav>
        </>
    );
};

export default RightNavbar;