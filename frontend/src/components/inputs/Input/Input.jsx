import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import './Style.css';

const Input = forwardRef(({ label, type, name, value, onChange, placeholder }, ref) => {
    return (
        <div>
            <label htmlFor={name} className='mb-2'>{label}</label>
            {type === 'text' && name === 'cpf' ? (
                <InputMask
                    className='input-style form-control'
                    mask="999.999.999-99"
                    value={value}
                    onChange={onChange}
                >
                    {(inputProps) => <input {...inputProps} type={type} id={name} name={name} placeholder={placeholder} ref={ref} />}
                </InputMask>
            ) : (
                <input
                    className='input-style form-control'
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    ref={ref}
                />
            )}
        </div>
    );
});

export default Input;







//import React from 'react';
//import InputMask from 'react-input-mask';

//const Input = ({ label, type, name, value, onChange, placeholder }) => {
//    return (
//        <div>
//            <label htmlFor={name}>{label}</label>
//            {type === 'text' && name === 'cpf' ? (
//                <InputMask
//                    className='input-style form-control'
//                    mask="999.999.999-99"
//                    value={value}
//                    onChange={onChange}
//                >
//                    {(inputProps) => <input {...inputProps} type={type} id={name} name={name} placeholder={placeholder} />}
//                </InputMask>
//            ) : (
//                <input
//                    className='input-style form-control'
//                    type={type}
//                    id={name}
//                    name={name}
//                    value={value}
//                    onChange={onChange}
//                    placeholder={placeholder}
//                />
//            )}
//        </div>
//    );
//};

//export default Input;




