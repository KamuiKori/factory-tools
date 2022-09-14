import React, {useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {addItem} from "../../redux/slices/profileSlice";
import {Link} from "react-router-dom";
import {setSelectedId} from "../../redux/slices/itemSlice";

function ItemBlock(props) {



    const dispatch = useDispatch();

    const onClickAdd = (event)=>{
        const item = {
            id:props.id,
            name:props.title,
            imgUrl:props.imageUrl
        }
        dispatch(addItem(item));
    }

    const select = (event) => {
        dispatch(setSelectedId(props.id))
    }

    return (
        <Link to={`/item/${props.id}`} props={props.id}>
            <div className="item-block" onClick={select}>
                <img
                    className="item-block__image"
                    src={props.imageUrl}
                    alt="item"
                />
                <div className="item-block__spec">
                    <h4 className="item-block__title">{props.title}</h4>
                    <div className="type"><p>Тип:</p> {props.types}</div>
                    <div className="range"><p>Диапозон:</p> {props.range}</div>
                    <div className="manufacturer"><p>Производитель:</p> {props.manufacturer}</div>
                    <div className="depthometer"><p>Наличие глубиномера:</p> {props.depthometer}</div>
                    <div className="step"><p>Размер шага:</p> {props.step}</div>
                    <div className="available"><p>Доступен:</p> {props.available}</div>
                    <div className="count"><p>Количество:</p> {props.count}</div>
                </div>
            </div>
        </Link>
    )
}

export default ItemBlock;