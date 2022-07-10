import { useState } from 'react';
import CourseList from './CourseList';
import GPASummary from './GPASummary';
import SemesterList from './SemesterList';
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';
import GPAVisualiser from './GPAVisualiser/GPAVisualiser';

const ComprehensiveCalculation = () => {
    const [selectedSemester, setSelectedSemester] = useState(0);
    const [cumulativeEnteredGPA, setCumulativeEnteredGPA] = useState(0);
    const [totalEnteredCredits, setTotalEnteredCredits] = useState(0);
    const [courseData, setCourseData] = useState([]);
    const [CGPA, setCGPA] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);

    return (
        <div className={ styles.comprehensiveCalculation }>
            <SemesterList sendSelectedSemester={ (selectedSemester) => setSelectedSemester(selectedSemester) } />
            <CourseList selectedSemester={ selectedSemester } cumulativeEnteredGPA={(cumulativeEnteredGPA) => setCumulativeEnteredGPA(cumulativeEnteredGPA)} totalEnteredCredits={(totalEnteredCredits) => setTotalEnteredCredits(totalEnteredCredits)} courseData={(courseData) => setCourseData(courseData)} CGPA={(CGPA) => setCGPA(CGPA)} totalCredits={(totalCredits) => setTotalCredits(totalCredits)}/>
            <div className={ styles.GPAVisuliser }>
                <GPASummary selectedSemester={ selectedSemester } cumulativeEnteredGPA={ cumulativeEnteredGPA } totalEnteredCredits={ totalEnteredCredits } />
                <GPAVisualiser courseData={ courseData } CGPA={ CGPA } totalCredits={ totalCredits } />
            </div>
        </div>
    );
};

export default ComprehensiveCalculation;