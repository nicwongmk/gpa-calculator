import styles from '../../../styles/components/header/setting/grade.module.css';
import PointInput from '../../UI/input/pointInput';

interface Props {
    pointChangeHandler: any,
    grade: string,
    point: number,
}

const Grade = ({ pointChangeHandler, grade, point }: Props): JSX.Element => {
    return (
        <li className={ styles.container }>
            <p>{grade}</p>
            <PointInput 
                type={"number"} 
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