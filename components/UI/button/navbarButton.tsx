import styles from '../../../styles/components/UI/button.module.css'

const NavbarButton = (props: any) => {
    return (
        <button className={ `${styles.navbarButton} ${props.className}` } disabled={props.disabled} onClick={ props.onClick }>
            { props.children }
        </button>
    );
};

export default NavbarButton;