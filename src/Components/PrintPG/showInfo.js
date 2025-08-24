

export function ShowInfo_print() {
    document.getElementById("barcodeScan").style.display = 'none';
    document.getElementById("Printing").style.display = 'block';

    document.getElementById('bm_office-count').innerHTML = window.sessionStorage.getItem('bm_office');
    document.getElementById('lns_office-count').innerHTML = window.sessionStorage.getItem('lns_office');
    document.getElementById('gst_office-count').innerHTML = window.sessionStorage.getItem('gst_office');
}