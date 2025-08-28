import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

import SearchIcon from "../../assets/Icons/searchIcon24.png";
import PrintIcon from "../../assets/Icons/printIcon24.png"
import ActivateIcon from "../../assets/Icons/activateIcon24.png";
import moreBtn from "../../assets/Icons/moreBtn24.png";

const SideBarHTML = () => {
    return(
        <div className="sideNav">

                <Link className="pageLinkBtn" to="/searchPG" >
                    <img src={SearchIcon} className="pageLinkBtnIcon"/>
                </Link>

                <Link className="pageLinkBtn" to="/printPG" >
                    <img src={PrintIcon} className="pageLinkBtnIcon"/>
                </Link>

                <Link className="pageLinkBtn" to="/activatePG" >
                    <img src={ActivateIcon} className="pageLinkBtnIcon"/>
                </Link>

                <Link className="pageLinkBtn-more" to="/options" >
                    <img src={moreBtn} className="pageLinkBtnIcon"/>
                </Link>
        </div>
    )
};

const SideBar = () => {
    const sessionCode = window.sessionStorage.getItem("sessionCode")
    if (sessionCode == null) {
        return(
            <div></div>
        )
    } else {
        return(
            <SideBarHTML />
        )
    }
}
export { SideBar };