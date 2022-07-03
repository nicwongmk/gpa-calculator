import { useEffect } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
import PointInput from "../../UI/input/pointInput";

const OtherSetting = ({ receiveSelectedmaxGPASetting, receiveSelectedDecimalPlacesSetting}) => {
    const [maxGPA, setMaxGPA] = useLocalStorage("maxGPA", 4.00);
    const [decimalPlaces, setDecimalPlaces] = useLocalStorage("decimalPlaces", 2);

    useEffect(() => setMaxGPA(receiveSelectedmaxGPASetting), [receiveSelectedmaxGPASetting]);
    useEffect(() => setDecimalPlaces(receiveSelectedDecimalPlacesSetting), [receiveSelectedDecimalPlacesSetting])

    return (
        <>
            <p>Max GPA: </p>
            <PointInput 
                className={undefined} 
                type={"number"} 
                placeholder={""} 
                max={0} 
                min={0} 
                step={0.001} 
                value={maxGPA} 
                onChange={(event: { target: { value: number; }; }) => setMaxGPA(event.target.value)} 
            />
            <p>Decimal places: </p>
            <PointInput 
                className={undefined} 
                type={"number"} 
                placeholder={""} 
                max={0} 
                min={0} 
                step={1} 
                value={decimalPlaces} 
                onChange={(event: { target: { value: number; }; }) => setDecimalPlaces(event.target.value)} 
            />
            <p>Round: </p>
        </>
    );
};

export default OtherSetting;