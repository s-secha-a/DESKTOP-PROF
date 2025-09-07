

export function ShowInfo_profile() {
    document.getElementById("barcodeScan").style.display = 'none';
    document.getElementById("backBtn").style.display = 'block';

    document.getElementById('SecondName-StudentName-Profile').innerHTML = window.sessionStorage.getItem('lastName');
    document.getElementById('FirstName-StudentName-Profile').innerHTML = window.sessionStorage.getItem('firstName');
    document.getElementById('PatronymicName-StudentName-Profile').innerHTML = window.sessionStorage.getItem('patronymic');
    
    var photoProfile = new Image();
    photoProfile.src = window.sessionStorage.getItem('photo');
    photoProfile.className="StudentPhoto-Profile";
    document.getElementById('PhotoProfile').innerHTML = "";
    document.getElementById('PhotoProfile').appendChild(photoProfile);
};
