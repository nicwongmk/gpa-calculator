import useLocalStorage from "../hooks/useLocalStorage";
import DecimalPlacesContext from "./decimalPlacesContext";
import GradeContext from "./gradeContext"
import MaxGPAContext from "./maxGPAContext";
import RoundingContext from "./roundingContext";

const CalculationDataProvider = (props: any) => {

    const [gradeList, setGradeList] = useLocalStorage("gradeList", [
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
    ]);
    const [maxGPA, setMaxGPA] = useLocalStorage("maxGPA", 4.00);
    const [decimalPlaces, setDecimalPlaces] = useLocalStorage("decimalPlaces", 2);
    const [rounding, setRounding] = useLocalStorage("round", "roundTo");

    return (
        <GradeContext.Provider value={{ gradeList, setGradeList }}>
            <MaxGPAContext.Provider value={{ maxGPA, setMaxGPA }}>
                <DecimalPlacesContext.Provider value={{ decimalPlaces, setDecimalPlaces }}>
                    <RoundingContext.Provider value={{ rounding, setRounding}}>
                        {props.children}
                    </RoundingContext.Provider>
                </DecimalPlacesContext.Provider>
            </MaxGPAContext.Provider>
        </GradeContext.Provider>
    );
};

export default CalculationDataProvider;