import { useContext, useState } from 'react';
import DecimalPlacesContext from '../../../context/decimalPlacesContext';
import MaxGPAContext from '../../../context/maxGPAContext';
import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import RegularInput from '../../UI/input/regularInput';
import CourseList from './courseList';

const QuickCalculation = () => {
    const {maxGPA} = useContext(MaxGPAContext);
    const {decimalPlaces} = useContext(DecimalPlacesContext);
    const [cumulativeGPA, setCumulativeGPA] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);
    const [currentGPA, setCurrentGPA] = useState(0);
    const [currentCredits, setCurrentCredits] = useState(0);

    const showGPA = (totalCredits === 0 && currentCredits === 0) ? 0 : Math.min(((cumulativeGPA + currentGPA * currentCredits)  / (totalCredits + currentCredits )), maxGPA).toFixed(decimalPlaces);

    return (
        <div className={ styles.container }>
            <div className={ styles.resultContainer }>
                <p>CGPA:</p>
                <p>{ showGPA }</p>
                <p>Total Credits:</p>
                <p>{ (totalCredits + currentCredits) }</p>
            </div>
            <div className={ styles.inputContainer }>
                <p>Current GPA:</p>
                <RegularInput  type={'number'} max={0} min={0} step={0.01} value={currentGPA} onChange={(event) => setCurrentGPA(parseFloat(event.target.value))} name={''} />
                <p>Current Credits:</p>
                <RegularInput type={'text'} max={0} min={0} step={0} value={currentCredits || 0} onChange={(event) => setCurrentCredits(parseInt(event.target.value))} name={''} />
            </div>
            <CourseList
                cumulativeEnteredGPA={ (cumulativeEnteredGPA) => setCumulativeGPA(cumulativeEnteredGPA) }
                totalEnteredCredits={ (totalEnteredCredits) => setTotalCredits(totalEnteredCredits) }
            />
        </div>
    );
};

export default QuickCalculation;