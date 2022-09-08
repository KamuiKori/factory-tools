import React from "react";
import styles from "./style.module.scss"
import userPhoto from "./../../assets/img/userIcon.png"
import {useSelector} from "react-redux";

const Profile = () => {

    const name = useSelector(state => state.profile.name);
    const position = useSelector(state => state.profile.position);
    const workshop = useSelector(state => state.profile.workShop);
    const area = useSelector(state => state.profile.area);
    const gang = useSelector(state => state.profile.gang);

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
        </>

    )
}
export default Profile