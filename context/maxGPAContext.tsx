import { createContext } from "react";

const MaxGPAContext = createContext({
    maxGPA: 0,
    setMaxGPA: (maxGPA: any) => {}
});

export default MaxGPAContext;