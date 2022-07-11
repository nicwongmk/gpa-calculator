import MainButton from "../../../UI/button/mainButton";
import GPAVisualisation from "./GPAVisualisation";
import styles from '../../../../styles/components/main/comprehensiveCalculation.module.css';
import GradeVisualisation from "./gradeVisualisation";
import { useState } from "react";

const GPAVisualiser = ({ courseData, CGPA, totalCredits }) => {
    const [visualiserType, setVisualiserType] = useState("GPAChart");

    return (
        <div className={ styles.visualiserContainer }>
           { visualiserType === "GPAChart" && <GPAVisualisation courseData={ courseData } CGPA={ CGPA } totalCredits={totalCredits} /> }
           { visualiserType === "gradeChart" && <GradeVisualisation courseData={ courseData } /> }
           <div className={ styles.GPAVisualiserButtonContainer }>
                <MainButton onClick={ () => setVisualiserType("GPAChart") }>GPA Chart</MainButton>
                <MainButton onClick={ () => setVisualiserType("gradeChart") }>Grade Chart</MainButton>
           </div>
        </div>
    );
}

export default GPAVisualiser;