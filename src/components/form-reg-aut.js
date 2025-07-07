import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './form-reg-aut.css'

const FormRegAut = (props) => {
  return (
    <div className={`form-reg-aut-container10 ${props.rootClassName} `}>
      <div className="form-reg-aut-container11">
        <div className="form-reg-aut-container12">
          <Script
            html={`  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 420px;
      margin: 40px auto;
      background: #fff;
      padding: 24px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .tabs {
      display: flex;
      margin-bottom: 24px;
    }
    .tab {
      flex: 1;
      text-align: center;
      padding: 12px;
      cursor: pointer;
      font-weight: 600;
      border-bottom: 2px solid transparent;
    }
    .tab.active {
      border-color: #0ea5e9;
      color: #0ea5e9;
    }
    label {
      display: block;
      margin-top: 16px;
      font-weight: 500;
    }
    input {
      width: 100%;
      padding: 10px;
      margin-top: 6px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 14px;
    }
    input[readonly] {
      background-color: #f0f0f0;
      color: #888;
    }
    .button, .link-button {
      margin-top: 20px;
      padding: 12px;
      width: 100%;
      background-color: #0ea5e9;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    }
    .link-button {
      background: none;
      color: #0ea5e9;
      text-decoration: underline;
    }
    .hidden {
      display: none;
    }
    .message {
      font-size: 14px;
      color: #dc2626;
      margin-top: 12px;
    }
  </style>
  <script src="https://unpkg.com/imask"></script>
 
<script>
              (function(){
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
  })()
              </script>`}
          ></Script>
        </div>
      </div>
      <div className="form-reg-aut-container13 container">
        <div className="tabs">
          <div onclick="switchTab('register')" className="tab active">
            <span>
              {props.text5 ?? (
                <Fragment>
                  <span className="form-reg-aut-text39">Регистрация</span>
                </Fragment>
              )}
            </span>
          </div>
          <div onclick="switchTab('login')" className="tab">
            <span>
              {props.text6 ?? (
                <Fragment>
                  <span className="form-reg-aut-text50">Войти</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <form id="registerForm" onsubmit="return validateRegisterForm()">
          <div id="registerFields">
            <label>
              {props.text7 ?? (
                <Fragment>
                  <span className="form-reg-aut-text36">📱 Телефон</span>
                </Fragment>
              )}
            </label>
            <input
              type="tel"
              id="regPhone"
              required
              placeholder={props.textinputPlaceholder1}
              className="input"
            />
            <label>
              {props.text8 ?? (
                <Fragment>
                  <span className="form-reg-aut-text53">Email</span>
                </Fragment>
              )}
            </label>
            <input
              type="email"
              id="regEmail"
              title="Введите корректный email"
              pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
              required
              className="input"
            />
            <label>
              {props.text9 ?? (
                <Fragment>
                  <span className="form-reg-aut-text41">Имя</span>
                </Fragment>
              )}
            </label>
            <input type="text" id="regName" required className="input" />
            <label>
              {props.text10 ?? (
                <Fragment>
                  <span className="form-reg-aut-text49">Дата рождения</span>
                </Fragment>
              )}
            </label>
            <input type="date" id="regDob" required className="input" />
            <label>
              {props.text11 ?? (
                <Fragment>
                  <span className="form-reg-aut-text44">Пароль</span>
                </Fragment>
              )}
            </label>
            <input
              type="password"
              id="regPassword"
              required
              className="input"
            />
            <label>
              {props.text12 ?? (
                <Fragment>
                  <span className="form-reg-aut-text48">Повторить пароль</span>
                </Fragment>
              )}
            </label>
            <input
              type="password"
              id="regPasswordRepeat"
              required
              className="input"
            />
            <div id="regError" className="message"></div>
            <button type="button" onclick="sendSMS()" className="button">
              <span>
                {props.button4 ?? (
                  <Fragment>
                    <span className="form-reg-aut-text37">Отправить СМС</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div id="smsVerification" className="hidden">
            <label>
              {props.text13 ?? (
                <Fragment>
                  <span className="form-reg-aut-text40">Код из СМС</span>
                </Fragment>
              )}
            </label>
            <input
              type="text"
              id="smsCode"
              required
              maxlength="6"
              className="input"
            />
            <div id="smsTimer" className="message"></div>
            <div id="smsError" className="message"></div>
            <button type="submit" className="button">
              <span>
                {props.button5 ?? (
                  <Fragment>
                    <span className="form-reg-aut-text34">Регистрация</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </form>
        <form id="loginForm" className="hidden">
          <label>
            {props.text ?? (
              <Fragment>
                <span className="form-reg-aut-text38">📱 Телефон</span>
              </Fragment>
            )}
          </label>
          <input
            type="tel"
            id="loginPhone"
            required
            placeholder={props.textinputPlaceholder}
            className="input"
          />
          <label>
            {props.text1 ?? (
              <Fragment>
                <span className="form-reg-aut-text35">Пароль</span>
              </Fragment>
            )}
          </label>
          <input
            type="password"
            id="loginPassword"
            required
            className="input"
          />
          <button type="submit" className="button">
            <span>
              {props.button1 ?? (
                <Fragment>
                  <span className="form-reg-aut-text54">Войти</span>
                </Fragment>
              )}
            </span>
          </button>
          <button
            type="button"
            onclick="showRecovery()"
            className="link-button button"
          >
            <span>
              {props.button2 ?? (
                <Fragment>
                  <span className="form-reg-aut-text52">Забыл пароль</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
        <form id="recoveryForm" className="hidden">
          <h3>
            {props.heading ?? (
              <Fragment>
                <span className="form-reg-aut-text55">
                  Восстановление пароля
                </span>
              </Fragment>
            )}
          </h3>
          <label>
            {props.text2 ?? (
              <Fragment>
                <span className="form-reg-aut-text47">📱 Телефон</span>
              </Fragment>
            )}
          </label>
          <input type="tel" id="recPhone" readOnly className="input" />
          <label>
            {props.text3 ?? (
              <Fragment>
                <span className="form-reg-aut-text42">Имя</span>
              </Fragment>
            )}
          </label>
          <input type="text" id="recName" required className="input" />
          <label>
            {props.text4 ?? (
              <Fragment>
                <span className="form-reg-aut-text51">Дата рождения</span>
              </Fragment>
            )}
          </label>
          <input type="date" id="recDob" required className="input" />
          <div className="message">
            <span>
              {props.text14 ?? (
                <Fragment>
                  <span className="form-reg-aut-text43">
                    Ссылка для восстановления пароля будет отправлена на e-mail:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </span>
            <b>
              {props.text15 ?? (
                <Fragment>
                  <span className="form-reg-aut-text45">ivan***@mail.ru</span>
                </Fragment>
              )}
            </b>
          </div>
          <button type="submit" className="button">
            <span>
              {props.button3 ?? (
                <Fragment>
                  <span className="form-reg-aut-text33">
                    Восстановить пароль
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
        <button className="form-reg-aut-button6 button">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="form-reg-aut-text46">
                  Регистрация/Войти с ЕСА
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

FormRegAut.defaultProps = {
  button3: undefined,
  button5: undefined,
  text1: undefined,
  text7: undefined,
  button4: undefined,
  text: undefined,
  textinputPlaceholder: '+7 (___) ___-__-__',
  text5: undefined,
  text13: undefined,
  text9: undefined,
  text3: undefined,
  text14: undefined,
  text11: undefined,
  text15: undefined,
  button: undefined,
  text2: undefined,
  text12: undefined,
  text10: undefined,
  text6: undefined,
  text4: undefined,
  button2: undefined,
  rootClassName: '',
  text8: undefined,
  button1: undefined,
  textinputPlaceholder1: '+7 (___) ___-__-__',
  heading: undefined,
}

FormRegAut.propTypes = {
  button3: PropTypes.element,
  button5: PropTypes.element,
  text1: PropTypes.element,
  text7: PropTypes.element,
  button4: PropTypes.element,
  text: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  text5: PropTypes.element,
  text13: PropTypes.element,
  text9: PropTypes.element,
  text3: PropTypes.element,
  text14: PropTypes.element,
  text11: PropTypes.element,
  text15: PropTypes.element,
  button: PropTypes.element,
  text2: PropTypes.element,
  text12: PropTypes.element,
  text10: PropTypes.element,
  text6: PropTypes.element,
  text4: PropTypes.element,
  button2: PropTypes.element,
  rootClassName: PropTypes.string,
  text8: PropTypes.element,
  button1: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  heading: PropTypes.element,
}

export default FormRegAut
