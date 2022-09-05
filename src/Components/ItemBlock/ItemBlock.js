import React, {useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {addItem} from "../../redux/slices/profileSlice";

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

    return (
        <div className="item-block">
            <img
                className="item-block__image"
                src={props.imageUrl}
                alt="item"
            />
            <h4 className="item-block__title">{props.title}</h4>
            <div className="item-block__spec">
                <div className="type"><p>Тип:</p> {props.types}</div>
                <div className="range"><p>Диапозон:</p> {props.range}</div>
                <div className="manufacturer"><p>Производитель:</p> {props.manufacturer}</div>
                <div className="depthometer"><p>Наличие глубиномера:</p> {props.depthometer}</div>
                <div className="step"><p>Размер шага:</p> {props.step}</div>
                <div className="available"><p>Доступен:</p> {props.available}</div>
                <div className="count"><p>Количество:</p> {props.count}</div>
            </div>
            <div className="pizza-block__bottom">
                <button className="button button--outline button--add" onClick={onClickAdd}>
                    <span>Взять в работу</span>
                </button>
            </div>
        </div>
    )
}

export default ItemBlock;