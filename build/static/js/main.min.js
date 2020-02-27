let validation = () => {
  let form = document.querySelector("#form");
  let email1 = document.querySelector(".fr").value;
  let patternn = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  if (email1.match(patternn)) {
    email1.classList.add("novalid");
    email1.classList.remove("valid");
  }
  else {
    email1.classList.remove("novalid");
    email1.classList.add("valid");
  }
}

let email = document.querySelector(".fr");

email.addEventListener("keydown", validation());


