import styles from '../../../styles/components/UI/backdrop.module.css';

const Backdrop = ({ hideBackdrop }) => {
    return (
        <div className={ styles.backdrop } onClick={ hideBackdrop }/>
    );
};

export default Backdrop;