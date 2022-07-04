import useLocalStorage from "../../../hooks/useLocalStorage";
import Modal from "../../UI/modal/modal";
import GradeSetting from "./gradeSetting";
import OtherSetting from "./otherSetting";
import SelectionButton from "./selectionButton";
import styles from '../../../styles/components/header/setting/setting.module.css';
import { useEffect } from "react";

const Setting = ({ closeSetting, dataFromSetting, decimalPlaces }) => {
    const[selectedGradeSetting, setSelectedGradeSetting] = useLocalStorage("gradeList", [
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
    const [selectedmaxGPASetting, setSelectedmaxGPASetting] = useLocalStorage("maxGPA", 4.00);
    const [selectedDecimalPlacesSetting, setSelectedDecimalPlacesSetting] = useLocalStorage("decimalPlaces", 2);
    const [selectedRoundSetting, setSelctedRoundSetting] = useLocalStorage("round", "roundTo");

    return (
        <Modal className={ styles.container } closeModal={ closeSetting }>
            <div className={ styles.heading }>
                <h2>Setting</h2>
                <p>Please customise the settings through the pink boxes</p>
            </div>
            <div className={ styles.subcontainer }>
            <div className={ styles.gpaSetting }>
                <GradeSetting receiveSelectedSetting={ selectedGradeSetting } dataFromSetting={ dataFromSetting }/>
            </div>
            <div className={ styles.otherSetting }>
                <OtherSetting 
                    receiveSelectedmaxGPASetting={ selectedmaxGPASetting }
                    receiveSelectedDecimalPlacesSetting={ selectedDecimalPlacesSetting }
                    receiveSelectedRound={ selectedRoundSetting }
                    sendDecimalPlaces={ decimalPlaces }
                />
            </div>
            <div className={ styles.selectionButton }>
                <SelectionButton 
                    sendGradeSetting={(gradeList) => setSelectedGradeSetting(gradeList)} 
                    sendmaxGPASetting={(maxGPA) => setSelectedmaxGPASetting(maxGPA)} 
                    sendDecimalPlaces={(decimalPlaces) => setSelectedDecimalPlacesSetting(decimalPlaces)}
                    sendRound={(round) => setSelctedRoundSetting(round)} 
                />
            </div>
            </div>
        </Modal>
    );
};

export default Setting;

