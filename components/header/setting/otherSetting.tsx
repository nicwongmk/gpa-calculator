
import { useContext } from 'react';
import PointInput from "../../UI/input/pointInput";
import styles from '../../../styles/components/header/setting/setting.module.css';
import MaxGPAContext from '../../../context/maxGPAContext';
import DecimalPlacesContext from '../../../context/decimalPlacesContext';
import RoundingContext from '../../../context/roundingContext';


const OtherSetting = () => {
    const {maxGPA, setMaxGPA} = useContext(MaxGPAContext);
    const {decimalPlaces, setDecimalPlaces} = useContext(DecimalPlacesContext);
    const {rounding, setRounding} = useContext(RoundingContext);

    return (
        <>
            <p>Max CGPA: </p>
            <PointInput  
                type={"number"} 
                max={0} 
                min={0} 
                step={0.001} 
                value={maxGPA} 
                onChange={(event: { target: { value: number; }; }) => setMaxGPA(event.target.value)} 
            />
            <p>Decimal places: </p>
            <PointInput 
                type={"number"} 
                min={0} 
                step={1} 
                value={decimalPlaces} 
                onChange={(event: { target: { value: number; }; }) => setDecimalPlaces(event.target.value)} 
            />
            <div className={ styles.roundContainer }>
                <p>Round: </p>
                <label htmlFor="roundTo">Round To</label>
                <input type="radio" id="roundTo" name="round" value="roundTo" checked={rounding === "roundTo"} onChange={(event) => setRounding(event.target.value)}/>
                <label htmlFor="roundUp">Round Up</label>
                <input type="radio" id="roundUp" name="round" value="roundUp" checked={rounding === "roundUp"} onChange={(event) => setRounding(event.target.value)}/>
                <label htmlFor="roundDown">Round Down</label>
                <input type="radio" id="roundDown" name="round" value="roundDown" checked={rounding === "roundDown"} onChange={(event) => setRounding(event.target.value)}/>
            </div>
        </>
    );
};

export default OtherSetting;