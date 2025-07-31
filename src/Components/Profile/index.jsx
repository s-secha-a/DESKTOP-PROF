import React from "react";
import './styles.css';

import barcodeIcon from "../../assets/Icons/barcodeIcon24.png";

import { FindByBarcode } from "../sideScripts/barcodeScan.js";

const Profile = () => {
    return(
        <div className="Profile">

          <div className="LabelSudent-Profile">
            Студент
            {/* <div className="scanButton" onClick={function(){document.getElementById("barcodeScan").focus()}}>
              <img src={barcodeIcon}/>
              Скан
            </div> */}
          </div>

          <input type="numeric" 
            className="input-barcode" 
            id="barcodeScan" 
            onFocus={function(){document.getElementById("barcodeScan").value = ""}} 
            onKeyDown={function(e){
              var keyCode = e.code || e.key;
              if (keyCode == 'Enter'){
                FindByBarcode();
          }}}/>

          <div className="StudentName-Profile">
            <div id="SecondName-StudentName-Profile"></div>
            <div id="FirstName-StudentName-Profile"></div>
            <div id="PatronymicName-StudentName-Profile"></div>
          </div>

          <div className="StudentPhoto-Profile" id="PhotoProfile">
            
          </div>

        </div>
    );
};

export {Profile};