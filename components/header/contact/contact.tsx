import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from "../../UI/modal/modal";
import styles from '../../../styles/components/header/contact/contact.module.css';
import RegularInput from "../../UI/input/regularInput";
import MainButton from "../../UI/button/mainButton";
import TextArea from "../../UI/input/textArea";

const Contact = ({ closeContact }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rt65s4j', 'template_6dwkg3c', form.current, 'O76BE7y3tr7oI7kVG')
          .then(() => {
              alert("Message has been sent successfully!");
              setName("");
              setEmail("");
              setMessage("");
          }, () => {
              alert("Message didn't send");
          });
    };

    return (
        <Modal className={ styles.container } closeModal={ closeContact }>
            <h2>Contact</h2>
            <form className={ styles.inputContainer } ref={form} onSubmit={ sendEmail }>
                <h3 className={ styles.contactInfo }>If you have any questions,<br />
                please contact me through the message box below.</h3>
                <p>Your name:</p>
                <RegularInput className={ styles.infoInput } name={"user_name"} type={""} placeholder={""} max={0} min={0} step={0} value={name} onChange={(event) => setName(event.target.value)} />
                <p>Your email:</p>
                <RegularInput className={ styles.infoInput } name={"user_email"} type={"email"} placeholder={""} max={0} min={0} step={0} value={email} onChange={(event) => setEmail(event.target.value)} />
                <p>Your message:</p>
                <TextArea  placeholder={""} name={"message"} value={message} onChange={(event) => setMessage(event.target.value)} className={undefined} />
                <MainButton type={"submit"}>Sent</MainButton>
            </form>
        </Modal>
    );
};

export default Contact;