import { useContext } from "react";
import GradeContext from "../../../context/gradeContext";
import MaxGPAContext from "../../../context/maxGPAContext";
import DecimalPlacesContext from "../../../context/decimalPlacesContext";
import RoundingContext from "../../../context/roundingContext";
import MainButton from "../../UI/button/mainButton";

const SelectionButton = ({ className }) => {
    const {setGradeList} = useContext(GradeContext);
    const {setMaxGPA} = useContext(MaxGPAContext);
    const {setDecimalPlaces} = useContext(DecimalPlacesContext);
    const {setRounding} = useContext(RoundingContext);

    const standard1 = [{
        gradeList: [
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
        ],
        maxGPA: 4.00,
        decimalPlaces: 2,
        round: "roundTo"
    }];

    const standard2 = [{
        gradeList: [
            { grade: "A+", point: 4},
            { grade: "A", point: 4},
            { grade: "A-", point: 3.66},
            { grade: "B+", point: 3.33},
            { grade: "B", point: 3},
            { grade: "B-", point: 2.66},
            { grade: "C+", point: 2.33},
            { grade: "C", point: 2},
            { grade: "C-", point: 1.66},
            { grade: "D+", point: 1.33},
            { grade: "D", point: 1},
            { grade: "D-", point: 0.66},
            { grade: "F", point: 0},
        ],
        maxGPA: 4.00,
        decimalPlaces: 2,
        round: "roundTo"
    }];

    const standard3 = [{
        gradeList: [
            { grade: "A+", point: 4.3},
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
        ],
        maxGPA: 4.30,
        decimalPlaces: 2,
        round: "roundTo"
    }];

    const setStandard1Hander = () => {
        setGradeList(standard1[0].gradeList);
        setMaxGPA(standard1[0].maxGPA);
        setDecimalPlaces(standard1[0].decimalPlaces);
        setRounding(standard1[0].round);
    }

    const setStandard2Hander = () => {
        setGradeList(standard2[0].gradeList);
        setMaxGPA(standard2[0].maxGPA);
        setDecimalPlaces(standard2[0].decimalPlaces);
        setRounding(standard2[0].round);
    }

    const setStandard3Hander = () => {
        setGradeList(standard3[0].gradeList);
        setMaxGPA(standard3[0].maxGPA);
        setDecimalPlaces(standard3[0].decimalPlaces);
        setRounding(standard3[0].round);
    }

    return (
        <div className={ className }>
            <MainButton onClick={ setStandard1Hander }>Standard 1 (Default)</MainButton>
            <p>Example: B+ : 3.30 | Max: 4.0 | Place: 2</p>
            <MainButton onClick={ setStandard2Hander }>Standard 2</MainButton>
            <p>Example: B+ : 3.33 | Max: 4.0 | Place: 2</p>
            <MainButton onClick={ setStandard3Hander }>Standard 3</MainButton>
            <p>Example: B+ : 3.30 | Max: 4.3 | Place: 2</p>
        </div>
    )
}

export default SelectionButton;