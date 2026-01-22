

export function ShowInfo_search() {
    document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    document.getElementById('editFaculty').innerHTML = window.sessionStorage.getItem('nameFaculty');
    document.getElementById('editCourse').innerHTML = window.sessionStorage.getItem('course');
    // document.getElementById('editGroup').innerHTML += 'Extra stuff';;
    if (window.sessionStorage.getItem('budget')=="true") {
        document.getElementById('editBudget').innerHTML = "Бюджет";
    } else {document.getElementById('editBudget').innerHTML = "Контракт";}
    if (window.sessionStorage.getItem('status')=="active") {
        document.getElementById('editSksStatus').innerHTML = "Активен";
    } else {document.getElementById('editSksStatus').innerHTML = "Не активен";}
    // if (window.sessionStorage.getItem('money')=="true") {
    //     document.getElementById('editMoney').innerHTML = "Оплачен";
    // } else {document.getElementById('editMoney').innerHTML = "Не оплачен";}
}   