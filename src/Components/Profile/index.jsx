import React from "react";
import styles from "./style.module.scss"
import userPhoto from "./../../assets/img/userIcon.png"

const Profile = () => {
    let userName = "Человек";
    let position = "Оператор ЧПУ";
    let workshop = "2";
    let area = "1";
    let gang = "1";
    return (
        <>
            <h1>Профиль</h1>
            <div className={styles.profileContent}>
                <div className={styles.leftSide}>
                    <img src={userPhoto} alt=""/>
                </div>
                <div className={styles.description}>
                    <div className={styles.userName}><span>Имя:</span>{userName}</div>
                    <div className={styles.position}><span>Должность:</span>{position}</div>
                    <div className={styles.workShop}><span>Цех:</span>{workshop}</div>
                    <div className={styles.area}><span>Участок:</span>{area}</div>
                    <div className={styles.gang}><span>Смена:</span>{gang}</div>
                </div>
            </div>
            <div className={styles.activeTools}>

            </div>
        </>

    )
}
export default Profile