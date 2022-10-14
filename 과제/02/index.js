const body = document.querySelector("#hotbody");

function handleWindowResize() {
  let variable = window.innerWidth;

  if (variable >= 941) {
    body.style.backgroundColor = "yellow";
  } else if (940 > variable && variable > 400) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handleWindowResize);
handleWindowResize();
