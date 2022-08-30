import React, {useState} from 'react'

function ItemBlock(props) {

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
                <div className="pizza-block__price">от 395 ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>1</i>
                </div>
            </div>
        </div>
    )
}

export default ItemBlock;