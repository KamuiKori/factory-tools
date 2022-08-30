import React from 'react';

function Category({id,onClickCategory}){

    let categories = [
        'Все',
        'Доступный',
        'Мерительный',
        'Режущий',
        'Оснастка',
        'Вспомогательный'
    ]

    return(
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName,index)=>(
                            <li key={index} onClick={() => onClickCategory(index)} className = {id === index ? "active":""}>
                                {categoryName}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}
export default Category