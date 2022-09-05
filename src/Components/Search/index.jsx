import React from 'react'
import styles from './style.module.scss'
import {SearchContext} from "../../App";
import debounce from "lodash.debounce"

const Search = () => {
    const [value, setValue] = React.useState("");
    const {setSearchValue} = React.useContext(SearchContext);


    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    const updateSearchValue = React.useCallback(debounce((str) => {
        setSearchValue(str)
    }, 250), [])


    return (
        <input type="text" value={value} onChange={onChangeInput} className={styles.inputSearch}
               placeholder={"Поиск..."}/>
    )
}
export default Search