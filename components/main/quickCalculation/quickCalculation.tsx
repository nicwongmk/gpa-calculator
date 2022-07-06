import { useContext, useState } from 'react';
import DecimalPlacesContext from '../../../context/decimalPlacesContext';
import MaxGPAContext from '../../../context/maxGPAContext';
import RoundingContext from '../../../context/roundingContext';
import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import RegularInput from '../../UI/input/regularInput';
import CourseList from './courseList';

const QuickCalculation = () => {
    const {maxGPA} = useContext(MaxGPAContext);
    const {decimalPlaces} = useContext(DecimalPlacesContext);
    const {rounding} = useContext(RoundingContext);
    const [cumulativeGPA, setCumulativeGPA] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);
    const [currentGPA, setCurrentGPA] = useState(0);
    const [currentCredits, setCurrentCredits] = useState(0);

    const showGPA = (rounding: string): number => {
        if (totalCredits === 0 && currentCredits === 0) return 0;

        const gpaAfterMax: number = Math.min(((cumulativeGPA + currentGPA * currentCredits)  / (totalCredits + currentCredits )), maxGPA);
        const decimalPlacesForFn: number = Math.pow(10, decimalPlaces) / Math.pow(10, decimalPlaces);
        switch(rounding) {
            case "roundTo":
                return parseFloat(Math.min(gpaAfterMax)
                .toFixed(decimalPlaces));
            case "roundUp":
                return Math.ceil((gpaAfterMax) * decimalPlacesForFn);
            case "roundDown":
                return Math.floor((gpaAfterMax) * decimalPlacesForFn);
            case "default":
                return 0;
        }
    };
    
    return (
        <div className={ styles.container }>
            <header className={ styles.resultContainer }>
                <p>CGPA:</p>
                <p>{ showGPA(rounding) }</p>
                <p>Total Credits:</p>
                <p>{ (totalCredits + currentCredits) }</p>
            </header>
            <div className={ styles.inputContainer }>
                <p>Current GPA:</p>
                <RegularInput  type={'number'} max={0} min={0} step={0.01} value={currentGPA} onChange={(event) => setCurrentGPA(parseFloat(event.target.value))} name={''} />
                <p>Current Credits:</p>
                <RegularInput type={'text'} max={0} min={0} step={0} value={currentCredits || 0} onChange={(event) => setCurrentCredits(parseInt(event.target.value))} name={''} />
            </div>
            <CourseList
                cumulativeEnteredGPA={ (cumulativeEnteredGPA: number) => setCumulativeGPA(cumulativeEnteredGPA) }
                totalEnteredCredits={ (totalEnteredCredits: number) => setTotalCredits(totalEnteredCredits) }
            />
        </div>
    );
};

export default QuickCalculation;