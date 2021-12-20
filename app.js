const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (eInput.value == "") {
    eField.classList.add("shake", "error");
  } else {
    checkEmail();
  }
  if (pInput.value == "") {
    pField.classList.add("shake", "error");
  }

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.addEventListener("keyup", () => {
    checkEmail();
  });

  function checkEmail() {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // pattern to validate email
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      let errorTxt = eField.querySelector(".error-txt");

      eInput.value != ""
        ? (errorTxt.innerText = "Enter a valid email address")
        : (errorTxt.innerText = "Email can't be blank");
    } else {
      eField.classList.remove("error");
    }
  }

  pInput.addEventListener("keyup", () => {
    if (pInput.value == "") {
      pField.classList.add("error");
    } else {
      pField.classList.remove("error");
    }
  });

  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    window.location.href = "#";
    console.log("Form Submitted!");
  }
});
