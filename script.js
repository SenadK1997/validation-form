let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");
let form3 = document.querySelector("#form3");

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

let next1 = document.querySelector("#next1");
let next2 = document.querySelector("#next2");
let back1 = document.querySelector("#back1");
let back2 = document.querySelector("#back2");

const errorEmail = document.querySelector('#errorEmail');
const errorPassword = document.querySelector('#errorPassword');
const errorConfirm = document.querySelector('#errorConfirm');
let message = [];
let validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

next1.addEventListener('click', (e) => {
  e.preventDefault();

  CheckInputs();
});

function CheckInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = confirmPassword.value.trim();

  if (emailValue === '') {
    message.push('Email cannot be blank');
  }
  else if (!emailValue.match(validEmail)) {
    message.push('Invalid email adress');
  }

  if (passwordValue <= 6) {
    message.push('Your password must be greater than 6 characters');
  }
  else if (passwordValue >= 18) {
    message.push('Your password must be lesser than 18 character');
  }

  if (passwordValue !== password2Value) {
    message.push('Password doesnt match');
  }
  else if (password2Value === '') {
    message.push('Confirm password cannot be blank')
  }
  else {
    message = [];
    form1.style.left = "-450px";
    form2.style.left = "40px";
  }

  errorEmail.innerText = message.join(', ')

}

next2.addEventListener("click", (e) => {

  form2.style.left = "-450px";
  form3.style.left = "40px";
});

back1.addEventListener("click", () => {
  form1.style.left = "40px";
  
  form2.style.left = "450px";
});

back2.addEventListener("click", () => {
  form2.style.left = "40px";
  
  form3.style.left = "450px";
});

