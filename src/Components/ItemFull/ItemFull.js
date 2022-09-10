import React from "react";
import style from "./style.module.scss"
import axios from "axios";
import {useSelector} from "react-redux";
import {setTitle} from "../../redux/slices/itemSlice";

const ItemFull = (props) => {

    let itemId = useSelector(state => state.item.selectedId);
    let title = useSelector(state => state.item.selectedId);

    if (itemId === 0) {
        // eslint-disable-next-line no-restricted-globals
        itemId = Number(location.href.split("/item/")[1]);
    }
    const [item, setItem] = React.useState({});

    React.useEffect(()=>{
        makeRequest();
    },[])

    function makeRequest(){
        axios(`http://localhost:3000/items/?id=${itemId}`)
            .then((response) => {
                if (response.data.length > 0) {
                    response.data.forEach(function (item) {
                        if (item.id === itemId) {
                            setItem(item)
                        }
                    })
                }
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
                    </div>
                </div>
            </div>
            <button className={style.btn_take}>Взять в работу</button>
        </div>
    )
}
export default ItemFull