import React from "react";
import styles from './style.module.scss'
import axios from "axios";
import { Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {setId, setName,setPos,setWorkshop,setArea,setGang, setUser} from "../../redux/slices/profileSlice";

const Login = () => {
    const [emailValue, setEmailValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');
    const [userId, setUserId] = React.useState("");
    const [isValid, setIsValid] = React.useState(false);
    const dispatch = useDispatch();

    if(isValid){
        return <Navigate to={`/profile/${userId}`}/>
    }
    function sendRequest(){
        axios.get(`http://localhost:3000/users/?email=` + emailValue)
            .then((response) => {
                if(response.data.length > 0){
                    response.data.forEach(function (user){
                        if(user.email === emailValue && user.password === passValue){
                            dispatch(setUser(user))
                            setUserId(user.id);
                            console.log("Логин прошел");
                            localStorage.setItem("isLogged","true");
                            setIsValid(true);
                        }
                    })
                }
                else{
                    setIsValid(false);
                    console.log("Ошибка в имейл или пароле");
                    localStorage.setItem("isLogged","false");
                }
            })
            .catch((error) => {
                console.log("Ошибка получения данных от сервера :(")
            })
    }

    return (
            <div className={styles.root}>
                <h1 className={styles.title}>Форма логина</h1>
                <div className={styles.loginWrapper}>
                    <form className={styles.authForm} onSubmit={sendRequest}>
                        <input type="email" required className={styles.formInput} value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} placeholder={"Ваш имейл"} />
                        <input type="password" required className={styles.formInput}  value={passValue} onChange={(e)=>setPassValue(e.target.value)} placeholder={"Ваш пароль"}/>
                        <button type="submit" className={styles.btn_submit} onClick={sendRequest}>Войти</button>
                    </form>
                </div>
            </div>
    )
}
export default Login