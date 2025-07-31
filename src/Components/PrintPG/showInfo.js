

export function ShowInfo_print() {
    document.getElementById("barcodeScan").style.display = 'none';
    document.getElementById("Printing").style.display = 'block';

    document.getElementById('bm-count').innerHTML = window.sessionStorage.getItem('bm_office');
    document.getElementById('lensa-count').innerHTML = window.sessionStorage.getItem('lns_office');
    document.getElementById('gasta-count').innerHTML = window.sessionStorage.getItem('gst_office');
}