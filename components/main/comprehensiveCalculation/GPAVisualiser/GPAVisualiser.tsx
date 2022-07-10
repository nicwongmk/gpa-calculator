import GPAVisualisation from "./GPAVisualisation";

const GPAVisualiser = ({ courseData, CGPA, totalCredits }) => {
    return (
        <>
           <GPAVisualisation courseData={ courseData } CGPA={ CGPA } totalCredits={totalCredits} />
        </>
    );
}

export default GPAVisualiser;