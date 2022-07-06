import useLocalStorage from "../../../hooks/useLocalStorage";
import Modal from "../../UI/modal/modal";
import GradeSetting from "./gradeSetting";
import OtherSetting from "./otherSetting";
import SelectionButton from "./selectionButton";
import styles from '../../../styles/components/header/setting/setting.module.css';

const Setting = ({ closeSetting }) => {
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
                    <OtherSetting />
                </div>
                <div className={ styles.selectionButton }>
                    <SelectionButton />
                </div>
            </div>
        </Modal>
    );
};

export default Setting;

