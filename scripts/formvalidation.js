

const confirm_password = document.querySelector('confirm_password');

function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var message = document.getElementById("message");
  
    if (password.value != confirm_password.value) {
      message.innerHTML = "Passwords do not match";
      message.style.color = "red";
      password.style.border = "2px solid red";
      confirm_password.style.border = "2px solid red";
    } else {
      message.innerHTML = "";
      password.style.border = "";
      confirm_password.style.border = "";
    }
  }
  