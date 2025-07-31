

export function ShowInfo_activate() {
    document.getElementById("StudentInfo-Spisok").style.display = 'inline'
    document.getElementById('editFaculty').innerHTML = window.sessionStorage.getItem('nameFaculty');
    document.getElementById('editCourse').innerHTML = window.sessionStorage.getItem('course');
    // document.getElementById('editGroup').innerHTML += 'Extra stuff';;
    if (window.sessionStorage.getItem('budget')=="true") {
        document.getElementById('editBudget').innerHTML = "Бюджет";
    } else {document.getElementById('editBudget').innerHTML = "Контракт";}
    
    document.getElementById('years').innerHTML = window.sessionStorage.getItem('startEducation')+"/"+window.sessionStorage.getItem('endEducation')
}
