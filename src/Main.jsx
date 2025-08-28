import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { PingBtn } from "./Components/pingBtn/index.jsx";
import { SideBar } from "./Components/SideBar/index.jsx";
import { EnterPG } from "./Components/EnterPG/index.jsx";


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
        } else if (windName == "Options") {
        document.getElementById("TitlePage").innerHTML = "Дополнительно"
        }
    };

    setInterval(updateTitle, 250);


    if (window.sessionStorage.getItem("sessionCode")){
        return (
            <div className="background">
                <SideBar/>
                <PingBtn/>
                
                <div className="workSpace" id="workSpace">
                    <h1 id="TitlePage">Вход</h1>
                    <Outlet />
                    
                    <div className="SystemMessage" id="sysMes" style={{'backgroundColor':"#000"}}>СИСТЕМНОЕ СООБЩЕНИЕ</div>
                </div>

                
            </div>
        )    
    } else {
        return (
            <div className="background">
                <SideBar/>
                <PingBtn/>
                
                <div className="workSpace" id="workSpace">
                    <h1 id="TitlePage">Вход</h1>
                    <EnterPG />
                    
                    <div className="SystemMessage" id="sysMes" style={{'backgroundColor':"#000"}}>СИСТЕМНОЕ СООБЩЕНИЕ</div>
                </div>

                
            </div>
        )    
    }

};

export { Main };