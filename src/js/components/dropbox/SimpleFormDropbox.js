import React, { useState, useEffect, useRef } from "react";

const SimpleFormDropbox = ({ title, data = {}, setValue, placeholder = '', isRequired = false }) => {
    const [droboxIsOpen, setDroboxIsOpen] = useState(false);
    const [inputLabel, setInputLabel] = useState(Object.values(data)[0]);
    const [inputValue, setInputValue] = useState(Object.keys(data)[0]);
    const dropboxRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropboxRef.current && !dropboxRef.current.contains(e.target)) {
                setDroboxIsOpen(false);
            }
        };

        setInputLabel(Object.values(data)[0]);
        setInputValue(Object.keys(data)[0]);
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
        <div className="form-group dropbox-form-group" ref={dropboxRef}>
            <label htmlFor="name">{title}</label>
            <input
                onClick={() => setDroboxIsOpen(true)}
                type="text"
                id="name"
                className="form-control dropbox-form-group-input"
                value={inputLabel}
                onChange={(e) => setInputLabel(e.target.value)} // Это можно оставить, если нужно редактирование
                placeholder={placeholder}
                required={isRequired}
                readOnly
            />
            {droboxIsOpen && Object.keys(data).length > 0 && (
                <div className="dropbox-form-group-block">
                    <ul>
                        {Object.entries(data).map(([value, label], index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(label, value)}
                                className="dropbox-option"
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

export default SimpleFormDropbox;
