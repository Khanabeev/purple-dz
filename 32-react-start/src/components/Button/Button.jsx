import styles from './Button.module.css';


function Button({ text, ...props }) {
  return <button {...props} className={styles['button']}>{text}</button>;
}

export default Button;
