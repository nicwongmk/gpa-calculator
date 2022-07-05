import { createContext } from "react";

const RoundingContext = createContext({
    rounding: "roundTo",
    setRounding: (round: any) => {}
});

export default RoundingContext;