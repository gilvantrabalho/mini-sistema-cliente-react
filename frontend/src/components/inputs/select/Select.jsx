import React from 'react';

const Select = ({ label, name, options, value, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <select className="form-select input-style" id={name} name={name} value={value} onChange={onChange}>
                <option value="">Selecione...</option>
                {options.map((option, index) => (
                    <option key={index} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
