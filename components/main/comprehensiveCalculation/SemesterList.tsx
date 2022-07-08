import { useState } from "react";
import NavbarButton from "../../UI/button/navbarButton";
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const Semester = ({ index, selectedSemester }) => {
    return (
        <option onClick={ selectedSemester(index) }>{ `Sem ${index}` }</option>
    )
}

const SemesterList = ({ sendSelectedSemester }) => {
    const [semester, setSemester] = useState([1, 1, 1]);
    const [selectedSemester, setSelectedSemester] = useState(0);

    const setSemesterHandler = () => {
        setSemester((prev) => [...prev, 1]);
    }

    sendSelectedSemester(selectedSemester);
    
    return (
        <div className={ styles.semesterList }>
            <NavbarButton onClick={ setSemesterHandler }>Add Semester</NavbarButton>
            <select size={semester.length}>
                <Semester index={"ALL"} selectedSemester={ () => setSelectedSemester(0) } />
                { semester.map((semester, index) => 
                <Semester 
                    key={ index } 
                    index={ index + 1 } 
                    selectedSemester={ (semester) => setSelectedSemester(semester) }
                />) }
            </select>
        </div>
    );
};

export default SemesterList;