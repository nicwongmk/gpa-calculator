import { Fragment } from 'react';
import Backdrop from '../backdrop/backdrop';
import styles from '../../../styles/components/UI/modal.module.css'

type Props = {
    className: any,
    closeModal: any,
    children: React.ReactNode
}

const Modal = ({ className, closeModal, children }: Props) => {
    return (
        <Fragment>
            <Backdrop hideBackdrop={ closeModal } />
            <div className={ `${className} ${styles.modal}` }>  
                { children }
            </div>
        </Fragment>
    );
};

export default Modal;