

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
        console.log("Заполнить все поля!");
        // вывести текст на страницу
    } else {
        try {
            console.log(login);
            console.log(password);
            console.log(locate);
            
            fetch(`http://127.0.0.1:8000/api/v2.0/userAuth?login=${login}&password=${password}&locate=${locate}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(response => {
                if (response.status == 403) {
                    console.log("Неверный логин или пароль");
                } else if (!response.ok){
                    console.log("Статус ответа не в диапазоне 200-299");
                } else if (response.ok) {
                    return response.json();
            }})
            .then(data => {
                if (data.access == true) {
                    window.sessionStorage.setItem('sessionCode', data.sessionCode);
                    window.location.reload();
                } else {
                    console.log("Access = False")
                }
            })
            .catch((err) => {
                console.log("Сервер не отвечает");
                console.log(err)
            })
        } catch (ex) {
            console.log("Ошибка = " + ex);   
        }
    };
}