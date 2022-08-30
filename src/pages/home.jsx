import Categories from "../Components/Categories/Categories";
import Sort from "../Components/Sort/Sort";
import items from "../assets/db.json";
import ItemBlock from "../Components/ItemBlock/ItemBlock";
import React, {useContext, useState} from "react";
import {logDOM} from "@testing-library/react";
import ReactPaginate from 'react-paginate';
import Pagination from "../Components/Pagination";
import {SearchContext} from "../App";

const Home = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)
    const [items,setItems] = React.useState([]);
    const [currentPage, setCurrentPage]=useState(1)
    const [categoryId,setCategoryId] = React.useState(0);
    const [sort,setSort] = React.useState({
        name:"Алфавиту",
        sortProperty:'title'
    });
    const search = searchValue ? `&search=${searchValue}`:'';
    const tools = items.map((items) => (
        <ItemBlock key={items.id} {...items}/>
    ))

    React.useEffect(()=>{
        const requestNamesCategory = {
            0:"",
            1:"available=Да",
            2:"Мерительный=Да",
            3:"Режущий=Да",
            4:"Оснастка=Да",
            5:"Вспомогательный=Да"
        }
        let requestNameCategory=requestNamesCategory[categoryId];


        fetch(`https://62fd111fb9e38585cd4c19a9.mockapi.io/items?page=${currentPage}&limit=4&`+requestNameCategory + `&sortBy=${sort.sortProperty}&order=desc` + search)
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                setItems(response)
            })
    },[categoryId,sort, searchValue,currentPage])

    return (
        <>
            <div className="content__top">
                <Categories id={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
                <Sort sortValue={sort} onClickCategory={(index) => setSort(index)}/>
            </div>
            <h2 className="content__title">Доступный инструмент</h2>
            <div className="content__items">
                {
                    tools
                }
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </>
    )
}
export default Home