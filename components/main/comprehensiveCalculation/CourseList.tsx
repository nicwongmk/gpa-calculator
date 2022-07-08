import { useState } from "react";
import NavbarButton from "../../UI/button/navbarButton";
import RegularInput from "../../UI/input/regularInput";
import RoundButton from "../../UI/button/roundButton";
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const Course = ({ index,  }) => {
    return (
        <li>
            <RegularInput className={ styles.nameInput } placeholder={"Course name (optional)"} value={undefined} onChange={undefined} />
            <RegularInput className={ styles.otherInput } placeholder={"Grade"} value={undefined} onChange={undefined} />
            <RegularInput className={ styles.otherInput } placeholder={"Credit"} value={undefined} onChange={undefined} />
            <RoundButton className={ styles.roundButton} >-</RoundButton>
        </li>
    );
}

const CourseList = ({ selectedSemester }) => {
    const [course, setCourse] = useState([]);

    const addCourseHandler = () => {
        setCourse((prev) => [...prev, 1])
    }

    return (
        <div className={ styles.courseList }>
            <NavbarButton onClick={ addCourseHandler }>Add Course</NavbarButton>
            <ol>
                { course.map((course, index) => 
                <Course 
                    key={ index } 
                    semester
                    name
                />) }
            </ol>
        </div>
    );
};

export default CourseList;