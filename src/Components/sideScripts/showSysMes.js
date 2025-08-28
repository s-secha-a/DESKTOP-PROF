

function hideMessage(){
    sysMes.classList.remove("unhideSysMes");
}

export function showMessage(text, level) {

    if (level=="warn") {
        var background = "#d6a213ff";
    } else if (level=="error") {
        var background = "#dd4949ff";
    } else if (level=="success") {
        var background = "#10a003ff";
    }
    
    var sysMes = document.getElementById("sysMes");
    sysMes.innerHTML = text;
    sysMes.style.backgroundColor = background;
    sysMes.classList.toggle("unhideSysMes");
    setTimeout(hideMessage, 3000);
}