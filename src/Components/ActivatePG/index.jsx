import React from "react";

import { Profile } from "../Profile/index.jsx";
import "./styles.css"
import { ConfirmAcc, DenyAcc } from "./buttonActivation.js";

const ActivatePG = () => {
    window.sessionStorage.setItem('activeWindow', 'Activate');
    return(
        <div className="activeWorkSpace">
            <Profile />
            <div className="StudentInfo-Spisok" id="StudentInfo-Spisok" style={{display:"none"}}>
                <div className="Institut-StudentInfo-Spisok">
                    <div className="Label-StudentInfo-Spisok">Институт/Факультет</div>
                    <div className="Name-StudentInfo-Spisok" id="editFaculty"></div>
                </div>
                <div className="Anouther-StudentInfo-Spisok">
                    <div className="Сourse">
                        <div className="Label-StudentInfo-Spisok">Курс</div>
                        <div className="Name-StudentInfo-Spisok" id="editCourse"></div>
                    </div>
                    {/* <div className="Group">
                        <div className="Label-StudentInfo-Spisok">Группа</div>
                        <div className="Name-StudentInfo-Spisok" id="editGroup">???</div>
                    </div> */}
                    <div className="FormStudy">
                        <div className="Label-StudentInfo-Spisok">Форма обучения</div>
                        <div className="Name-StudentInfo-Spisok" id="editBudget"></div>
                    </div>
                    <div className="YearsStudy">
                        <div className="Label-StudentInfo-Spisok">Года обучения</div>
                        <div className="Name-StudentInfo-Spisok" id="years"></div>
                    </div>

                    <div className="confirmButtons">
                        <input type="button" className="statusBtn" value="Подтвердить" onClick={ConfirmAcc}/>
                        <input type="button" className="statusBtn" value="Отклонить" onClick={DenyAcc}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ActivatePG };