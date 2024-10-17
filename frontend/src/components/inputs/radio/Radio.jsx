import React from 'react';

const RadioGroup = ({ label, name, options, selectedOption, onChange }) => {
    return (
        <div>
            <div>{label}</div>
            {options.map((option) => (
                <label key={option} className='me-2'>
                    <input
                        className='me-1'
                        type="radio"
                        name={name}
                        value={option}
                        checked={selectedOption === option}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;
