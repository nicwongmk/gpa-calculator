import { useState } from 'react';
import CourseList from './CourseList';
import GPASummary from './GPASummary';
import GPAVisualiser from './GPAVisualiser';
import SemesterList from './SemesterList';
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const ComprehensiveCalculation = () => {
    const [selectedSemester, setSelectedSemester] = useState(0);

    return (
        <div className={ styles.comprehensiveCalculation }>
            <SemesterList sendSelectedSemester={ (selectedSemester) => setSelectedSemester(selectedSemester) } />
            <CourseList selectedSemester={ selectedSemester } />
            <GPASummary />
            <GPAVisualiser />
        </div>
    );
};

export default ComprehensiveCalculation;