import Modal from "../../UI/modal/modal";
import styles from '../../../styles/components/header/contact/contact.module.css';
import RegularInput from "../../UI/input/regularInput";
import MainButton from "../../UI/button/mainButton";

const Contact = ({ closeContact }) => {
    return (
        <Modal className={ styles.container } closeModal={ closeContact }>
            <h2>Contact</h2>
            <div className={ styles.inputContainer }>
                <h3 className={ styles.contactInfo }>If you have any questions,<br />
                please contact me through the message box below.</h3>
                <p>Your name:</p>
                <RegularInput className={undefined} type={""} placeholder={""} max={0} min={0} step={0} value={undefined} onChange={undefined} />
                <p>Your email:</p>
                <RegularInput className={undefined} type={""} placeholder={""} max={0} min={0} step={0} value={undefined} onChange={undefined} />
                <p>Your message:</p>
                <RegularInput className={undefined} type={""} placeholder={""} max={0} min={0} step={0} value={undefined} onChange={undefined} />
            </div>
            <MainButton>Sent</MainButton>
        </Modal>
    );
};

export default Contact;