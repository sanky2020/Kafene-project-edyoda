var userName = document.querySelector(".login-form-username");
var userPassword = document.querySelector(".login-form-password");
let submitBtn = document.getElementById("submit");
let form = $("#login-form");
form.submit(function(e){
    e.preventDefault();

    const user = userName.value;
    const pwd = userPassword.value;
    var mObj = {
      username: user,
      password: pwd,
    };
    if (user === pwd && user !== "" && pwd !== "") {
        console.log("yes");
        alert("Login‌ ‌Successful");
        localStorage.setItem("loginStatus", JSON.stringify(mObj));
        location.assign("./orders.html");
    }
    else {
        alert("Please‌‌ enter‌ ‌valid‌ ‌credentials!");
    }
})

document.getElementById("sign-out").style.display = "none";