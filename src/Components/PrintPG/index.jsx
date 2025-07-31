import React from "react";

import "./styles.css"
import { Profile } from "../Profile/index.jsx";

const PrintPG = () => {
    window.sessionStorage.setItem('activeWindow', 'Print');
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
                            <div className="count-Card-Logs-Printing" id="bm-count"></div>
                        </div>
                        <div className="Card-Logs-Printing">
                            {/* <div className="date-Card-Logs-Printing">24.04.25</div> */}
                            <div className="locate-Card-Logs-Printing">Ленсовета</div>
                            <div className="count-Card-Logs-Printing" id="lensa-count"></div>
                        </div>
                        <div className="Card-Logs-Printing">
                            {/* <div className="date-Card-Logs-Printing">19.02.25</div> */}
                            <div className="locate-Card-Logs-Printing">Гастелло</div>
                            <div className="count-Card-Logs-Printing" id="gasta-count"></div>
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
                    <input type="button" value="Печать" className="Confirm-Manual-Printing"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PrintPG }