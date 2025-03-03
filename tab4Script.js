document.getElementById("profileImage").addEventListener("click", function() {
    document.getElementById("notification").style.display = "block";
});

function closeNotification() {
    document.getElementById("notification").style.display = "none";
}