// Login variables
let email = document.getElementById("email");
let password = document.getElementById("password");
// Register Variables
let name = document.getElementById("name");
let reg_email = document.getElementById("reg-email");
let reg_password = document.querySelector("#reg-password");
let verifyPassword = document.getElementById("verify-password");
// Buttons
let login = document.getElementById("login-btn");
let register = document.getElementById("register-btn");

// Print Error message
const printError = (Id, Msg) => {
  document.getElementById(Id).innerHTML = Msg;
};

// Validate the name field
const validateName = (nam) => {
  if (nam === "") {
    printError("nameErr", "Please enter your name");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(nam) === false) {
      printError("nameErr", "Please enter a valid name");
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
};

// Validate the email adress field
const validateEmail = (mail, errorID, id) => {
  if (mail === "") {
    printError(errorID, "Please enter your email address");
    var elem = document.getElementById(id);
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(mail) === false) {
      printError(errorID, "Please enter a valid email address");
      var elem = document.getElementById(id);
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError(errorID, "");
      emailErr = false;
      var elem = document.getElementById(id);
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
};

// Validate the password field
const validatePassword = (psd, errorID, id) => {
  if (psd === "") {
    printError(errorID, "Please enter the password");
    var elem = document.getElementById(id);
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(psd) === false) {
      printError(
        errorID,
        "Password must contain lowercase, uppercase and special characters @$!%*?& , length >= 8"
      );
      var elem = document.getElementById(id);
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError(errorID, "");
      passwordErr = false;
      var elem = document.getElementById(id);
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }
};

// Validate the second password field
const comparePassword = (psd, checkPsd) => {
  if (psd !== checkPsd) {
    printError("checkPasswordErr", "Password does not match");
    var elem = document.getElementById("verify-password");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    printError("checkPasswordErr", "");
    passwordErr = false;
    var elem = document.getElementById("verify-password");
    elem.classList.add("input-1");
    elem.classList.remove("input-2");
  }
};

const validateLogin = (e) => {
  e.preventDefault();
  var emailErr = (passwordErr = true);

  validateEmail(email.value, "emailErr", "email");
  validatePassword(password.value, "passwordErr", "password");
  authenticateLogin();

  if ((emailErr = passwordErr === true)) {
    return false;
  }
};

const validateRegister = (e) => {
  // console.log(name, reg_email, password, reg_password);
  e.preventDefault();
  var nameErr = (emailErr = passwordErr = checkPasswordErr = true);

  // validateName(name);
  validateEmail(reg_email.value, "regEmailErr", "reg-email");
  validatePassword(reg_password.value, "regPasswordErr", "reg-password");
  comparePassword(reg_password.value, verifyPassword.value);

  if ((nameErr = emailErr = passwordErr = checkPasswordErr === true)) {
    return false;
  }
};

login.addEventListener("click", validateLogin);
register.addEventListener("click", validateRegister);

// LOGIN VERIFICATION FROM LOCAL STORAGE
function authenticateLogin() {
  if (
    email.value === "irachriskhan@gmail.com" &&
    password.value === "23Ckhan@"
  ) {
    window.location.href = "./dashboard.html";
  } else if (
    email.value !== "irachriskhan@gmail.com" &&
    password.value !== "23Ckhan@"
  ) {
    alert("Invalid Username and Password");
  } else if (password.value !== "1234") alert("Invalid Password");
  else alert("Invalid Username");
}
