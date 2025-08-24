

export function ActiveAcc(){
    fetch(`http://127.0.0.1:8000/api/v2.0/active?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&reasonText=''`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(res=>{
        if (res.ok) {
            console.log("Разблокан");
        } else {
            console.log(res);
        }
    })
};



export function RejectAcc() {
    fetch(`http://127.0.0.1:8000/api/v2.0/reject?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&reasonText=${"Некорректное фото"}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(res=>{
        if (res.ok) {
            console.log("Отклонён");
        } else {
            console.log(res);
        }
    })
};



export function BlockAcc() {
    fetch(`http://127.0.0.1:8000/api/v2.0/block?uuidUser=${window.sessionStorage.getItem("uuidUser")}&sessionCode=${window.sessionStorage.getItem("sessionCode")}&reasonText='Без причины'`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(res=>{
        if (res.ok) {
            console.log("Заблокан");
        } else {
            console.log(res);
        }
    })
};