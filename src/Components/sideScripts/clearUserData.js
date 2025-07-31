

export function clearUserData() {
    window.sessionStorage.removeItem('uuidUser');
    window.sessionStorage.removeItem('nameFaculty');
    window.sessionStorage.removeItem('course');
    window.sessionStorage.removeItem('budget');
    window.sessionStorage.removeItem('sksStatus');
    window.sessionStorage.removeItem('money');
    window.sessionStorage.removeItem('lastName');
    window.sessionStorage.removeItem('firstName');
    window.sessionStorage.removeItem('patronymic');
    window.sessionStorage.removeItem('photo');
    window.sessionStorage.removeItem('total');
    window.sessionStorage.removeItem('bm_office');
    window.sessionStorage.removeItem('lns_office');
    window.sessionStorage.removeItem('gst_office');
    window.sessionStorage.removeItem('startEducation');
    window.sessionStorage.removeItem('endEducation');
}