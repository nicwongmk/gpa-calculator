import { useState } from 'react';
import RegularInput from '../../UI/input/regularInput';
import CourseList from './courseList';
import styles from '../../../styles/components/main/quickCalculation.module.css';
import useCalculatingGPA from '../../../hooks/useCalculatingGPA';

const QuickCalculation = () => {
    const [cumulativeGPA, setCumulativeGPA] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);
    const [currentGPA, setCurrentGPA] = useState<Number | string>(0);
    const [currentCredits, setCurrentCredits] = useState<number | string>(0);
    const showGPA = useCalculatingGPA(cumulativeGPA, totalCredits);

    console.log(currentCredits);
    
    return (
        <div className={ styles.container }>
            <header className={ styles.resultContainer }>
                <p>CGPA:</p>
                <p>{ showGPA }</p>
                <p>Total Credits:</p>
                <p>{ 0 }</p>
            </header>
            <div className={ styles.inputContainer }>
                <p>Current GPA:</p>
                <RegularInput  type={'number'} max={0} min={0} step={0.01} value={currentGPA} onChange={(event) => setCurrentGPA(isNaN(parseFloat(event.target.value)) ? "" : parseFloat(event.target.value))} name={''} />
                <p>Current Credits:</p>
                <RegularInput type={'text'} max={0} min={0} step={0} value={currentCredits} onChange={(event) => setCurrentCredits(isNaN(parseInt(event.target.value)) ? "" : parseInt(event.target.value))} name={''} />
            </div>
            <CourseList
                cumulativeEnteredGPA={ (cumulativeEnteredGPA: number) => setCumulativeGPA(cumulativeEnteredGPA) }
                totalEnteredCredits={ (totalEnteredCredits: number) => setTotalCredits(totalEnteredCredits) }
            />
        </div>
    );
};

export default QuickCalculation;