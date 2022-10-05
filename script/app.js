let email = {},
password = {},
signInButton;


function handleFloatingLabel() {
    console.log('handleFloatingLabel');
    const label = document.querySelectorAll('.c-label_float');
    const input_float= document.querySelectorAll('.c-input');
    input_float.addEventListener('focus', function (){
        if(this.value.length > 0){
        label.classList.add('is-floating');
        }
    });
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

function getDOMElements(){
    email = document.querySelector('.js-input_email');
    password = document.querySelector('.js-input_password');
    signInButton = document.querySelector('.js-sign-in-button');    
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
  getDOMElements();
});
