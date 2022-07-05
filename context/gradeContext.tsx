import { createContext } from "react";

const GradeContext = createContext({
    gradeList: [],
    setGradeList: (gradeList: any) => {}
});

export default GradeContext;