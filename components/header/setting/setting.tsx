import Modal from "../../UI/modal/modal";
import GradeSetting from "./gradeSetting";
import OtherSetting from "./otherSetting";
import SelectionButton from "./selectionButton";
import styles from '../../../styles/components/header/setting/setting.module.css';

const Setting = ({ closeSetting }) => {
    return (
        <Modal className={ styles.container } closeModal={ closeSetting }>
            <header className={ styles.heading }>
                <h2>Setting</h2>
                <p>Please customise the settings through the pink boxes</p>
            </header>
            <div className={ styles.subcontainer }>
                <GradeSetting className={ styles.gpaSetting } />
                <OtherSetting className={ styles.otherSetting } />
                <SelectionButton className={ styles.selectionButton }/>
            </div>
        </Modal>
    );
};

export default Setting;

