import styles from '../../../styles/components/main/quickCalculation.module.css';
import RoundButton from "../../UI/button/roundButton";
import RegularInput from "../../UI/input/regularInput";

const Course = ({ courseID, courseData, changeCourseDataHandler, deleteCourseHandler, invalidInput }) => {
    const [index, invalid] = invalidInput;

    return (
        <li className={ styles.courseList }>
            <RegularInput 
                className={styles.courseNameInput}
                placeholder={"Course Name (Optional)"}
                value={courseData.name}
                onChange={(event: { target: { value: string; }; }) => changeCourseDataHandler(event.target.value, courseData.grade, courseData.credits, courseID)} />
            <RegularInput 
                className={`${styles.dataInput} ${(courseID === index && invalid) && styles.invalidInput}`}
                placeholder={"Grade"}
                min={0}
                step={0}
                value={courseData.grade}
                onChange={(event: { target: { value: string; }; }) => changeCourseDataHandler(courseData.name, (event.target.value).toUpperCase(), courseData.credits, courseID)} />
            <RegularInput 
                className={styles.dataInput}
                placeholder={"Credits"}
                min={0}
                step={0}
                value={courseData.credits}
                onChange={(event: { target: { value: string; }; }) => changeCourseDataHandler(courseData.name, courseData.grade, (parseInt(event.target.value) || 0), courseID)} />
            <RoundButton onClick={() => deleteCourseHandler(courseID) }>-</RoundButton>
        </li>
    );
};

export default Course;