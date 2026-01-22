import { getServUrl } from "./env";
import { showMessage } from "./showSysMes";

const URL = getServUrl();

export default function LogInClick() {
    console.log('Нажата');
    let login = document.getElementById("login-input").value;
    let password = document.getElementById("password-input").value;
    let locate
    try{
        locate = document.querySelector('input[name="input-Enter"]:checked').value;
    } catch (err) {
        locate = ""
    }    

    if (login=="" || password=="" || locate=="") {
        showMessage("Нужно заполнить все поля", "warn");
        // вывести текст на страницу
    } else {
        try {
            console.log(login);
            console.log(password);
            fetch(`${URL}/api/v3/desktop/userAuth?login=${login}&password=${password}&locate=${locate}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(response => {
                if (response.status == 403) {
                    showMessage("Неверный логин и/или пароль", "error");
                    var er = new Error("Выход из then | 403");
                    er.name = "Custom";
                    throw er;
                } else if (response.status == 406){
                    showMessage("Ошибка на стороне сервера", "error");
                    var er = new Error("Выход из then | 406");
                    er.name = "Custom";
                    throw er;
                } else if (!response.ok){
                    showMessage("Ошибка запроса auth", "error");
                    var er = new Error("Выход из then | !response.ok");
                    er.name = "Custom";
                    throw er;
                } else if (response.ok) {
                    return response.json();
            }})
            .then(data => {
                console.log(data);
                if (data.access == true) {
                    window.sessionStorage.setItem('sessionCode', data.sessionCode);
                    window.sessionStorage.setItem('locate', locate);
                    window.sessionStorage.setItem('managerUuid', data.uuidUser);
                    window.location.reload();
                } else {
                    console.log("Access = False")
                    showMessage("Этот аккаунт заблокирован", "warn");
                }
            })
            .catch((err) => {
                if (err.name != "Custom"){
                    console.log(err);
                    showMessage("Сервер не ответил", "error");
                }                            
            })
        } catch (ex) {
            showMessage("Локальная ошибка", "error")
            console.log(ex);   
        }
    };
}