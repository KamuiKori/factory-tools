import './scss/app.scss';
import Header from './Components/Header/Header'
import Categories from "./Components/Categories/Categories";
import Sort from "./Components/Sort/Sort";
import ItemBlock from "./Components/ItemBlock/ItemBlock";
import items from './assets/db.json'
import NotFound from "./pages/404";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./pages/home";
import NotFoundBlock from "./Components/NotFoundBlock";
import Profile from "./Components/Profile";
import React from "react";

export const SearchContext = React.createContext('')
function App() {
    const [searchValue, setSearchValue] = React.useState("")
    return (
        <SearchContext.Provider value={{searchValue,setSearchValue}}>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <div className="content">
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="*" element={<NotFoundBlock/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </SearchContext.Provider>
    );
}

export default App;
