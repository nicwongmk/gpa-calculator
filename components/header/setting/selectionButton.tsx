import MainButton from "../../UI/button/mainButton";

const SelectionButton = ({ sendGradeSetting, sendmaxGPASetting, sendDecimalPlaces, sendRound }) => {

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
        sendGradeSetting(standard1[0].gradeList);
        sendmaxGPASetting(standard1[0].maxGPA);
        sendDecimalPlaces(standard1[0].decimalPlaces);
        sendRound(standard1[0].round);
    }

    const setStandard2Hander = () => {
        sendGradeSetting(standard2[0].gradeList);
        sendmaxGPASetting(standard2[0].maxGPA);
        sendDecimalPlaces(standard2[0].decimalPlaces);
        sendRound(standard2[0].round);
    }

    const setStandard3Hander = () => {
        sendGradeSetting(standard3[0].gradeList);
        sendmaxGPASetting(standard3[0].maxGPA);
        sendDecimalPlaces(standard3[0].decimalPlaces);
        sendRound(standard3[0].round);
    }

    return (
        <>
            <MainButton onClick={ setStandard1Hander }>Standard 1 (Default)</MainButton>
            <p>Example: B+ : 3.30 | Max: 4.0 | Place: 2</p>
            <MainButton onClick={ setStandard2Hander }>Standard 2</MainButton>
            <p>Example: B+ : 3.33 | Max: 4.0 | Place: 2</p>
            <MainButton onClick={ setStandard3Hander }>Standard 3</MainButton>
            <p>Example: B+ : 3.30 | Max: 4.3 | Place: 2</p>
        </>
    )
}

export default SelectionButton;