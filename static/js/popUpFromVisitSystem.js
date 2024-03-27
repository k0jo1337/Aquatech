function enablePopUp(){
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");

    setTimeout(function() {
        popup.classList.remove("show");
    }, 20000);

    document.getElementById("myPopup").addEventListener("click", function() {
        removePopUp();
        }, { once: true });

    document.getElementById("menuToggle_main").addEventListener("click", function() {
        removePopUp();
    }, { once: true });
}

function removePopUp(){
    var popup = document.getElementById("myPopup");
    popup.classList.add("hide");
    popup.addEventListener("animationend", function() {
        popup.remove();
    }, { once: true });
}

document.addEventListener("DOMContentLoaded", function() {

    if (localStorage.getItem('lastDV')) { //проверяется и сеттится в currentUSDToRUB
        if (Math.random() <= 0.1) enablePopUp();
    }
     else {
        enablePopUp();
     }

    });
