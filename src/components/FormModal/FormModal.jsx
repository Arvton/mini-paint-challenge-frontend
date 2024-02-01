import PropTypes from 'prop-types'
import ModalContainer from '../ModalContainer/ModalContainer'
import { useState, useEffect, useRef } from 'react'
import './FormModal.scss'

const initialFormData = {
    email: '',
    weeklyReminders: false,
}

export default function FormModal({ isOpen, onClose }) {
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
        // placeholder for form submission
        console.log(formData)
        onClose()
        setFormData(initialFormData)
    }

    return (
        <ModalContainer hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                        ref={focusInputRef}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="weeklyReminders">Weekly Reminders</label>
                    <input
                        type="checkbox"
                        id="weeklyReminders"
                        name="weeklyReminders"
                        checked={formData.weeklyReminders}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </ModalContainer>
    )
}

FormModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};