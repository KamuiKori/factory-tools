import React from "react";
import Logo from "../../assets/img/logo.png"
import userIcon from "../../assets/img/userIcon.png"
import {Link} from "react-router-dom";
import styles from './style.module.scss'
import Search from "../Search";

function Header() {
    var link = "";
    if(localStorage.getItem("logged") === "true"){
        link = "/profile"
    }
    else{
        link = "/login"
    }
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={Logo} alt="Pizza logo"/>
                        <div>
                            <h1>Factory Tools</h1>
                        </div>
                    </div>
                </Link>
                <Search/>
                <div className="header__cart">
                    <Link to={link} className="button button--cart">
                        <img src={userIcon} className={styles.userIcon} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;