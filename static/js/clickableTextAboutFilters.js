let isClicked = false;

currentDomain = window.location.origin;
if (window.location.href.includes(currentDomain + "/products/")){
document.addEventListener("DOMContentLoaded", function() {
    let clickableText = document.getElementById("what-it-means");
    clickableText.addEventListener("click", function() {
        if (!isClicked) {
            isClicked = true;
            document.getElementById("hided").style.display = "block";
        }
        else { 
            isClicked = false;
            document.getElementById("hided").style.display = "none";        
    };
});
});
}
