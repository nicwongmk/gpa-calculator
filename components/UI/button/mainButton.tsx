import styles from '../../../styles/components/UI/button.module.css'

const MainButton = (props: any) => {
    return (
        <button className={ `${styles.mainButton} ${props.className}` } onClick={ props.onClick }>
            { props.children }
        </button>
    );
};

export default MainButton;