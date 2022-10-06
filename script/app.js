

function handleFloatingLabel() {
  const inputPass = document.querySelectorAll('.js-input');
  const inputLabel = document.querySelector('.js-formfield');

  if(isEmpty(inputPass.value)){
    inputLabel.classList.add('is-floating');
  } else {
    inputLabel.classList.remove('is-floating');
  }
}


const passwordOptions = ['password', 'text'];
function handlePasswordSwitcher() {
  console.log('handlePasswordSwitcher');
  const passwordInput = document.querySelector('.c-input_password');
  const passwordToggle = document.querySelector('.c-toggle-password__checkbox');
  passwordToggle.addEventListener('change', function () {
  passwordInput.type = passwordOptions[+this.checked];
  });
  
}

let email = {},
password = {},
signInButton;
function getDOMElements(){
    email.input = document.querySelector('.js-input_email');
    email.errorMessage= document.querySelector('.js-email-error-message');
    email.field = document.querySelector('.js-form-field-email');
    password.input = document.querySelector('.js-input_password');
    password.errorMessage=document.querySelector('.js-password-error-message');
    password.field = document.querySelector('.js-form-field-passwoord');
    signInButton = document.querySelector('.js-sign-in-button');    
}
function enableListners(){
  console.log("enableListners");
  email.input.addEventListener('blur', function(){
    const emailValue= this.value;
    if(isValidEmailAddress(emailValue)){
      email.field.classList.remove("has-error");
      email.errorMessage.classList.add('o-hide-accessible');
    }else{
            email.field.classList.add("has-error");
            email.errorMessage.classList.remove('o-hide-accessible');
        }
    });
    password.input.addEventListener('blur', function(){
        const passwordValue = this.value;
        if(isValidPassword(passwordValue)){
            password.field.classList.remove("has-error");
            password.errorMessage.classList.add('o-hide-accessible');
        }else{
            password.field.classList.add("has-error");
            password.errorMessage.classList.remove('o-hide-accessible');
        }
    });
    signInButton.addEventListener('click', function()
    {
        const emailValue = email.input.value;
        const passwordValue = password.input.value;
        
          if(!isValidEmailAddress(emailValue))
          {
            email.errorMessage.innerHTML = 'invalid email';
          }
          
          if(!isValidPassword(passwordValue))
          {
            password.errorMessage.innerHTML = 'invalid password';
          }
          if(isValidEmailAddress(emailValue) && isValidPassword(passwordValue))
          {
            alert('succes');
          }
    });
}
const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};   
const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};
const isValidPassword = function (password) {
  return password.length >= 1;
  
};

document.addEventListener('DOMContentLoaded', function () {
  const htmlInteractions = document.querySelector('.c-toggle-password__icon');
  console.log('Script loaded!');
  if(htmlInteractions){
    handleFloatingLabel();
    handlePasswordSwitcher();
  }else{
    getDOMElements();
    enableListners();

  }
  
});
