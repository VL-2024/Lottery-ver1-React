import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './form-registration.css'

const FormRegistration = (props) => {
  return (
    <div className={`form-registration-container1 ${props.rootClassName} `}>
      <div className="form-registration-container2">
        <div className="form-registration-container3">
          <Script
            html={`<style>
  .register-wrapper {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .register-container {
    background: #fff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
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

  button {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #10b981;
    color: white;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #059669;
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

<div class="register-wrapper">
  <div class="register-container">
    <h2>Регистрация</h2>

    <label for="name">Имя</label>
    <input type="text" id="name" placeholder="Ваше имя">

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="you@example.com">

    <label for="phone">Телефон</label>
    <input type="tel" id="reg-phone" placeholder="+7 (___) ___-__-__">

    <label for="password">Пароль</label>
    <input type="password" id="reg-password" placeholder="Введите пароль" minlength="6">

    <label for="confirm">Повторите пароль</label>
    <input type="password" id="confirm-password" placeholder="Повторите пароль" minlength="6">

    <button onclick="handleRegister()">Зарегистрироваться</button>

    <div id="reg-message" class="success-message" style="display: none;"></div>
  </div>
</div>

<script>
  function handleRegister() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const pass = document.getElementById('reg-password').value;
    const confirm = document.getElementById('confirm-password').value;
    const message = document.getElementById('reg-message');

    if (!name || !email || !phone || !pass || !confirm) {
      showRegMessage('Пожалуйста, заполните все поля', false);
      return;
    }

    if (pass !== confirm) {
      showRegMessage('Пароли не совпадают', false);
      return;
    }

    if (pass.length < 6) {
      showRegMessage('Пароль слишком короткий', false);
      return;
    }

    showRegMessage('✅ Регистрация прошла успешно!');
  }

  function showRegMessage(text, success = true) {
    const el = document.getElementById('reg-message');
    el.style.display = 'block';
    el.textContent = text;
    el.style.backgroundColor = success ? '#e0fce0' : '#ffe0e0';
    el.style.borderColor = success ? '#6dd36d' : '#ff8c8c';
    el.style.color = success ? '#2e7d32' : '#c62828';
  }
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

FormRegistration.defaultProps = {
  rootClassName: '',
}

FormRegistration.propTypes = {
  rootClassName: PropTypes.string,
}

export default FormRegistration
