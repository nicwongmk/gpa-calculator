import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import RoundButton from "../../UI/button/roundButton";
import RegularInput from "../../UI/input/regularInput";

const Course = ({ courseID, courseData, changeCreditsHandler, deleteCourseHandler }) => {

    return (
        <li className={ styles.courseList }>
            <RegularInput className={ styles.courseNameInput } type={""} placeholder={"Course Name (Optional)"} max={0} min={0} step={0} value={undefined} onChange={undefined} />
            <RegularInput 
                className={ styles.dataInput } 
                type={""} 
                placeholder={"Grade"} 
                max={0} 
                min={0} 
                step={0} 
                value={undefined} 
                onChange={undefined} 
            />
            <RegularInput 
                className={ styles.dataInput } 
                type={""} 
                placeholder={"Credits"} 
                max={0} 
                min={0} 
                step={0} 
                value={ courseData.credits } 
                onChange={(event) => changeCreditsHandler(parseInt(event.target.value), courseID)} 
            />
            <RoundButton onClick={() => deleteCourseHandler(courseID) }>-</RoundButton>
        </li>
    );
};

export default Course;