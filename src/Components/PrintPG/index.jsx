import React from "react";

import "./styles.css"
import { Profile } from "../Profile/index.jsx";
import { addNewPrint } from "./newPrint.js";
import { clearUserData } from "../sideScripts/clearUserData.js";
import { HideInfo_profile } from "../sideScripts/hideInfo.js";
import backIcon from "../../assets/Icons/backIcon24.png";

const PrintPG = () => {
    window.sessionStorage.setItem('activeWindow', 'Print');
    clearUserData()
    
    return(
        <div className="activeWorkSpace">
            <Profile />
            <div className="Printing" id="Printing" style={{display:"none"}}>
                <div className="Logs-Printing">
                    История печати
                    <div className="divForLogs">
                        <div className="Card-Logs-Printing">
                            {/* <div className="date-Card-Logs-Printing">12.06.25</div> */}
                            <div className="locate-Card-Logs-Printing">Большая морская</div>
                            <div className="count-Card-Logs-Printing" id="bm_office-count"></div>
                        </div>
                        <div className="Card-Logs-Printing">
                            {/* <div className="date-Card-Logs-Printing">24.04.25</div> */}
                            <div className="locate-Card-Logs-Printing">Ленсовета</div>
                            <div className="count-Card-Logs-Printing" id="lns_office-count"></div>
                        </div>
                        <div className="Card-Logs-Printing">
                            {/* <div className="date-Card-Logs-Printing">19.02.25</div> */}
                            <div className="locate-Card-Logs-Printing">Гастелло</div>
                            <div className="count-Card-Logs-Printing" id="gst_office-count"></div>
                        </div>
                    </div>
                </div>
                <div className="Manual-Printing">
                    Ручная печать
                    <div className="Body-Manual-Printing">
                    <div className="Setting-Manual-Printing" onClick={function(){document.getElementById("input-count-print").focus()}}>
                        <div>Листов</div>
                        <input type="number" name="" id="input-count-print" className="Input-Setting-Manual-Printing"
                        min="1" max="30"/>
                    </div>
                    <input type="button" value="Печать" className="Confirm-Manual-Printing" onClick={addNewPrint}/>
                    </div>
                </div>
            </div>
            <div className="backBtn" id="backBtn" onClick={HideInfo_profile} style={{display:'none'}}>
                <img src={backIcon} alt="" className="Iconback"/>
            </div>       
        </div>
    );
};

export { PrintPG }