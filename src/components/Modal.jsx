import { memo } from 'react';
import '../assets/styles/Modal.css'
import { HiX } from "react-icons/hi";

const Modal = ({ onClose ,children }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">{children}</div>
                <div className="modal-close" onClick={onClose}>
                    <HiX />
                </div>
            </div>
        </div>
    )
}

export default memo(Modal)