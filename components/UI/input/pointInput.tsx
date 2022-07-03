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

const PointInput = ({ className, type, placeholder, max, min, step, value, onChange }:props) => {
    return (
        <input 
            className={ `${className} ${styles.pointInput}` }
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

export default PointInput;