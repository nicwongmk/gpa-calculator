import useLocalStorage from "../../../hooks/useLocalStorage";
import Modal from "../../UI/modal/modal";
import GradeSetting from "./gradeSetting";
import OtherSetting from "./otherSetting";
import SelectionButton from "./selectionButton";
import styles from '../../../styles/components/header/setting/setting.module.css';

const Setting = ({ closeSetting, decimalPlaces, maxGPA }) => {
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
                <GradeSetting />
            </div>
            <div className={ styles.otherSetting }>
                <OtherSetting 
                    receiveSelectedmaxGPASetting={ selectedmaxGPASetting }
                    receiveSelectedDecimalPlacesSetting={ selectedDecimalPlacesSetting }
                    receiveSelectedRound={ selectedRoundSetting }
                    sendMaxGPA={ maxGPA }
                    sendDecimalPlaces={ decimalPlaces }
                />
            </div>
            <div className={ styles.selectionButton }>
                <SelectionButton 
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

