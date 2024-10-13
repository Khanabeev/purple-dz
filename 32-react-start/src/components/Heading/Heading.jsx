import styles from './Heading.module.css';

function Heading({ text }) {
  return <div className={styles['heading-1']}>{text}</div>;
}

export default Heading;
