import { useState } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import MainButton from "../../UI/button/mainButton";
import Course from './course';

const CourseList = ({ cumulativeEnteredGPA, totalEnteredCredits }) => {
    const [course, setCourse] = useState([]);
    const[selectedGradeSetting, setSelectedGradeSetting] = useLocalStorage("gradeList", [
        { grade: "A+", point: 4},
        { grade: "A", point: 4},
        { grade: "A-", point: 3.7},
        { grade: "B+", point: 3.3},
        { grade: "B", point: 3},
        { grade: "B-", point: 2.7},
        { grade: "C+", point: 2.3},
        { grade: "C", point: 2},
        { grade: "C-", point: 1.7},
        { grade: "D+", point: 1.3},
        { grade: "D", point: 1},
        { grade: "D-", point: 0.7},
        { grade: "F", point: 0},
    ]);

    const addCourseHandler = () => {
        setCourse((prev) => [...prev, { name:"", grade:"", credits: 0}]);
    };

    const deleteCourseHandler = (index) => {
        setCourse([
            ...course.slice(0, index),
            ...course.slice(index + 1)
        ]);
    };

    const changeCourseDataHandler = (name, grade, credits, index) => {
        const clone = [...course];
        clone[index].name = name;
        clone[index].grade = grade;
        clone[index].credits = credits;
        setCourse(clone);
    };

    cumulativeEnteredGPA((course.map(courseData => courseData.grade === "" ? 0 : selectedGradeSetting[selectedGradeSetting.findIndex(gradeList => gradeList.grade === courseData.grade)].point)).reduce((prev, points) => prev + points, 0));
    totalEnteredCredits(course.reduce((prev, courseData) => prev + courseData.credits, 0));

    return (
        <>
            <MainButton onClick={ addCourseHandler }>Add New Course</MainButton>
            <ol className={ styles.courseListContainer }>
                { course.map((courseData, courseID) => 
                    <Course 
                        key={ courseID }
                        courseID={ courseID } 
                        courseData={ courseData }
                        changeCourseDataHandler={  changeCourseDataHandler }
                        deleteCourseHandler={ deleteCourseHandler } 
                    />) 
                }
            </ol>
        </>
    );
};

export default CourseList;