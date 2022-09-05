import React from "react";
import styles from './style.module.scss'
import axios from "axios";

const Login = () => {
    const [emailValue, setEmailValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    function sendRequest(email,password){
        //Сделать запрос
    }

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Форма логина</h1>
            <div className={styles.loginWrapper}>
                <form className={styles.authForm} onSubmit={sendRequest()}>
                    <input type="email" required className={styles.formInput} onChange={(event)=>setEmailValue(event.target.value)} placeholder={"Ваш имейл"} />
                    <input type="password" required className={styles.formInput} onChange={(event)=>setPassValue(event.target.value)} placeholder={"Ваш пароль"}/>
                    <button type="submit" className={styles.btn_submit}>Войти</button>
                </form>
            </div>
        </div>
    )
}
export default Login