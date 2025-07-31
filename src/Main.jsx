import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "./Components/SideBar/index.jsx";


const Main = () => {
    return (
        <div className="background">
            <SideBar/>
            
            <div className="workSpace">
                <h1 id="TitlePage">Название страницы</h1>
                <Outlet />
            </div>
        </div>
    )
};

export { Main };