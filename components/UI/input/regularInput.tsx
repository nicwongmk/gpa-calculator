import styles from '../../../styles/components/UI/input.module.css'

type props = {

    className: any,
    type: string,
    placeholder: string,
    max: number,
    min: number,
    step: number,
    value: any,
    onChange: any
}

const RegularInput = ({ className, type, placeholder, max, min, step, value, onChange }:props) => {
    return (
        <input 
            className={ `${className} ${styles.regularInput}` }
            type={ type }
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