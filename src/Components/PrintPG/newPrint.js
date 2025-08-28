import { getServUrl } from "../sideScripts/env";
import { showMessage } from "../sideScripts/showSysMes";


const URL = getServUrl();

export function addNewPrint() {
    let countPrint = document.getElementById("input-count-print").value;
    let newCountLocate = Number(countPrint) + Number(window.sessionStorage.getItem(window.sessionStorage.getItem('locate')));
    let newCountTotal = Number(countPrint) + Number(window.sessionStorage.getItem('total'));
    if (countPrint == "") {
        showMessage("Нужно заполнить все поля", "warn");
        // alert("Превышен лимит в 30 листов")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else if (newCountTotal > 30) {
        showMessage("Превышен лимит (30 листов)", "warn");
        // alert("Превышен лимит в 30 листов")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else if (countPrint <= 0) {
        showMessage("Количество листов не может быть 0 и меньше", "warn");
        // alert("Количество листов должно быть больше нуля")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else if (!Number.isInteger(countPrint/1)) {
        // console.log(countPrint);
        showMessage("Количество листов должно быть целым", "warn");
        // alert("Количество листов должно быть целым")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else {
        try {
            fetch(`${URL}/api/v2.0/printInfo`, {
                method: "PUT",
                body: JSON.stringify({
                    uuidUser: window.sessionStorage.getItem("uuidUser"),
                    sessionCode: window.sessionStorage.getItem("sessionCode"),
                    object: window.sessionStorage.getItem("locate"),
                    value: String(newCountLocate),
                    total: String(newCountTotal)
                }),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
            .then(response => {
                if (response.ok) {
                    showMessage("Успешно добавлено", "success");
                    window.sessionStorage.setItem('total', newCountTotal);
                    window.sessionStorage.setItem(window.sessionStorage.getItem('locate'), newCountLocate);
                    document.getElementById(window.sessionStorage.getItem('locate') + '-count').innerHTML = window.sessionStorage.getItem(window.sessionStorage.getItem('locate'));
                    return response.json();
                } else {
                    showMessage("Ошибка сервера", "error");
                }
                }
            )       
        } catch (ex) {
            if (ex.name == "TypeError"){
                console.log(ex);
                showMessage("Сервер не ответил", "error");
            }
        }
    }
}