import styles from '../../../styles/components/UI/button.module.css'

const HamburgerButton = (props: any) => {
    return (
        <button className={ `${styles.hamburgerButton} ${props.className}` } onClick={ props.onClick }>
            { props.children }
        </button>
    );
};

export default HamburgerButton;