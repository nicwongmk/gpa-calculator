import styles from '../../../styles/components/UI/input.module.css'

type props = {
    className: any,
    placeholder: string,
    name: string,
    value: any,
    onChange: any
}

const TextArea = ({ className, name, placeholder, value, onChange }:props) => {
    return (
        <textarea
            className={ `${className} ${styles.textArea}` }
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
        />
    );
};

export default TextArea;