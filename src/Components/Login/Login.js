import React from "react";
import styles from './style.module.scss'
import axios from "axios";
import { Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {setId, setName,setPos,setWorkshop,setArea,setGang} from "../../redux/slices/profileSlice";

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
        axios.get(`https://62fd111fb9e38585cd4c19a9.mockapi.io/users/?email=` + emailValue)
            .then((response) => {
                if(response.data.length > 0){
                    response.data.forEach(function (user){
                        if(user.email === emailValue && user.password === passValue){
                            setIsValid(true);
                            dispatch(setId(user.id));
                            dispatch(setName(user.name));
                            dispatch(setPos(user.position));
                            dispatch(setWorkshop(user.workShop));
                            dispatch(setArea(user.area));
                            dispatch(setGang(user.gang));
                            setUserId(user.id);
                            console.log("Логин прошел");
                            localStorage.setItem("isLogged","true");
                            localStorage.setItem("userId",user.id);
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