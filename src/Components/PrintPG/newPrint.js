

export function addNewPrint() {
    let countPrint = document.getElementById("input-count-print").value;
    let newCountLocate = Number(countPrint) + Number(window.sessionStorage.getItem(window.sessionStorage.getItem('locate')));
    let newCountTotal = Number(countPrint) + Number(window.sessionStorage.getItem('total'));
    if (newCountTotal > 30) {
        alert("Лимит на печать: 30 листов в семестр")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else if (countPrint < 0) {
        alert("Количество листов должно быть больше нуля")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else if (!Number.isInteger(countPrint)) {
        alert("Количество листов должно быть целым")
        // throw new Error("ЗНАЧЕНИЕ БОЛЬШЕ 30"); // Сделать вывод на экран
    } else {
        fetch(`http://127.0.0.1:8000/api/v2.0/printInfo`, {
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
                window.sessionStorage.setItem('total', newCountTotal);
                window.sessionStorage.setItem(window.sessionStorage.getItem('locate'), newCountLocate);
                document.getElementById(window.sessionStorage.getItem('locate') + '-count').innerHTML = window.sessionStorage.getItem(window.sessionStorage.getItem('locate'));
                return response.json();
            } else {
                throw new Error("ОШИБКА НА СТРОНЕ СЕРВЕРА"); // Сделать вывод на экран
            }
            }
        )
        .then(json => console.log(json));

        
    }
}