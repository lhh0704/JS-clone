const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  location.href = '/'
} else {
  greeting.innerText = `Hello ${savedUsername}!`;
}
