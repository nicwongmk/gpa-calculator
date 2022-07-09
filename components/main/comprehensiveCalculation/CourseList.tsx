import { useContext, useEffect, useState } from "react";
import GradeContext from "../../../context/gradeContext";
import NavbarButton from "../../UI/button/navbarButton";
import RegularInput from "../../UI/input/regularInput";
import RoundButton from "../../UI/button/roundButton";
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

let reference = 0;

const Course = ({ courseID, courseData, changeCourseDataHandler, deleteCourseHandler }) => {
    return (
        <li>
            <RegularInput 
                className={ styles.nameInput } 
                placeholder={"Course name (optional)"} 
                value={ courseData.name } 
                onChange={(event) => changeCourseDataHandler(courseData.reference, event.target.value, courseData.grade, courseData.credits, courseID)}
            />
            <RegularInput 
                className={ styles.otherInput } 
                placeholder={"Grade"} 
                value={ courseData.grade } 
                onChange={(event) => changeCourseDataHandler(courseData.reference, courseData.name, (event.target.value).toUpperCase(), courseData.credits, courseID)}
            />
            <RegularInput 
                className={ styles.otherInput } 
                placeholder={"Credit"} 
                value={ courseData.credits } 
                onChange={(event) => changeCourseDataHandler(courseData.reference, courseData.name, courseData.grade, parseInt(event.target.value || 0), courseID)} 
            />
            <RoundButton className={ styles.roundButton} onClick={ () => deleteCourseHandler( courseData.reference )}>-</RoundButton>
        </li>
    );
}

const CourseList = ({ selectedSemester, cumulativeEnteredGPA, totalEnteredCredits }) => {
    const { gradeList } = useContext(GradeContext);
    const [course, setCourse] = useState([]);
    const [invalidInput, setInvalidInput] = useState([0, false]);

    const addCourseHandler = () => {
        reference++;
        setCourse((prev) => [...prev, { reference: reference, semester: selectedSemester, name: "", grade:"", credits:0 }])
    };

    const changeCourseDataHandler = (reference, name, grade, credits, courseID) => {
        if (grade != "" && gradeList.find(gradeList => (gradeList.grade === grade)) === undefined ) {
            setInvalidInput([courseID, true]);
            const clone =[...course];
            clone[courseID].grade = "";
            setCourse(clone);
        } else {
            setInvalidInput([courseID, false]);
            const clone = [...course];
            const res = clone.findIndex(obj => obj.reference === reference);
            clone[res].name = name;
            clone[res].grade = grade;
            clone[res].credits = credits;
            setCourse(clone);
        }
    };

    const deleteCourseHandler = (reference) => {
        const clone = [...course];
        const newClone = clone.filter(course => course.reference !== reference);
        console.log(newClone);
        setCourse(newClone);
    };

    const cumulativeEnteredGPACalculation = (): number => ((course
        .map(courseData => courseData.grade === "" ? 0 : gradeList
        .find(gradeList => (gradeList.grade === courseData.grade)) === undefined ? 0 : gradeList
        .find(gradeList => (gradeList.grade === courseData.grade)).point * courseData.credits))
        .reduce((prev, points) => prev + points, 0)
    );

    const totalEnteredCreditsCalculation = (): number => (course.reduce((prev, courseData) => prev + courseData.credits, 0));

    useEffect(() => {
        cumulativeEnteredGPA(cumulativeEnteredGPACalculation);
        totalEnteredCredits(totalEnteredCreditsCalculation);
    })

    return (
        <div className={ styles.courseList }>
            <NavbarButton onClick={ addCourseHandler } disabled={ selectedSemester === 0 }>{ `${selectedSemester === 0 ? "All Courses" : "Add Course"}` }</NavbarButton>
            <ol>
                {course.filter((course) => selectedSemester === 0 ? course.semester !== selectedSemester : course.semester === selectedSemester)
                .map((course, index) =>  
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