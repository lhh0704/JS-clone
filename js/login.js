const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const USERNAME_KEY = "username";

 function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    if (username) {
        localStorage.setItem(USERNAME_KEY, username);
        return location.href = 'home.html'
    }

    alert("로그인 필요")
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername !== null) {
    location.href = 'home.html'
}

loginForm.addEventListener("submit", onLoginSubmit);
