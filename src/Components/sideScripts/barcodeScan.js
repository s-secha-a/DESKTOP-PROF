import React from "react";

import { ShowInfo_search } from "../SearchPG/showInfo.js";
import { ShowInfo_profile } from "../Profile/ShowInfo.js";
import { ShowInfo_print } from "../PrintPG/showInfo.js";
import { ShowInfo_activate } from "../ActivatePG/showInfo.js";

export function ScanBarcode(barcode) {
    let ActivePage = window.sessionStorage.getItem('activeWindow');
    
    if (ActivePage == "Search") {
        fetch(`http://127.0.0.1:8000/api/v2.0/searchBarcode?barcode=${barcode}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}
        ).then(response => {
            if (response.status == 422) {
                throw new Error('Пользователь не найден! (Запрос1)')
            } else if (!response.ok){
                throw new Error('Статус ответа не в диапазоне 200-299 (Запрос1)')
            } else if (response.ok) {
                return response.json();}
        }).then(firstData =>{
            fetch(`http://127.0.0.1:8000/api/v2.0/profile?uuidUser=${firstData.uuidUser}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }}
            )
            .then(response=>{
                if (response.status == 422) {
                    throw new Error('Пользователь не найден! (Запрос2)')
                } else if (!response.ok){
                    throw new Error('Статус ответа не в диапазоне 200-299 (Запрос2)')
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
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })
        // document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    } else if (ActivePage == "Print") {
        fetch(`http://127.0.0.1:8000/api/v2.0/searchBarcode?barcode=${barcode}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}
        ).then(response => {
            if (response.status == 422) {
                throw new Error('Пользователь не найден! (Запрос1)')
            } else if (!response.ok){
                throw new Error('Статус ответа не в диапазоне 200-299 (Запрос1)')
            } else if (response.ok) {
                return response.json();}
        }).then(firstData =>{
            window.sessionStorage.setItem('uuidUser', firstData.uuidUser);
            fetch(`http://127.0.0.1:8000/api/v2.0/studentInfo?uuidUser=${firstData.uuidUser}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }}
            )
            .then(response=>{
                if (response.status == 422) {
                    throw new Error('Пользователь не найден! (Запрос2)')
                } else if (!response.ok){
                    throw new Error('Статус ответа не в диапазоне 200-299 (Запрос2)')
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
                fetch(`http://127.0.0.1:8000/api/v2.0/printInfo?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }}
                ).then(response=>{
                    if (response.status == 422) {
                        throw new Error('Пользователь не найден! (Запрос3)')
                    } else if (!response.ok){
                        throw new Error('Статус ответа не в диапазоне 200-299 (Запрос3)')
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
                console.log(err);
                })
                
            )
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })
        // document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    } else if (ActivePage == "Activate") {
        fetch(`http://127.0.0.1:8000/api/v2.0/searchBarcode?barcode=${barcode}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}
        ).then(response => {
            if (response.status == 422) {
                throw new Error('Пользователь не найден! (Запрос1)')
            } else if (!response.ok){
                throw new Error('Статус ответа не в диапазоне 200-299 (Запрос1)')
            } else if (response.ok) {
                return response.json();}
        }).then(firstData =>{
            fetch(`http://127.0.0.1:8000/api/v2.0/profile?uuidUser=${firstData.uuidUser}&sessionCode=${window.sessionStorage.getItem("sessionCode")}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }}
            )
            .then(response=>{
                if (response.status == 422) {
                    throw new Error('Пользователь не найден! (Запрос2)')
                } else if (!response.ok){
                    throw new Error('Статус ответа не в диапазоне 200-299 (Запрос2)')
                } else if (response.ok) {
                    return response.json();}
            })
            .then(data=>{
                window.sessionStorage.setItem('uuidUser', data.uuidUser);
                window.sessionStorage.setItem('lastName', data.lastName);
                window.sessionStorage.setItem('firstName', data.firstName);
                window.sessionStorage.setItem('patronymic', data.patronymic);
                window.sessionStorage.setItem('nameFaculty', data.nameFaculty);
                window.sessionStorage.setItem('budget', data.budget);
                window.sessionStorage.setItem('course', data.course);
                window.sessionStorage.setItem('startEducation', data.startEducation);
                window.sessionStorage.setItem('endEducation', data.endEducation);
                window.sessionStorage.setItem('photo', data.photo);
                ShowInfo_profile()
                ShowInfo_activate() 
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })
        // document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    }
};


export function FindByBarcode() {
    let barcode = document.getElementById("barcodeScan").value;
    if (barcode.length==13) {
        ScanBarcode(barcode)
    } else {
        document.getElementById("barcodeScan").value = ""
    }
    
}