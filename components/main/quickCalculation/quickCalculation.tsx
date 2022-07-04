import { useState } from 'react';
import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import RegularInput from '../../UI/input/regularInput';
import CourseList from './courseList';

const QuickCalculation = ({ dataFromSetting, decimalPlaces }) => {
    const [cumulativeGPA, setCumulativeGPA] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);

    const showGPA = (totalCredits === 0) ? 0 : (cumulativeGPA / totalCredits).toFixed(decimalPlaces);

    return (
        <div className={ styles.container }>
            <div className={ styles.resultContainer }>
                <p>CGPA:</p>
                <p>{ showGPA }</p>
                <p>Total Credits:</p>
                <p>{ totalCredits }</p>
            </div>
            <div className={ styles.inputContainer }>
                <p>Current GPA:</p>
                <RegularInput className={undefined} type={''} placeholder={''} max={0} min={0} step={0} value={undefined} onChange={undefined} />
                <p>Current Credits:</p>
                <RegularInput className={undefined} type={''} placeholder={''} max={0} min={0} step={0} value={undefined} onChange={undefined} />
            </div>
            <CourseList
                dataFromSetting = { dataFromSetting }
                cumulativeEnteredGPA={ (cumulativeEnteredGPA) => setCumulativeGPA(cumulativeEnteredGPA) }
                totalEnteredCredits={ (totalEnteredCredits) => setTotalCredits(totalEnteredCredits) }
            />
        </div>
    );
};

export default QuickCalculation;