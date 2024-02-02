import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from "react";
import "./ModalContainer.scss";

export default function Modal({ isOpen, hasCloseBtn = true, onClose, children }) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setIsModalOpen(false);
    }

    const handleEscKeyDown = (e) => {
        if (e.key === "Escape") {
            handleCloseModal();
        }
    }

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog ref={modalRef} onKeyDown={handleEscKeyDown} className="modal">
            {hasCloseBtn && (
                <button className="modal__close-btn" onClick={handleCloseModal}>x</button>
            )}
            {children}
        </dialog>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    hasCloseBtn: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
};