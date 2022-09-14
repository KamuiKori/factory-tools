import Categories from "../Components/Categories/Categories";
import Sort, {list} from "../Components/Sort/Sort";
import items from "../assets/db.json";
import ItemBlock from "../Components/ItemBlock/ItemBlock";
import React, {useContext, useState} from "react";
import {logDOM} from "@testing-library/react";
import ReactPaginate from 'react-paginate';
import Pagination from "../Components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import axios from "axios";
import {setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import {setSelectedId} from "../redux/slices/itemSlice";
import qs from "qs"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const categoryId = useSelector(state => state.filter.categoryId);
    const dispatch = useDispatch();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);
    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const sort = useSelector(state => state.filter.sort.sortProperty)
    const currentPage = useSelector(state => state.filter.currentPage)


    const {searchValue, setSearchValue} = useContext(SearchContext)
    const [items, setItems] = React.useState([]);


    const search = searchValue ? `&q=${searchValue}` : '';
    const tools = items.map((items) => (
        <ItemBlock key={items.id} {...items}/>
    ))

    const fetchTools =()=>{
        const requestNamesCategory = {
            0: "",
            1: "available=Да",
            2: "Мерительный=Да",
            3: "Режущий=Да",
            4: "Оснастка=Да",
            5: "Вспомогательный=Да"
        }
        let requestNameCategory = requestNamesCategory[categoryId];

        axios.get(`http://localhost:3000/items/?_page=${currentPage}&_limit=4&` + requestNameCategory + `&_sort=${sort}&_order=desc` + search)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log("Ошибка получения данных от сервера :(")
            })
    }

    React.useEffect(()=>{
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find(obj=>obj.sortProperty === params.sortProperty)
            dispatch(setFilters({
                ...params,
                sort
            }))
            isSearch.current = true;
        }
    },[])

    React.useEffect(() => {
        window.scrollTo(0,0);
        if(!isSearch.current){
               fetchTools();
        }
        isSearch.current = false;
    }, [categoryId, sort, searchValue, currentPage])

    React.useEffect(()=>{
        if(isMounted.current){
            const queryString = qs.stringify({
                sortProperty:sort,
                categoryId:categoryId,
                currentPage:currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
    },[categoryId, sort, searchValue, currentPage])

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }

    return (
        <>
            <div className="content__top">
                <Categories id={categoryId} onClickCategory={(index) => onClickCategory(index)}/>
                <Sort/>
            </div>
            <h2 className="content__title">Доступный инструмент</h2>
            <div className="content__items">
                {
                    tools
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </>
    )
}
export default Home