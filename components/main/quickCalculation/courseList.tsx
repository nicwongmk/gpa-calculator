import { useState } from 'react';
import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import MainButton from "../../UI/button/mainButton";
import Course from './course';

const CourseList = () => {
    const [course, setCourse] = useState([]);

    const addCourseHandler = () => {
        setCourse((prev) => [...prev, { name:"", grade:"", credits: 0}]);
    };

    const deleteCourseHandler = (index) => {
        setCourse([
            ...course.slice(0, index),
            ...course.slice(index + 1)
        ])
    }

    return (
        <>
            <MainButton onClick={ addCourseHandler }>Add New Course</MainButton>
            <ol className={ styles.courseListContainer }>
                { course.map((courseData, courseID) => 
                    <Course 
                        courseID={ courseID } 
                        deleteCourseHandler={ deleteCourseHandler } 
                    />) 
                }
            </ol>
        </>
    );
};

export default CourseList;