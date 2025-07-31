import React from "react";

import { Profile } from "../Profile/index.jsx";
import "./styles.css"

const SearchPG = () => {
    window.sessionStorage.setItem('activeWindow', 'Search');
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
                    <div className="AccountStatus">
                        <div className="Label-StudentInfo-Spisok">Статус аккаунта</div>
                        <div className="Name-StudentInfo-Spisok" id="editSksStatus"></div>
                    </div>
                    <div className="ContributionStatus">
                        <div className="Label-StudentInfo-Spisok">Взнос</div>
                        <div className="Name-StudentInfo-Spisok" id="editMoney"></div>
                    </div>
            </div>

        </div>
        </div>
    );
};

export { SearchPG }