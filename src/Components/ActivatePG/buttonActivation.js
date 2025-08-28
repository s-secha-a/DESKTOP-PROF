import { getServUrl } from "../sideScripts/env";
import { showMessage } from "../sideScripts/showSysMes";


const URL = getServUrl();


export function ActiveAcc(){
    try {
        fetch(`${URL}/api/v2.0/active?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&reasonText=''`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(res=>{
            if (res.ok) {
                showMessage("Студент разблокирован", "success");
            } else {
                showMessage("Запрос не выполнен", "error");
                console.log(res);
            }
        })
        .catch(err => {
            showMessage("Сервер не ответил", "error");
            console.log(err);
        })
    } catch (err){
        showMessage("Локальная ошибка", "error");
        console.log(err);
    }
};



export function RejectAcc() {
    try {
        fetch(`${URL}/api/v2.0/reject?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&reasonText=${"Некорректное фото"}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(res=>{
            if (res.ok) {
                showMessage("Студент отклонён", "success");
            } else {
                showMessage("Запрос не выполнен", "error");
                console.log(res);
            }
        })
        .catch(err => {
            showMessage("Сервер не ответил", "error");
            console.log(err);
        })
    } catch (err){
        showMessage("Локальная ошибка", "error");
        console.log(err);
    }
};



export function BlockAcc() {
    try {
        fetch(`${URL}/api/v2.0/block?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&reasonText='Без причины'`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(res=>{
            if (res.ok) {
                showMessage("Студент заблокирован", "success");
            } else {
                showMessage("Запрос не выполнен", "error");
                console.log(res);
            }
        })
        .catch(err => {
            showMessage("Сервер не ответил", "error");
            console.log(err);
        })
    } catch (err){
        showMessage("Локальная ошибка", "error");
        console.log(err);
    }
};