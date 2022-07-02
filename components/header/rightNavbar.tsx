import { Fragment } from "react";
import styles from '../../styles/components/header/rightNavbar.module.css'
import Backdrop from "../UI/backdrop/backdrop";
import NavbarButton from "../UI/button/navbarButton";

const RightNavbar = ({ showNavbar }) => {
    return (
        <Fragment>
            <Backdrop hideBackdrop={ showNavbar } />
            <nav className={ styles.container }>
                <NavbarButton>Setting</NavbarButton>
                <NavbarButton>About</NavbarButton>
                <NavbarButton>Contact</NavbarButton>
            </nav>
        </Fragment>
    );
};

export default RightNavbar;