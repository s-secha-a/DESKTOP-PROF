import { ShowInfo_profile } from "../Profile/ShowInfo";
import { getServUrl } from "../sideScripts/env";

const URL = getServUrl();


export function findByName(uuid) {
    fetch(`${URL}/api/v3/desktop/profile?uuiduser=${uuid}&sessioncode=${window.sessionStorage.getItem("sessionCode")}`, {
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
                    window.sessionStorage.setItem('lastName', data.secondname);
                    window.sessionStorage.setItem('firstName', data.firstName);
                    window.sessionStorage.setItem('patronymic', data.patronymic);
                    window.sessionStorage.setItem('nameFaculty', data.nameFaculty);
                    window.sessionStorage.setItem('course', data.course);
                    window.sessionStorage.setItem('photo', data.photo);
                    window.sessionStorage.setItem('sksStatus', data.status);
                    window.sessionStorage.setItem('budget', data.budget);
                    window.sessionStorage.setItem('startEducation', data.startEducation);
                    window.sessionStorage.setItem('endEducation', data.endEducation);
                    document.getElementById("forList").style.display = 'none';
                    
                    ShowInfo_profile()
                    ShowInfo_activate() 
    })
    .catch(err=>{
        console.log(err);
    })
}



export function ShowInfo_activate() {
        document.getElementById("StudentInfo-Spisok").style.display = 'inline'
        document.getElementById('editFaculty').innerHTML = window.sessionStorage.getItem('nameFaculty');
        if (window.sessionStorage.getItem('sksStatus')=="rejected") {
            document.getElementById('editSksStatus').innerHTML = "Отклонён";
        } else if (window.sessionStorage.getItem('sksStatus')=="blocked") {
            document.getElementById('editSksStatus').innerHTML = "Заблокирован";
        } else if (window.sessionStorage.getItem('sksStatus')=="moderation") {
            document.getElementById('editSksStatus').innerHTML = "На модерации";
        } else if (window.sessionStorage.getItem('sksStatus')=="active") {
            document.getElementById('editSksStatus').innerHTML = "Активен";
        }
        document.getElementById('editCourse').innerHTML = window.sessionStorage.getItem('course');
        
        
            // document.getElementById('editGroup').innerHTML += 'Extra stuff';;
        if (window.sessionStorage.getItem('budget')=="true") {
            document.getElementById('editBudget').innerHTML = "Бюджет";
        } else {document.getElementById('editBudget').innerHTML = "Контракт";}

        var status = window.sessionStorage.getItem('sksStatus');
        if (status == "moderation") {
            document.getElementById("NewStudent").style.display = 'flex';
        } else if (status == "rejected") {
            document.getElementById("RejectedStudent").style.display = 'flex';
        } else if (status == "active") {
            document.getElementById("ActiveStudent").style.display = 'flex';
        } else if (status == "blocked") {
            document.getElementById("BlockedStudent").style.display = 'flex';
        }
        
        document.getElementById('years').innerHTML = window.sessionStorage.getItem('startEducation')+"/"+window.sessionStorage.getItem('endEducation')
}
