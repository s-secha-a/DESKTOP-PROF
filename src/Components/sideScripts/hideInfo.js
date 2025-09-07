
import { clearUserData } from "./clearUserData";

export function HideInfo_profile() {
    try{
        document.getElementById("barcodeScan").style.display = 'block';
        document.getElementById("backBtn").style.display = 'none';
        document.getElementById("barcodeScan").value = '';
    } catch {};
    try{
        document.getElementById('SecondName-StudentName-Profile').innerHTML = "";
        document.getElementById('FirstName-StudentName-Profile').innerHTML = "";
        document.getElementById('PatronymicName-StudentName-Profile').innerHTML = "";
        document.getElementById('PhotoProfile').innerHTML = "";
    } catch {};
    try{
        document.getElementById("StudentInfo-Spisok").style.display = 'none';
        document.getElementById('editFaculty').innerHTML = "";
        document.getElementById('editSksStatus').innerHTML = "";
        document.getElementById('editCourse').innerHTML = "";
        document.getElementById('editBudget').innerHTML = "";
        document.getElementById("NewStudent").style.display = 'none';    
        document.getElementById('years').innerHTML = "";
    } catch {};
    try{
        document.getElementById("Printing").style.display = 'none';
        document.getElementById('bm_office-count').innerHTML = "";
        document.getElementById('lns_office-count').innerHTML = "";
        document.getElementById('gst_office-count').innerHTML = "";
    } catch {};
    clearUserData()
}