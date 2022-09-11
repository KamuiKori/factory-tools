import React from "react";
import styles from "./style.module.scss"
import userPhoto from "./../../assets/img/userIcon.png"
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const Profile = () => {

    const [isExit,setIsExit]= React.useState(false);
    let user = useSelector(state => state.profile);

    if(isExit){
        return <Navigate to={`/`}/>
    }

    function Exit(){
        setIsExit(true);
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        localStorage.setItem("isLogged","false");

    }



    return (
        <>
            <h1>Профиль</h1>
            <div className={styles.profileContent}>
                <div className={styles.leftSide}>
                    <img src={userPhoto} alt=""/>
                </div>
                <div className={styles.description}>
                    <div className={styles.userName}><span>Имя:</span>{user.name}</div>
                    <div className={styles.position}><span>Должность:</span>{user.position}</div>
                    <div className={styles.workShop}><span>Цех:</span>{user.workshop}</div>
                    <div className={styles.area}><span>Участок:</span>{user.area}</div>
                    <div className={styles.gang}><span>Смена:</span>{user.gang}</div>
                    <div className={styles.ItemsInWork}><span>Смена:</span>
                        {
                            user.itemsInWork?.map(item => {
                                return (<span>item{item.name}</span>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.activeTools}>
            </div>
            <button onClick={Exit}>Выйти</button>
        </>

    )
}
export default Profile