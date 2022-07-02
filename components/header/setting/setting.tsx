import Modal from "../../UI/modal/modal";
import GradeList from "./gradeList";
import styles from '../../../styles/components/header/setting/setting.module.css';

const Setting = ({ closeSetting }) => {
    return (
        <Modal className={ styles.container } closeModal={ closeSetting }>
            <div className={ styles.heading }>
                <h2>Setting</h2>
            </div>
            <div className={ styles.gpaSetting }>
                <GradeList />
            </div>
            <div className={ styles.otherSetting }>
                <h2>Other setting</h2>
            </div>
            <div className={ styles.selectionButton }>
                <h2>Default Button</h2>
            </div>
        </Modal>
    );
};

export default Setting;

