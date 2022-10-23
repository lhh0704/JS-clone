const today = document.querySelector("h2#day");


function getDay() {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  today.innerText = `${year}.    ${month}.    ${day}`;
}

getDay();