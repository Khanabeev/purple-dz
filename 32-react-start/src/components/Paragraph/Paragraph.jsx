import styles from './Paragraph.module.css';
import cn from 'classnames';

function Paragraph({text, type}) {
    return (
        <p
            className={cn(styles['paragraph'], {
                [styles['paragraph__secondary']]: type === 'paragraph',
            })}
        >
            {text}
        </p>
    );
}

export default Paragraph;
