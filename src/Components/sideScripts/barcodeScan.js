import React from "react";
// 2004084211893
import { ShowInfo_search } from "../SearchPG/showInfo.js";
import { ShowInfo_profile } from "../Profile/ShowInfo.js";
import { ShowInfo_print } from "../PrintPG/showInfo.js";
import { ShowInfo_activate } from "../ActivatePG/showInfo.js";
import renderUserCards from "../ActivatePG/createListFind.jsx";
import { getServUrl } from "./env.js";
import { showMessage } from "./showSysMes.js";

const URL = getServUrl();

export function ScanBarcode(barcode) {
    let ActivePage = window.sessionStorage.getItem('activeWindow');
    
    if (ActivePage == "Search") {
        fetch(`${URL}/api/v2.0/searchBarcode?barcode=${barcode}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}
        ).then(response => {
            if (response.status == 409) {
                showMessage("Такого баркода не существует", "warn")
                var er = new Error("Выход из then | 409 | Запрос1");
                er.name = "Custom";
                throw er;
            } else if (!response.ok){
                showMessage("Ошибка запроса barcode", "error");
                var er = new Error("Выход из then | !response.ok | Запрос1");
                er.name = "Custom";
                throw er;
            } else if (response.ok) {
                return response.json();}
        }).then(firstData =>{
            fetch(`${URL}/api/v2.0/profile?uuidUser=${firstData.uuidUser}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }}
            )
            .then(response=>{
                if (response.status == 422) {
                    showMessage("Ошибка запроса uuid", "error");
                    var er = new Error("Выход из then | 422 | Запрос2");
                    er.name = "Custom";
                    throw er;
                } else if (!response.ok){
                    showMessage("Ошибка запроса", "error");
                    var er = new Error("Выход из then | !response.ok | Запрос2");
                    er.name = "Custom";
                    throw er;
                } else if (response.ok) {
                    return response.json();}
            })
            .then(data=>{
                window.sessionStorage.setItem('uuidUser', data.uuidUser);
                window.sessionStorage.setItem('lastName', data.lastName);
                window.sessionStorage.setItem('firstName', data.firstName);
                window.sessionStorage.setItem('patronymic', data.patronymic);
                window.sessionStorage.setItem('nameFaculty', data.nameFaculty);
                window.sessionStorage.setItem('course', data.course);
                window.sessionStorage.setItem('budget', data.budget);
                window.sessionStorage.setItem('sksStatus', data.sksStatus);
                window.sessionStorage.setItem('money', data.money);
                window.sessionStorage.setItem('photo', data.photo);
                ShowInfo_profile()
                ShowInfo_search() 
            })
            .catch(err=>{
                if (err.name != "Custom"){
                    console.log(err);
                    showMessage("Сервер не ответил", "error");;
                }                         
            })
        })
        .catch(err=>{
            if (err.name != "Custom"){
                    console.log(err);
                    showMessage("Сервер не ответил", "error");
            }
        })
        // document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    } else if (ActivePage == "Print") {
        fetch(`${URL}/api/v2.0/searchBarcode?barcode=${barcode}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}
        ).then(response => {
            if (response.status == 409) {
                showMessage("Такого баркода не существует", "warn");
                var er = new Error("Выход из then | 409 | Запрос1");
                er.name = "Custom";
                throw er;
            } else if (!response.ok){
                showMessage("Ошибка запроса barcode", "error");
                var er = new Error("Выход из then | !response.ok | Запрос1");
                er.name = "Custom";
                throw er;
            } else if (response.ok) {
                return response.json();}
        }).then(firstData =>{
            window.sessionStorage.setItem('uuidUser', firstData.uuidUser);
            fetch(`${URL}/api/v2.0/studentInfo?uuidUser=${firstData.uuidUser}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }}
            )
            .then(response=>{
                if (response.status == 409) {
                    showMessage("Такого id не существует", "warn");
                    var er = new Error("Выход из then | 409 | Запрос2");
                    er.name = "Custom";
                    throw er;
                } else if (!response.ok){
                    showMessage("Ошибка запроса infoStudenta", "error");
                    var er = new Error("Выход из then | !response.ok | Запрос2");
                    er.name = "Custom";
                    throw er;
                } else if (response.ok) {
                    return response.json();}
            })
            .then(data=>{
                window.sessionStorage.setItem('lastName', data.lastName);
                window.sessionStorage.setItem('firstName', data.firstName);
                window.sessionStorage.setItem('patronymic', data.patronymic);
                window.sessionStorage.setItem('photo', data.photo);
                ShowInfo_profile()
            }).then(
                fetch(`${URL}/api/v2.0/printInfo?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }}
                ).then(response=>{
                    if (response.status == 422) {
                        showMessage("Такого id не существует", "warn");
                        var er = new Error("Выход из then | 422 | Запрос3");
                        er.name = "Custom";
                        throw er;
                    } else if (!response.ok){
                        showMessage("Ошибка запроса infoPrint", "error");
                        var er = new Error("Выход из then | !response.ok | Запрос3");
                        er.name = "Custom";
                        throw er;
                    } else if (response.ok) {
                        return response.json();}
                    }
                ).then(data=>{
                    window.sessionStorage.setItem('total', data.total);
                    window.sessionStorage.setItem('bm_office', data.bm_office);
                    window.sessionStorage.setItem('lns_office', data.lns_office);
                    window.sessionStorage.setItem('gst_office', data.gst_office);
                    ShowInfo_print();
                })
                .catch(err=>{
                    if (err.name != "Custom"){
                        console.log(err);
                        showMessage("Сервер не ответил", "error");
                    }
                })
                
            )
            .catch(err=>{
                if (err.name != "Custom"){
                    console.log(err);
                    showMessage("Сервер не ответил", "error");
                }
            })
        })
        .catch(err=>{
            if (err.name != "Custom"){
                console.log(err);
                showMessage("Сервер не ответил", "error");
            }
        })
        // document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    } else if (ActivePage == "Activate") {
        try{
            fetch(`${URL}/api/v2.0/search?searchText=${barcode}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&isActive=false`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }}
            ).then(response => {
                if (response.status == 422) {
                    showMessage("Пользователь не найден", "warn");
                    var er = new Error("Выход из then | 422");
                    er.name = "Custom";
                    throw er;
                } else if (!response.ok){
                    showMessage("Ошибка запроса auth", "error");
                    var er = new Error("Выход из then | !response.ok");
                    er.name = "Custom";
                    throw er;
                } else if (response.ok) {
                    return response.json();}
            })
            .then(res=>{                
                if (res.length==0){
                    showMessage("Пользователи не найдены", "warn");
                } else {
                    renderUserCards(res);
                }
            })
            .catch(err=>{
                if (err.name != "Custom"){
                    console.log(err);
                    showMessage("Сервер не ответил", "error");
                } else {
                    console.log(err);
                    showMessage("Неизвестная ошибка", "error");
                }
            })
        } catch (err) {
            console.log(err);
            showMessage("Неизвестная ошибка", "error");
        }
    }
};


export function FindByBarcode() {
    let barcode = document.getElementById("barcodeScan").value;
    if (window.sessionStorage.getItem('activeWindow')!="Activate") {
        if (barcode.length == 0 ){
            showMessage("Поле ввода пустое", "warn");
        } else if (barcode.length != 13){
            showMessage("Баркод неверного формата", "warn");
        } else {
            ScanBarcode(barcode);
        }
    } else {
        if (barcode.length == 0 ){
            showMessage("Поле ввода пустое", "warn");
        } else {
            ScanBarcode(barcode);
        }
    }
}