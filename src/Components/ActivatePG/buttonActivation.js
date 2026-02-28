import { getServUrl } from "../sideScripts/env";
import { showMessage } from "../sideScripts/showSysMes";


const URL = getServUrl();


export function ActiveAcc(){
    try {
        fetch(`${URL}/api/v3/desktop/updatestatus?uuiduser=${window.sessionStorage.getItem("uuidUser")}&sessioncode=${window.sessionStorage.getItem("sessionCode")}&newstatus=active`, {
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
        fetch(`${URL}/api/v3/desktop/updatestatus?uuiduser=${window.sessionStorage.getItem("uuidUser")}&sessioncode=${window.sessionStorage.getItem("sessionCode")}&newstatus=rejected`, {
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
        fetch(`${URL}/api/v3/desktop/updatestatus?uuiduser=${window.sessionStorage.getItem("uuidUser")}&sessioncode=${window.sessionStorage.getItem("sessionCode")}&newstatus=blocked`, {
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

export function viewPDFInFrame() {
    // const url = `${URL}/api/v3/desktop/getchecks?uuiduser=${window.sessionStorage.getItem("uuidUser")}&sessioncode=${window.sessionStorage.getItem("sessionCode")}`;
    async function lol() {
        try {
            const uuiduser = window.sessionStorage.getItem("uuidUser");
            const sessioncode = window.sessionStorage.getItem("sessionCode");
            
            if (!uuiduser || !sessioncode) {
                throw new Error('Не найдены данные пользователя или сессии');
            }
            
            const apiUrl = `${URL}/api/v3/desktop/getchecks?uuiduser=${uuiduser}&sessioncode=${sessioncode}`;
            
            // ПРОСТОЙ ВАРИАНТ: Открываем напрямую URL
            // В Electron это откроется во встроенном просмотрщике
            
            
            window.open(apiUrl, '_blank', 'width=1200,height=800');
            
        } catch (error) {
            console.error('Ошибка:', error);
            alert(`Ошибка: ${error.message}`);
        }
            
    };
    lol();
}
