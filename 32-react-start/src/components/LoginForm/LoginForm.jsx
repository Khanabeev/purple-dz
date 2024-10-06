import styles from './LoginForm.module.css';
import Heading from "../Heading/Heading.jsx";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import {useRef} from "react";

function LoginForm({onLogin}) {
    const loginRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        onLogin(formProps['name']);
    }

    return (
        <div className={styles["login__container"]}>
            <Heading text="Вход"/>
            <form id='loginForm' onSubmit={onSubmit} className={styles['login__form']}>
                <Input
                    ref={loginRef}
                    type="text"
                    placeholder='Ваше имя'
                    name='name'
                />

                <Button text="Войти в профиль" type='submit'/>
            </form>

        </div>
    )
}

export default LoginForm;