import styles from '../../../styles/components/header/setting/grade.module.css';
import PointInput from '../../UI/input/pointInput';

type Props = {
    pointChangeHandler: any,
    key: number,
    grade: string,
    point: number,
}

const Grade = ({ pointChangeHandler, key, grade, point }:Props) => {
    return (
        <div className={ styles.container }>
            <p>{grade}</p>
            <PointInput 
                key={key}
                className={undefined} 
                type={"number"} 
                placeholder={''} 
                max={100} 
                min={0} 
                step={0.01} 
                value={point} 
                onChange={(event) => {
                    pointChangeHandler({ grade: grade, point: parseFloat(event.target.value) || 0})
                }} 
            />
        </div>
    );
};

export default Grade;