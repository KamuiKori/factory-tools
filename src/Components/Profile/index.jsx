import React from "react";
import styles from "./style.module.scss"
import userPhoto from "./../../assets/img/userIcon.png"
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {setUser} from "../../redux/slices/profileSlice";

const Profile = () => {

    const [isExit,setIsExit]= React.useState(false);
    let user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();

    if(isExit){
        return <Navigate to={`/`}/>
    }

    function Exit(){
        dispatch(setUser({}))
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
                    <div className={styles.ItemsInWork}><span>Инструменты в работе:</span>
                        {
                            user.itemsInWork?.map((item,index) => {
                                return (<span key={`${item.id}_${index}`}className={styles.itemInWork}><img src={item.imageUrl} alt="" />{item.title}<br/></span>)
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