import React from "react";

import "./styles.css"
import { clearUserData } from "../sideScripts/clearUserData.js";
import { findManager } from "./FindManager.js";
import { LogOutFunc } from "../sideScripts/logout.js";
import { linktg } from "../sideScripts/openTG.js";

const Options = () => {
    window.sessionStorage.setItem('activeWindow', 'Options');
    // clearUserData()
    findManager()
    var devUser="@sechinskiyClub @Alex_Rdnv"
    return(
        <div className="activeWorkSpace" id="activeWorkSpace">
            <div className="Profile">
                <div className="LabelSudent-Profile">
                    Активный менеджер
                </div>
                <div className="StudentName-Profile">
                    <div id="SecondName-StudentName-Profile"></div>
                    <div id="FirstName-StudentName-Profile"></div>
                    <div id="PatronymicName-StudentName-Profile"></div>
                </div>
                <div className="StudentPhoto-Profile" id="PhotoProfile"></div>
            </div>

            <div className="StudentInfo-Spisok">
                <div className="Version">
                        <div className="Label-StudentInfo-Spisok">Версия ПО</div>
                        <div className="Name-StudentInfo-Spisok" id="editVersion"></div>
                </div>
                <div className="Developers">
                        <div className="Label-StudentInfo-Spisok">Разработчики</div>
                        <div className="Name-StudentInfo-Spisok" id="editVersion">
                            {devUser}
                        </div>
                </div>
            </div>


            <div className="tg-btn" onClick={linktg}>
                Обратная связь
            </div>
            
            <div className="LogOutBtn">
                <button 
                className="logout-input-btn"
                onClick={LogOutFunc}
                >Выход из аккаунта</button>
            </div>
        </div>
    );
};

export { Options };