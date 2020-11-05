function openLanguage(languageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(languageName).style.display = "block";
    elmnt.style.backgroundColor = color;
 
}
// Đặt button có id = "defaultOpen" để hiển thị tự động
document.getElementById("defaultOpen").click();