import { useContext, useEffect, useState } from 'react';
import GradeContext from '../../../context/gradeContext';
import styles from '../../../styles/components/main/quickCalculation.module.css';
import MainButton from "../../UI/button/mainButton";
import Course from './course';

const CourseList = ({ cumulativeEnteredGPA, totalEnteredCredits }) => {
    const {gradeList} = useContext(GradeContext);
    const [course, setCourse] = useState([]);
    const [invalidInput, setInvalidInput] = useState([0, false]);

    useEffect(() => {
        cumulativeEnteredGPA(cumulativeEnteredGPACalculation);
        totalEnteredCredits(totalEnteredCreditsCalculation);
    });

    const addCourseHandler = (): void => {
        setCourse((prev) => [...prev, { name:"", grade:"", credits: 0}]);
    };

    const deleteCourseHandler = (index: number): void => {
        setCourse([
            ...course.slice(0, index),
            ...course.slice(index + 1)
        ]);
    };

    const changeCourseDataHandler = (name: string, grade: string, credits: number, index: number) => {
        if (grade != "" && gradeList.find(gradeList => (gradeList.grade === grade)) === undefined ) {
            setInvalidInput([index, true]);
            const clone =[...course];
            clone[index].grade = "";
            setCourse(clone);
        } else {
            setInvalidInput([index, false]);
            const clone = [...course];
            clone[index].name = name;
            clone[index].grade = grade;
            clone[index].credits = credits;
            setCourse(clone);
        }
    };

    const cumulativeEnteredGPACalculation = (): number => ((course
        .map(courseData => courseData.grade === "" ? 0 : gradeList
        .find(gradeList => (gradeList.grade === courseData.grade)) === undefined ? 0 : gradeList
        .find(gradeList => (gradeList.grade === courseData.grade)).point * courseData.credits))
        .reduce((prev, points) => prev + points, 0)
    );

    const totalEnteredCreditsCalculation = (): number => (course.reduce((prev, courseData) => prev + courseData.credits, 0));

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
                        invalidInput={ invalidInput }
                    />) 
                }
            </ol>
        </>
    );
};

export default CourseList;