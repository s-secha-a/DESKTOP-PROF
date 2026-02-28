import React from "react";

import { ActiveAcc, BlockAcc, viewPDFInFrame, RejectAcc } from "./buttonActivation.js";
import { HideInfo_profile } from "../sideScripts/hideInfo.js";
import backIcon from "../../assets/Icons/backIcon24.png";

const InfoWindow = () => {
    return(
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
                    <div className="sksStatus">
                        <div className="Label-StudentInfo-Spisok">Статус</div>
                        <div className="Name-StudentInfo-Spisok" id="editSksStatus"></div>
                    </div>
                    <div>
                        <input type="button" className="checks" value="Чек" onClick={viewPDFInFrame}/>
                    </div>

                    <div className="confirmButtons" id="NewStudent" style={{display:"none"}}>
                        <input type="button" className="statusBtn" value="Подтвердить" onClick={ActiveAcc}/>
                        <input type="button" className="statusBtn" value="Отклонить" onClick={RejectAcc}/>
                    </div>

                    <div className="confirmButtons" id="ActiveStudent" style={{display:"none"}}>
                        <input type="button" className="statusBtn" value="Заблокировать" onClick={BlockAcc}/>
                    </div>

                    <div className="confirmButtons" id="BlockedStudent" style={{display:"none"}}>
                        <input type="button" className="statusBtn" value="Разблокировать" onClick={ActiveAcc}/>
                    </div>

                    <div className="confirmButtons" id="RejectedStudent" style={{display:"none"}}>
                        <input type="button" className="statusBtn" value="Подтвердить" onClick={ActiveAcc}/>
                    </div>


                </div>
                <div className="backBtn" id="backBtn" onClick={HideInfo_profile} style={{display:'none'}}>
                    <img src={backIcon} alt="" className="Iconback"/>
                </div>
            </div>
    );
};

export { InfoWindow };