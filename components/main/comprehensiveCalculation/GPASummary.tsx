import useCalculatingGPA from '../../../hooks/useCalculatingGPA';
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const GPASummary = ({ selectedSemester, cumulativeEnteredGPA, totalEnteredCredits }) => {
    const showSelectedSemester = selectedSemester === 0 ? "All" : selectedSemester;
    const GPA = useCalculatingGPA(cumulativeEnteredGPA, totalEnteredCredits);
    
    return (
        <div className={ styles.GPASummaryContainer }>
            <div className={ styles.semesterBox }>
                <h4>Sem</h4>
                <p>{ showSelectedSemester }</p>
            </div>
            <div className={ styles.GPASummary }>
                <p>{`CGPA: ${ GPA }`}</p> 
                <p>{`Total Credits: ${ totalEnteredCredits }`}</p>
            </div>
        </div>
    );
};

export default GPASummary;