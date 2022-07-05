import styles from '../../../styles/components/header/setting/grade.module.css';
import PointInput from '../../UI/input/pointInput';

type Props = {
    pointChangeHandler: any,
    grade: string,
    point: number,
}

const Grade = ({ pointChangeHandler, grade, point }:Props) => {
    return (
        <li className={ styles.container }>
            <p>{grade}</p>
            <PointInput 
                className={undefined} 
                type={"number"} 
                placeholder={''} 
                max={100} 
                min={0} 
                step={0.01} 
                value={point} 
                onChange={(event: { target: { value: string; }; }) => {
                    pointChangeHandler({ grade: grade, point: parseFloat(event.target.value) || 0})
                }} 
            />
        </li>
    );
};

export default Grade;