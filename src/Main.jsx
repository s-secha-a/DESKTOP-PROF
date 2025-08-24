import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "./Components/SideBar/index.jsx";


const Main = () => {

    function updateTitle() {
        var windName = window.sessionStorage.getItem('activeWindow');
        if (windName == "Print") {
        document.getElementById("TitlePage").innerHTML = "Печать"
        } else if (windName == "Activate") {
        document.getElementById("TitlePage").innerHTML = "Активация"
        } else if (windName == "Enter") {
        document.getElementById("TitlePage").innerHTML = "Вход"
        } else if (windName == "Search") {
        document.getElementById("TitlePage").innerHTML = "Поиск"
        }
    };

    setInterval(updateTitle, 250);


    return (
        <div className="background">
            <SideBar/>
            
            <div className="workSpace">
                <h1 id="TitlePage">Вход</h1>
                <Outlet />
            </div>

        </div>
    )
};

export { Main };