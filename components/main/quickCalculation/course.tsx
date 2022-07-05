import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import RoundButton from "../../UI/button/roundButton";
import RegularInput from "../../UI/input/regularInput";

const Course = ({ courseID, courseData, changeCourseDataHandler, deleteCourseHandler }) => {

    return (
        <li className={ styles.courseList }>
            <RegularInput 
                className={styles.courseNameInput}
                type={""}
                placeholder={"Course Name (Optional)"}
                max={0}
                min={0}
                step={0}
                value={courseData.name}
                onChange={(event) => changeCourseDataHandler(event.target.value, courseData.grade, courseData.credits, courseID)} name={''}            />
            <RegularInput 
                className={styles.dataInput}
                type={""}
                placeholder={"Grade"}
                max={0}
                min={0}
                step={0}
                value={courseData.grade}
                onChange={(event) => changeCourseDataHandler(courseData.name, event.target.value, courseData.credits, courseID)} name={''}            />
            <RegularInput 
                className={styles.dataInput}
                type={"text"}
                placeholder={"Credits"}
                max={0}
                min={0}
                step={0}
                value={courseData.credits}
                onChange={(event) => changeCourseDataHandler(courseData.name, courseData.grade, (parseInt(event.target.value) || 0), courseID)} name={''}            />
            <RoundButton onClick={() => deleteCourseHandler(courseID) }>-</RoundButton>
        </li>
    );
};

export default Course;