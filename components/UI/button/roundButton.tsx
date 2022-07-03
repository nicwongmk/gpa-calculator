import styles from '../../../styles/components/UI/button.module.css'

const RoundButton = (props: any) => {
    return (
        <button className={ `${styles.roundButton} ${props.className}` } onClick={ props.onClick }>
            { props.children }
        </button>
    );
};

export default RoundButton;