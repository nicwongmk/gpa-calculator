import { useEffect, useState } from 'react';
import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import MainButton from "../../UI/button/mainButton";
import Course from './course';

const CourseList = ({ dataFromSetting, cumulativeEnteredGPA, totalEnteredCredits }) => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        cumulativeEnteredGPA(cumulativeEnteredGPACalculation);
        totalEnteredCredits(totalEnteredCreditsCalculation);
    });

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

    const cumulativeEnteredGPACalculation = () => ((course
        .map(courseData => courseData.grade === "" ? 0 : dataFromSetting
        .find(gradeList => (gradeList.grade === courseData.grade)).point * courseData.credits))
        .reduce((prev, points) => prev + points, 0)
    );

    const totalEnteredCreditsCalculation = () => (course.reduce((prev, courseData) => prev + courseData.credits, 0));

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