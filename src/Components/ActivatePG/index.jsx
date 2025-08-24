import React from "react";

import { Profile } from "../Profile/index.jsx";
import "./styles.css"
import { ConfirmAcc, DenyAcc } from "./buttonActivation.js";
import { clearUserData } from "../sideScripts/clearUserData.js";
import { InfoWindow } from "./indexWindowActivate.jsx";
import { CreateList } from "./createListFind.jsx";

const ActivatePG = () => {
    window.sessionStorage.setItem('activeWindow', 'Activate');
    clearUserData()
    return(
        <div className="activeWorkSpace" id="activeWorkSpace">
            <Profile />
            <InfoWindow />

            <div id="forList" style={{display: "inline"}}></div>
            
        </div>
    );
};

export { ActivatePG };