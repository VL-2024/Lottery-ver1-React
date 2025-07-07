import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'

import SignIn3 from './sign-in3'
import './login-modal.css'

const LoginModal = (props) => {
  return (
    <div id="LoginModal" className="login-modal-login-modal">
      <div className="modal-wrapper">
        <SignIn3
          action1={
            <Fragment>
              <span className="login-modal-text1">Sign In</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="login-modal-text2">Forgot Password?</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="login-modal-text3">
                Sign in to your account to start playing lottery games, making
                sports predictions, and tracking winning numbers.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="login-modal-text4">
                Welcome back! Sign in to your account
              </span>
            </Fragment>
          }
        ></SignIn3>
      </div>
      <div>
        <div className="login-modal-container2">
          <Script
            html={`<style>
  body {
    overscroll-behavior: contain;
    touch-action: manipulation;
    margin: 0;
  }

  /* #LoginModal — внешний контейнер */
  #LoginModal {
    display: flex;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    box-sizing: border-box;
    flex-direction: column;
  }

  /* ModalWrapper — внутренняя обёртка */
  .modal-wrapper {
    background: white;
    inset: 0;
    width: 90%;
    max-width: 620px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 1rem;
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .modal-wrapper p {
    margin-bottom: 1rem;
  }

  .close-login {
    background: crimson;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
  }

  .login-button {
    margin: 2rem;
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #ccc;
  font-size: 14px;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 0.75rem;
  cursor: pointer;
  background-color: #f3f4f6;
  transition: 0.3s;
}

.tab.active {
  background-color: #10b981;
  color: white;
  font-weight: bold;
}

.tab-content {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
}

.tab-content.active {
  display: flex;
}

.input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.button {
  padding: 0.75rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: #dc2626;
}

</style>


<script>
  function setupModalScript() {
    const modal = document.getElementById("LoginModal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".close-login");
    const wrapper = modal.querySelector(".modal-wrapper");
    const loginButtons = document.querySelectorAll(".login-button");

    loginButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });

    closeBtn?.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Закрытие при клике вне модального окна
    modal.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        modal.style.display = "none";
      }
    });
  }

  setTimeout(setupModalScript, 100);
  let smsAttempts = 0;
    let smsTimeout;

    const phoneMask = IMask(document.getElementById('regPhone'), {
      mask: '+{7} (000) 000-00-00'
    });

    IMask(document.getElementById('loginPhone'), {
      mask: '+{7} (000) 000-00-00'
    });

    function switchTab(tab) {
      document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
      document.getElementById('registerForm').classList.add('hidden');
      document.getElementById('loginForm').classList.add('hidden');
      document.getElementById('recoveryForm').classList.add('hidden');

      if (tab === 'register') {
        document.querySelectorAll('.tab')[0].classList.add('active');
        document.getElementById('registerForm').classList.remove('hidden');
      } else {
        document.querySelectorAll('.tab')[1].classList.add('active');
        document.getElementById('loginForm').classList.remove('hidden');
      }
    }

    function showRecovery() {
      const phone = document.getElementById('loginPhone').value;
      document.getElementById('loginForm').classList.add('hidden');
      document.getElementById('recoveryForm').classList.remove('hidden');
      document.getElementById('recPhone').value = phone;
    }

    function sendSMS() {
      const phone = document.getElementById('regPhone');
      const email = document.getElementById('regEmail');
      const name = document.getElementById('regName');
      const dob = document.getElementById('regDob');
      const password = document.getElementById('regPassword');
      const repeat = document.getElementById('regPasswordRepeat');
      const regError = document.getElementById('regError');

      regError.textContent = '';

      if (!phone.value || phone.value.length < 18) {
        regError.textContent = 'Введите корректный номер телефона';
        return;
      }
      if (!email.checkValidity()) {
        regError.textContent = 'Введите корректный email';
        return;
      }
      if (!name.value || !dob.value || !password.value || !repeat.value) {
        regError.textContent = 'Пожалуйста, заполните все поля';
        return;
      }
      if (password.value !== repeat.value) {
        regError.textContent = 'Пароли не совпадают';
        return;
      }

      if (smsAttempts >= 3) {
        regError.textContent = 'Превышено количество попыток. Попробуйте позже.';
        return;
      }

      smsAttempts++;
      document.getElementById('smsVerification').classList.remove('hidden');
      document.getElementById('registerFields').classList.add('hidden');

      let timeLeft = 180;
      const timer = document.getElementById('smsTimer');
      timer.textContent = \`Можно повторно отправить через \${timeLeft} сек.\`;
      smsTimeout = setInterval(() => {
        timeLeft--;
        timer.textContent = \`Можно повторно отправить через \${timeLeft} сек.\`;
        if (timeLeft <= 0) clearInterval(smsTimeout);
      }, 1000);
    }

    function validateRegisterForm() {
      const code = document.getElementById('smsCode');
      const smsError = document.getElementById('smsError');

      smsError.textContent = '';

      if (!code.value) {
        smsError.textContent = 'Введите код из СМС';
        return false;
      }

      return true;
    }
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
