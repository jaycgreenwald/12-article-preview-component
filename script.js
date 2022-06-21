document.getElementById("share-check").addEventListener("click", displaySocial); 
const shareCheck = document.getElementById("share-check");

function displaySocial() {
    if (shareCheck.checked == true) {
        console.log(shareCheck.checked);
        document.getElementById("preview-social").style.display = "flex";
        document.getElementById("preview-checkbox").style.backgroundColor = "#6d7f97";
        document.getElementById("arrow-img").src = "images/icon-share.svg";
    } else if (shareCheck.checked == false) {
        console.log(shareCheck.checked);
        document.getElementById("preview-social").style.display = "none";
        document.getElementById("preview-checkbox").style.backgroundColor = "#ecf2f8";
        document.getElementById("arrow-img").src = "images/icon-share-color.svg";
    }
}
