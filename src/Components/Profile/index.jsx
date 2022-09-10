import React from "react";
import styles from "./style.module.scss"
import userPhoto from "./../../assets/img/userIcon.png"
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const Profile = () => {

    const [isExit,setIsExit]= React.useState(false);

    if(isExit){
        return <Navigate to={`/`}/>
    }

    function Exit(){
        setIsExit(true);
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        localStorage.setItem("isLogged","false");

    }

    const user = JSON.parse(localStorage.getItem("user"))
    const name = user.name;
    const position = user.position;
    const workshop = user.workshop;
    const area = user.area
    const gang = user.gang



    return (
        <>
            <h1>Профиль</h1>
            <div className={styles.profileContent}>
                <div className={styles.leftSide}>
                    <img src={userPhoto} alt=""/>
                </div>
                <div className={styles.description}>
                    <div className={styles.userName}><span>Имя:</span>{name}</div>
                    <div className={styles.position}><span>Должность:</span>{position}</div>
                    <div className={styles.workShop}><span>Цех:</span>{workshop}</div>
                    <div className={styles.area}><span>Участок:</span>{area}</div>
                    <div className={styles.gang}><span>Смена:</span>{gang}</div>
                </div>
            </div>
            <div className={styles.activeTools}>
            </div>
            <button onClick={Exit}>Выйти</button>
        </>

    )
}
export default Profile