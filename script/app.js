function handleFloatingLabel() {}


function handlePasswordSwitcher() {
  console.log('handlePasswordSwitcher');
  const passwordInput = document.querySelector('.c-input');
  const passwordToggle = document.querySelector('.c-toggle-password__checkbox');
  passwordToggle.addEventListener('change', function () {
    if (passwordToggle.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
