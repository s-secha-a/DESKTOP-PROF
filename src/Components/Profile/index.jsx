import React from "react";
import './styles.css';

import barcodeIcon from "../../assets/Icons/barcodeIcon24.png";

import { FindByBarcode } from "../sideScripts/barcodeScan.js";

const Profile = () => {
    
  const InputVer = () =>{
    var active = window.sessionStorage.getItem('activeWindow');
    if (active != "Activate") {
      return(
        <input 
            type="number" 
            className="input-barcode" 
            id="barcodeScan" 
            onFocus={function(){document.getElementById("barcodeScan").value = ""}} 
            onKeyDown={function(e){
              var keyCode = e.code || e.key;
              if (keyCode == 'Enter'){
                FindByBarcode();
          }}}/>
      )
    } else {
      return(
        <input 
          type="text" 
          className="input-barcode" 
          id="barcodeScan" 
          onFocus={function(){document.getElementById("barcodeScan").value = ""}} 
          onKeyDown={function(e){
            var keyCode = e.code || e.key;
            if (keyCode == 'Enter'){
              FindByBarcode();
          }}}/>
      )
    };
  };
  
  
  return(
        <div className="Profile">

          <div className="LabelSudent-Profile">
            Студент
            {/* <div className="scanButton" onClick={function(){document.getElementById("barcodeScan").focus()}}>
              <img src={barcodeIcon}/>
              Скан
            </div> */}
          </div>

          <InputVer />

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