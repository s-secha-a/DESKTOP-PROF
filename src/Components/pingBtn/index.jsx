import React from "react";

import { showMessage } from "../sideScripts/showSysMes";
import PingIcon from "../../assets/Icons/pingIcon24.png";
import { getServUrl } from "../sideScripts/env"

import './styles.css';

const URL = getServUrl();

function pping() {
    fetch(`${URL}/api/isOnline`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
    })
    .then(response => {
        console.log(response);
        
        if (response.ok){
            showMessage("Сервер в сети", "success")
        } else {
            // showMessage("Сервер не в сети", "warn")
        }
    })
    .catch(err=>{
        showMessage("Сервер не в сети", "warn")
    })
}

const PingBtn = () => {
    return(
        <div className="pingBtn"
        onClick={pping}>
            <img src={PingIcon} className="pageLinkBtnIcon"/>
        </div>            
    );
};

export { PingBtn }