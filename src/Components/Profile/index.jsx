import React from "react";
import styles from "./style.module.scss"
import userPhoto from "./../../assets/img/userIcon.png"
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {removeItem, setUser} from "../../redux/slices/profileSlice";
import axios from "axios";

const Profile = () => {

    const [isExit,setIsExit]= React.useState(false);
    const [items,setItems] = React.useState();
    let user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();
    const [item, setItem] = React.useState({});

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
    function getItemsInWork(itemId, index){

        deleteItemFromArray(itemId,index);

    }
    function deleteItemFromArray (itemId,index){
        const deletedItemCount = user.itemsInWork[index].count;
        const itemsInWork = [...user.itemsInWork.slice(0,index),...user.itemsInWork.slice(index + 1)]
        axios.patch(`http://localhost:3000/users/${user.id}`,{itemsInWork})
            .then((response)=>{
                dispatch(setUser(response.data))
            })
        axios.patch(`http://localhost:3000/items/${itemId}`, {count: deletedItemCount})
            .then((response) => {
                setItem(response.data)
            })
    }
    console.log(user)




    return (
        <>
            <h1>Профиль</h1>
            <div className={styles.profileContent}>
                <div className={styles.leftSide}>
                    <img src={userPhoto} alt=""/>
                </div>
                <div className={styles.description}>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}><span>Имя:</span>{user.name}</div>
                        <div className={styles.position}><span>Должность:</span>{user.position}</div>
                        <div className={styles.workShop}><span>Цех:</span>{user.workshop}</div>
                        <div className={styles.area}><span>Участок:</span>{user.area}</div>
                        <div className={styles.gang}><span>Смена:</span>{user.gang}</div>
                    </div>
                </div>
                <div className={styles.itemsInWorkWrapper}>
                    <div className={styles.ItemsInWork}><span>Инструменты в работе:</span></div>
                    {
                        user.itemsInWork?.map((item,index) => {
                            return (
                                <div key={`${item.id}_${index}`} className={styles.itemInWork}>
                                    <img className={styles.itemImg} src={item.imageUrl} alt="" /><span>{item.title}</span><br/>
                                    <img className={styles.closeBtn} onClick={()=>getItemsInWork(item.id, index)} src="https://files.carrotquest.io/message-images/27220/27220-1663084069313-w83fh0wy.png" alt="pic"/>
                                </div>)
                        })
                    }
                </div>
            </div>
            <div className={styles.activeTools}>
            </div>
            <button className={styles.btnExit}onClick={Exit}>Выйти</button>
        </>

    )
}
export default Profile