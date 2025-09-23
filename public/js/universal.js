function checkUserHome() {
    var username = window.localStorage.getItem("UserName");
    var loginButton = document.getElementById("login");
if(username != null) { 
    loginButton.innerHTML = "<a href='userprofile.html'>" + username + "</a>";
} else {
    loginButton.innerHTML = "<a href='userlogin.html'>Login</a>";
}
}