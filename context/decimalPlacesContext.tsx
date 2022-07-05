import { createContext } from "react";

const DecimalPlacesContext = createContext({
    decimalPlaces: 0,
    setDecimalPlaces: (decimalPlaces: any) => {}
});

export default DecimalPlacesContext;