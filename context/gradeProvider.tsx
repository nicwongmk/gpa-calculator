import useLocalStorage from "../hooks/useLocalStorage";
import GradeContext from "./gradeContext"

const GradeProvider = (props: any) => {

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

    return (
        <GradeContext.Provider value={{gradeList, setGradeList}}>
            {props.children}
        </GradeContext.Provider>
    );
};

export default GradeProvider;