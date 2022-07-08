import { useContext, useState } from "react";
import GradeContext from "../../../context/gradeContext";
import NavbarButton from "../../UI/button/navbarButton";
import RegularInput from "../../UI/input/regularInput";
import RoundButton from "../../UI/button/roundButton";
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const Course = ({ courseID, courseData, changeCourseDataHandler, deleteCourseHandler }) => {
    return (
        <li>
            <RegularInput 
                className={ styles.nameInput } 
                placeholder={"Course name (optional)"} 
                value={ courseData.name } 
                onChange={(event) => changeCourseDataHandler(event.target.value, courseData.grade, courseData.credits, courseID)}
            />
            <RegularInput 
                className={ styles.otherInput } 
                placeholder={"Grade"} 
                value={ courseData.grade } 
                onChange={(event) => changeCourseDataHandler(courseData.name, event.target.value, courseData.credits, courseID)}
            />
            <RegularInput 
                className={ styles.otherInput } 
                placeholder={"Credit"} 
                value={ courseData.credits } 
                onChange={(event) => changeCourseDataHandler(courseData.name, courseData.grade, event.target.value, courseID)} 
            />
            <RoundButton className={ styles.roundButton} onClick={ () => deleteCourseHandler( courseID )}>-</RoundButton>
        </li>
    );
}

const CourseList = ({ selectedSemester }) => {
    const { gradeList } = useContext(GradeContext);
    const [course, setCourse] = useState([]);
    const [invalidInput, setInvalidInput] = useState([0, false]);

    const addCourseHandler = () => {
        setCourse((prev) => [...prev, { semester: selectedSemester, name: "", grade:"", credits:0 }])
    };

    const changeCourseDataHandler = (name, grade, credits, courseID) => {
        if (grade != "" && gradeList.find(gradeList => (gradeList.grade === grade)) === undefined ) {
            setInvalidInput([courseID, true]);
            const clone =[...course];
            clone[courseID].grade = "";
            setCourse(clone);
        } else {
            setInvalidInput([courseID, false]);
            const clone = [...course];
            clone[courseID].name = name;
            clone[courseID].grade = grade;
            clone[courseID].credits = credits;
            setCourse(clone);
        }
    };

    const deleteCourseHandler = (index) => {
        setCourse([
            ...course.slice(0, index),
            ...course.slice(index + 1)
        ]);
    };

    return (
        <div className={ styles.courseList }>
            <NavbarButton onClick={ addCourseHandler }>Add Course</NavbarButton>
            <ol>
                { course.map((course, index) => 
                <Course 
                        key={index}
                        courseID={index}
                        courseData={course}
                        changeCourseDataHandler={ changeCourseDataHandler }
                        deleteCourseHandler={ deleteCourseHandler }
                />) }
            </ol>
        </div>
    );
};

export default CourseList;