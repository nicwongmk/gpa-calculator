import styles from '../../../styles/components/UI/input.module.css'

type props = {

    className?: string,
    type?: string,
    placeholder?: string,
    name: string,
    max?: number,
    min?: number,
    step?: number,
    value: any,
    onChange: any
}

const RegularInput = ({ className, name, type, placeholder, max, min, step, value, onChange }:props) => {
    return (
        <input 
            className={ `${className} ${styles.regularInput}` }
            type={ type }
            name={ name }
            placeholder={ placeholder }
            max={ max }
            min={ min }
            step={ step }
            value={ value }
            onChange={ onChange }
        />
    );
};

export default RegularInput;