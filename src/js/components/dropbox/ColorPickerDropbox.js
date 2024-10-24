import React, { useState, useEffect, useRef } from "react";

const ColorPickerDropbox = ({ title, colors = {}, setValue, isRequired = false }) => {
    const [droboxIsOpen, setDroboxIsOpen] = useState(false);
    const [inputLabel, setInputLabel] = useState(Object.values(colors)[0]);
    const [inputValue, setInputValue] = useState(Object.keys(colors)[0]);
    const dropboxRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropboxRef.current && !dropboxRef.current.contains(e.target)) {
                setDroboxIsOpen(false);
            }
        };

        setInputLabel(Object.values(colors)[0]);
        setInputValue(Object.keys(colors)[0]);
        setValue(inputValue);

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleOptionClick = (label, value) => {
        setInputLabel(label);
        setInputValue(value);
        setValue(value); 
        setDroboxIsOpen(false);
    };

    return (
        <div className="form-group dropbox-form-group colorpicker-dropbox-form-group" ref={dropboxRef}>
            <label htmlFor="name">{title}</label>
            <input
                onClick={() => setDroboxIsOpen(true)}
                type="text"
                id="name"
                className={`form-control dropbox-form-group-input course-card-${inputValue}`}
                value={inputLabel} // Используем inputValue для отображения цвета
                readOnly
                required={isRequired}
            />
            
            {droboxIsOpen && Object.keys(colors).length > 0 && (
                <div className="dropbox-form-group-block">
                    <ul>
                        {Object.entries(colors).map(([value, label], index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(label, value)}
                                className={`dropbox-option course-card-${value}`}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ColorPickerDropbox;
