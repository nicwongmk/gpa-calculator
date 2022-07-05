import { useEffect } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
import PointInput from "../../UI/input/pointInput";
import styles from '../../../styles/components/header/setting/setting.module.css';

const OtherSetting = ({ receiveSelectedmaxGPASetting, receiveSelectedDecimalPlacesSetting, receiveSelectedRound, sendMaxGPA, sendDecimalPlaces}) => {
    const [maxGPA, setMaxGPA] = useLocalStorage("maxGPA", 4.00);
    const [decimalPlaces, setDecimalPlaces] = useLocalStorage("decimalPlaces", 2);
    const [round, setRound] = useLocalStorage("round", "roundTo");

    useEffect(() => setMaxGPA(receiveSelectedmaxGPASetting), [receiveSelectedmaxGPASetting]);
    useEffect(() => setDecimalPlaces(receiveSelectedDecimalPlacesSetting), [receiveSelectedDecimalPlacesSetting]);
    useEffect(() => setRound(receiveSelectedRound), [receiveSelectedRound]);

    sendDecimalPlaces(decimalPlaces);
    sendMaxGPA(maxGPA);

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
            <div className={ styles.roundContainer }>
                <p>Round: </p>
                <label htmlFor="roundTo">Round To</label>
                <input type="radio" id="roundTo" name="round" value="roundTo" checked={round === "roundTo"} onChange={(event) => setRound(event.target.value)}/>
                <label htmlFor="roundUp">Round Up</label>
                <input type="radio" id="roundUp" name="round" value="roundUp" checked={round === "roundUp"} onChange={(event) => setRound(event.target.value)}/>
                <label htmlFor="roundDown">Round Down</label>
                <input type="radio" id="roundDown" name="round" value="roundDown" checked={round === "roundDown"} onChange={(event) => setRound(event.target.value)}/>
            </div>
        </>
    );
};

export default OtherSetting;