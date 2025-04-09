const lampEl = document.getElementById("lamp");

console.log(lampEl);

const buttonEl = document.querySelector(".btn");

console.log(buttonEl);

function accendiSpegni() {
  if (buttonEl.classList.contains("btn-primary")) {
    lampEl.src = "./assets/img/yellow_lamp.png";
    buttonEl.classList.replace("btn-primary", "btn-danger");
    buttonEl.innerText = "Spegni";
  } else {
    lampEl.src = "./assets/img/white_lamp.png";
    buttonEl.classList.replace("btn-danger", "btn-primary");
    buttonEl.innerText = "Accendi";
  }
}

buttonEl.addEventListener("click", accendiSpegni);
