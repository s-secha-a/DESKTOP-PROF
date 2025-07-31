import React from "react";
import "./styles.css"

import LogInClick from "../sideScripts/enterResponse";

const EnterPG = () => {
    window.sessionStorage.setItem('activeWindow', 'Enter');
    return(
        <div className="activeWorkSpace">
            <div className="Enter">
                <div className="Label-Enter">
                    Логин
                </div>
                <input type="text" name="" id="login-input" className="input-Enter"/>
                <div className="Label-Enter">
                    Пароль
                </div>
                <input type="password" name="" id="password-input" className="input-Enter"/>
                <div className="Label-Enter">
                    Локация
                </div>
                <div className="locateDiv">
                    <div className="input-Enter-radio">
                        <input type="radio" id="firstRadio" name="input-Enter" value="BolshayaMorskaya"/>
                        <label htmlFor="firstRadio">Большая Морская</label>
                    </div>
                    <div className="input-Enter-radio">
                        <input type="radio" id="secondRadio" name="input-Enter" value="Gastello"/>
                        <label htmlFor="secondRadio">Гастелло</label>
                    </div>
                    <div className="input-Enter-radio">
                        <input type="radio" id="thirdRadio" name="input-Enter" value="Lensoveta"/>
                        <label htmlFor="thirdRadio">Ленсовета</label>
                    </div>
                </div>    
                <input type="button" value="Войти" className="btn-Enter" onClick={LogInClick}/>
            </div>
        </div>
    );
};

export { EnterPG }