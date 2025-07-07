import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './form-autorisation.css'

const FormAutorisation = (props) => {
  return (
    <div className={`form-autorisation-container1 ${props.rootClassName} `}>
      <div className="form-autorisation-container2">
        <div className="form-autorisation-container3">
          <Script
            html={`<style>
  * { box-sizing: border-box; }

  .login-wrapper {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .login-container {
    background: #fff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    max-width: 400px;
    width: 100%;
  }

  h2 {
    text-align: center;
    margin-bottom: 24px;
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .note {
    font-size: 12px;
    color: #666;
    margin-bottom: 24px;
  }

  button {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    margin-bottom: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: background-color 0.2s ease;
  }

  .sms-btn {
    background-color: #3b82f6;
    color: white;
  }

  .sms-btn:hover {
    background-color: #2563eb;
  }

  .password-btn {
    background-color: white;
    border: 1px solid #ccc;
    color: #333;
  }

  .password-btn:hover {
    background-color: #f2f2f2;
  }

  .hidden {
    display: none;
  }

  .spinner {
    width: 18px;
    height: 18px;
    border: 3px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .success-message {
    background: #e0fce0;
    border: 1px solid #6dd36d;
    color: #2e7d32;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }
</style>

<div class="login-wrapper">
  <div class="login-container">
    <h2>Вход в аккаунт</h2>

    <label for="phone">Номер телефона</label>
    <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" maxlength="18">
    <div class="note">Мы отправим код подтверждения на указанный номер.</div>

    <div id="smsCodeBlock" class="hidden">
      <label for="sms-code">Код из СМС</label>
      <input type="text" id="sms-code" placeholder="____" maxlength="4" inputmode="numeric" pattern="\d*">
      <button class="sms-btn" onclick="verifyCode()">Продолжить</button>
    </div>

    <div id="passwordBlock" class="hidden">
      <label for="password">Пароль</label>
      <input type="password" id="password" placeholder="Введите пароль" minlength="6">
      <button class="sms-btn" onclick="verifyPassword()">Продолжить</button>
    </div>

    <button class="sms-btn" id="smsBtn" onclick="handleSmsLogin()">
      <span id="smsBtnText">Войти по СМС</span>
    </button>

    <button class="password-btn" onclick="handlePasswordLogin()">Войти по паролю</button>

    <div id="message" class="success-message hidden"></div>
  </div>
</div>

<script>
  const phoneInput = document.getElementById('phone');
  const smsCodeBlock = document.getElementById('smsCodeBlock');
  const passwordBlock = document.getElementById('passwordBlock');
  const smsCodeInput = document.getElementById('sms-code');
  const passwordInput = document.getElementById('password');
  const smsBtn = document.getElementById('smsBtn');
  const smsBtnText = document.getElementById('smsBtnText');
  const message = document.getElementById('message');

  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '').substring(1);
    let formatted = '+7 (';

    if (value.length > 0) formatted += value.substring(0, 3);
    if (value.length >= 4) formatted += ') ' + value.substring(3, 6);
    if (value.length >= 7) formatted += '-' + value.substring(6, 8);
    if (value.length >= 9) formatted += '-' + value.substring(8, 10);

    e.target.value = formatted;
  });

  function handleSmsLogin() {
    const digits = phoneInput.value.replace(/\D/g, '');
    if (digits.length !== 11) {
      showMessage('Введите корректный номер телефона', false);
      return;
    }

    smsCodeBlock.classList.remove('hidden');
    passwordBlock.classList.add('hidden');
    smsBtn.disabled = true;
    smsBtnText.innerHTML = \`<div class="spinner"></div>\`;

    setTimeout(() => {
      smsBtn.disabled = false;
      smsBtnText.textContent = 'Войти по СМС';
      showMessage('Код отправлен на ' + phoneInput.value, true);
    }, 1500);
  }

  function handlePasswordLogin() {
    passwordBlock.classList.remove('hidden');
    smsCodeBlock.classList.add('hidden');
    message.classList.add('hidden');
  }

  function verifyCode() {
    const code = smsCodeInput.value.trim();
    if (!/^\d{4}\$/.test(code)) {
      showMessage('Введите корректный 4-значный код', false);
      return;
    }
    showMessage('✅ Успешный вход по СМС!', true);
  }

  function verifyPassword() {
    const password = passwordInput.value;
    if (password.length < 6) {
      showMessage('Пароль должен содержать минимум 6 символов', false);
      return;
    }
    showMessage('✅ Успешный вход по паролю!', true);
  }

  function showMessage(text, success = true) {
    message.textContent = text;
    message.classList.remove('hidden');
    message.style.backgroundColor = success ? '#e0fce0' : '#ffe0e0';
    message.style.borderColor = success ? '#6dd36d' : '#ff8c8c';
    message.style.color = success ? '#2e7d32' : '#c62828';
  }

  smsCodeInput.addEventListener('input', function () {
    if (this.value.length >= 4) this.blur();
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

FormAutorisation.defaultProps = {
  rootClassName: '',
}

FormAutorisation.propTypes = {
  rootClassName: PropTypes.string,
}

export default FormAutorisation
