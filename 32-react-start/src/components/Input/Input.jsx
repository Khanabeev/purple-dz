import {forwardRef, useState} from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input(
    {iconSrc = null, onChange, ...props}, ref) {
    const [value, setValue] = useState(null);
    const icon = iconSrc ? <img className='input__icon' src={iconSrc} alt=""/> : null
    return (
        <div className={styles['input__container']}>
            {icon}
            <input {...props}
                   ref={ref}
                   onChange={onChange}
                   className={styles['input__field']}
            />
        </div>
    );
});

export default Input;