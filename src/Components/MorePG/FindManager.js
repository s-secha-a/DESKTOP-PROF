import { getServUrl } from "../sideScripts/env";
import { showMessage } from "../sideScripts/showSysMes";


const URL = getServUrl();


export function findManager() {
    try {
        fetch(`${URL}/api/v3/desktop/profile?uuiduser=${window.sessionStorage.getItem("managerUuid")}&sessioncode=${window.sessionStorage.getItem("sessionCode")}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}
        )
        .then(response=>{
            if (response.status == 409) {
                showMessage("Такого id не существует", "error");
                var er = new Error("Выход из then | 409 ");
                er.name = "Custom";
                throw er;
            } else if (!response.ok){
                showMessage("Ошибка запроса id", "error");
                var er = new Error("Выход из then | !response.ok ");
                er.name = "Custom";
                throw er;
            } else if (response.ok) {
                return response.json();}
        })
        .then(data=>{
            document.getElementById('SecondName-StudentName-Profile').innerHTML = data.secondname;
            document.getElementById('FirstName-StudentName-Profile').innerHTML = data.firstName;
            document.getElementById('PatronymicName-StudentName-Profile').innerHTML = data.patronymic;

            async function loadVersion() {
                const version = await window.electronAPI.getAppVersion();
                document.getElementById('editVersion').innerHTML = version;;
            }   

            loadVersion();
            
            var photoProfile = new Image();
            photoProfile.src = data.photo;
            photoProfile.className="StudentPhoto-Profile";
            document.getElementById('PhotoProfile').innerHTML = "";
            document.getElementById('PhotoProfile').appendChild(photoProfile);
        })
        .catch(err=>{
            if (err.name != "Custom" && err.name == "TypeError"){
                console.log(err);
                showMessage("Сервер не ответил", "error");
            } else {
                showMessage("Неизвестная ошибка", "error");
            }
        })
    } catch (err) {
        if (err.name != "Custom" && err.name == "TypeError"){
                console.log(err);
                showMessage("Сервер не ответил", "error");
        } else {
                showMessage("Неизвестная ошибка", "error");
        }
    }
}