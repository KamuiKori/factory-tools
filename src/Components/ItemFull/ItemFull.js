import React from "react";
import style from "./style.module.scss"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setTitle} from "../../redux/slices/itemSlice";
import {setUser} from "../../redux/slices/profileSlice";
import styles from "../Profile/style.module.scss";

const ItemFull = (props) => {

    let itemId = useSelector(state => state.item.selectedId);
    let title = useSelector(state => state.item.selectedId);
    const user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();
    const [usersWithItem, setUsersWithItem] = React.useState([]);

    if (itemId === 0) {
        // eslint-disable-next-line no-restricted-globals
        itemId = Number(location.href.split("/item/")[1]);
    }
    const [item, setItem] = React.useState({});

    React.useEffect(() => {
        makeRequest();
    }, [])

    React.useEffect(() => {
        sortUsers();
    }, [item])

    function makeRequest() {
        axios(`http://localhost:3000/items/${itemId}`)
            .then((response) => {
                    setItem(response.data)
            })
    }

    function takeItemToWork() {
        if (localStorage.getItem("isLogged")) {
            if (item.count != 0) {
                axios.patch(`http://localhost:3000/items/${itemId}`, {count: item.count - 1})
                    .then((response) => {
                        setItem(response.data)
                    })
                const itemsInWork = [...user.itemsInWork];
                itemsInWork.push(item);
                axios.patch(`http://localhost:3000/users/${user.id}`, {itemsInWork})
                    .then((response) => {
                        dispatch(setUser(response.data))
                    })

            }
        }
    }

    function sortUsers() {
        axios.get(`http://localhost:3000/users/`)
            .then((response) => {
                const usersWithItem = response.data.filter((user) => {
                    return user.itemsInWork.some(tool => tool.id === item.id);
                })
                console.log(item.id)
                console.log(usersWithItem)
                setUsersWithItem(usersWithItem)
            })
    }


    return (
        <div className={style.wrapper}>
            <div className={style.item_wrapper}>
                <div className={style.two_sided}>
                    <img alt="item-pic" src={item.imageUrl} className={style.item_img}/>
                    <div className={style.specs}>
                        <p className={style.item_name}>{item.title}</p>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Тип:</p>
                            <p className={style.item_types}>{item.types}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Размер хода:</p>
                            <p className={style.item_types}>{item.range}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Размер хода:</p>
                            <p className={style.item_types}>{item.range}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Производитель:</p>
                            <p className={style.item_types}>{item.manufacturer}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Шаг:</p>
                            <p className={style.item_types}>{item.step}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Размер хода:</p>
                            <p className={style.item_types}>{item.errorRange}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Доступен:</p>
                            <p className={style.item_types}>{item.available}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>Количество:</p>
                            <p className={style.item_types}>{item.count}</p>
                        </div>
                        <div className={style.descr_string}>
                            <p className={style.string_title}>На руках у:</p>
                            {
                                usersWithItem?.map((user, index) => {
                                    return (<span key={`${user.id}_${index}`}
                                                  className={styles.userWithItem}>{user.name}<br/></span>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <button className={style.btn_take} onClick={takeItemToWork} disabled={item.count == 0}>Взять в работу
            </button>
        </div>
    )
}
export default ItemFull