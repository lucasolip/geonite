function submitUser() {
    localStorage.user = document.getElementById("user").value;
    window.location.href = "index.html";
}

window.onload = function() {
    button = document.getElementById("loginButton");
    button.addEventListener("click", submitUser);
}