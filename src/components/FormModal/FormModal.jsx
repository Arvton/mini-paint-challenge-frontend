import PropTypes from 'prop-types'
import ModalContainer from '../ModalContainer/ModalContainer'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './FormModal.scss'

const initialFormData = {
    email: '',
    weeklyReminders: true,
}

export default function FormModal({ isOpen, onClose }) {
    const SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL
    const focusInputRef = useRef(null)
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            setTimeout(() => {
                focusInputRef.current.focus()
            }, 0)
        }
    }, [isOpen])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleCheckboxChange = (e) => {
        const { checked } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            weeklyReminders: checked,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(SIGNUP_URL, formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.error(err)
            })
        onClose()
        setFormData(initialFormData)
    }

    return (
        <ModalContainer hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <form className="modal__form" onSubmit={handleSubmit}>
                <div className="modal__form-container">
                    <h2 className="modal__form-header">Join the Challenge</h2>
                    <p className="modal__form-details">{"Get this week's reference photo and more Mini Paint Challenge details in your inbox. I'm so excited that you're joining me."}</p>
                    <div className="modal__email-container">
                        <input
                            className="modal__input-email"
                            ref={focusInputRef}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Your email address"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="modal__checkbox-container">
                        <input
                            type="checkbox"
                            id="weeklyReminders"
                            name="weeklyReminders"
                            checked={formData.weeklyReminders}
                            onChange={handleCheckboxChange}
                        />
                        <label className="modal__checkbox-text" htmlFor="weeklyReminders">Receive weekly reference photos and challenge reminders.</label>
                    </div>
                </div>
                <div className="modal__form-button-container">
                    <button className="modal__form-button" type="submit">Submit</button>
                </div>
            </form>
        </ModalContainer>
    )
}

FormModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};