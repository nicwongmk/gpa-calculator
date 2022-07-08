import { useContext } from 'react';
import DecimalPlacesContext from '../../../context/decimalPlacesContext';
import MaxGPAContext from '../../../context/maxGPAContext';
import RoundingContext from '../../../context/roundingContext';
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const GPASummary = ({ selectedSemester, cumulativeEnteredGPA, totalEnteredCredits }) => {
    const {maxGPA} = useContext(MaxGPAContext);
    const {decimalPlaces} = useContext(DecimalPlacesContext);
    const {rounding} = useContext(RoundingContext);
    const showSelectedSemester = selectedSemester === 0 ? "All" : selectedSemester;

    const showGPA = (rounding: string): number => {
        if (totalEnteredCredits === 0) return 0;

        const gpaAfterMax: number = Math.min(((cumulativeEnteredGPA)  / (totalEnteredCredits)), maxGPA);
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
        <>
            <div className={ styles.GPASummaryContainer }>
                <div className={ styles.semesterBox }>
                    <h4>Sem</h4>
                    <p>{ showSelectedSemester }</p>
                </div>
                <header className={ styles.GPASummary }>
                    <p>{`CGPA: ${showGPA(rounding)}`}</p> 
                    <p>{`Total Credits: ${totalEnteredCredits}`}</p>
                </header>
            </div>
        </>
    );
};

export default GPASummary;