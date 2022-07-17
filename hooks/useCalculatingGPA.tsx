import { useContext } from "react";
import DecimalPlacesContext from "../context/decimalPlacesContext";
import MaxGPAContext from "../context/maxGPAContext";
import RoundingContext from "../context/roundingContext";

const useCalculatingGPA = (GPA: any, credits: any) => {
    const { maxGPA } = useContext(MaxGPAContext);
    const { decimalPlaces } = useContext(DecimalPlacesContext);
    const { rounding } = useContext(RoundingContext);

    if (credits === 0 || GPA === 0 || credits === undefined || GPA === undefined) return 0;

    const gpaAfterMax = Math.min(((GPA)  / (credits)), maxGPA);
    const decimalPlacesForFn = Math.pow(10, decimalPlaces) / Math.pow(10, decimalPlaces);
    switch(rounding) {
        case "roundTo":
            return parseFloat(Math.min(gpaAfterMax)
            .toFixed(decimalPlaces));
        case "roundUp":
            return Math.ceil((gpaAfterMax) * decimalPlacesForFn);
        case "roundDown":
            return Math.floor((gpaAfterMax) * decimalPlacesForFn);
        case "default":
            return 0;
    }
};

export default useCalculatingGPA;