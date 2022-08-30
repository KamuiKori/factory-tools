import React from 'react'
import styles from './style.module.scss'
import {SearchContext} from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);
    return (
        <input type="text" value={searchValue} onChange={event => setSearchValue(event.target.value)} className={styles.inputSearch}
               placeholder={"Поиск..."}/>
    )
}
export default Search