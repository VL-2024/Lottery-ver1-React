import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './login-form.css'

const LoginForm = (props) => {
  return (
    <div className={`login-form-container1 ${props.rootClassName} `}>
      <div className="login-form-container2 login-container">
        <h1 className="login-form-text10">
          {props.heading ?? (
            <Fragment>
              <span className="login-form-text21">Вход в аккаунт</span>
            </Fragment>
          )}
        </h1>
        <label className="login-form-text11">
          {props.text ?? (
            <Fragment>
              <span className="login-form-text24">Номер телефона</span>
            </Fragment>
          )}
        </label>
        <input
          type="tel"
          id="phone"
          required
          maxlength={18}
          placeholder={props.textinputPlaceholder}
          className="login-form-textinput1 input"
        />
        <span className="login-form-text12">
          {props.text1 ?? (
            <Fragment>
              <span className="login-form-text23">
                Мы отправим код подтверждения на указанный номер
              </span>
            </Fragment>
          )}
        </span>
        <div id="smsCodeBlock" className="login-form-sms-code-block">
          <label>
            {props.text2 ?? (
              <Fragment>
                <span className="login-form-text19">Код из СМС</span>
              </Fragment>
            )}
          </label>
          <input
            type="tel"
            id="sms-code"
            pattern="\\d"
            required
            maxlength={4}
            minlength={4}
            placeholder={props.textinputPlaceholder1}
            className="login-form-textinput2 input"
          />
          <button
            id="smsCodeBtn"
            type="button"
            className="login-form-button1 sms-btn button"
          >
            <span className="login-form-text14">
              {props.button ?? (
                <Fragment>
                  <span className="login-form-text26">Продолжить</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div id="passwordBlock" className="login-form-password-block">
          <label className="login-form-text15">
            {props.text3 ?? (
              <Fragment>
                <span className="login-form-text20">Пароль</span>
              </Fragment>
            )}
          </label>
          <input
            type="password"
            id="password"
            minlength={6}
            placeholder={props.textinputPlaceholder2}
            className="login-form-textinput3 input"
          />
          <button
            id="passwordBtn"
            type="button"
            className="login-form-button2 sms-btn button"
          >
            <span>
              {props.button1 ?? (
                <Fragment>
                  <span className="login-form-text27">Продолжить</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <button
          id="smsBtn"
          type="button"
          className="login-form-button3 sms-btn button"
        >
          <span id="smsBtnText">
            {props.button2 ?? (
              <Fragment>
                <span className="login-form-text25">Войти по СМС</span>
              </Fragment>
            )}
          </span>
        </button>
        <button
          id="passwordLoginBtn"
          type="button"
          className="login-form-button4 button password-btn"
        >
          <span>
            {props.button3 ?? (
              <Fragment>
                <span className="login-form-text22">Войти по паролю</span>
              </Fragment>
            )}
          </span>
        </button>
        <div
          id="message"
          className="login-form-container3 success-message hidden"
        ></div>
      </div>
    </div>
  )
}

LoginForm.defaultProps = {
  text2: undefined,
  text3: undefined,
  heading: undefined,
  button3: undefined,
  text1: undefined,
  textinputPlaceholder: '+996 (___) ___-__-__',
  textinputPlaceholder2: 'Пароль',
  text: undefined,
  textinputPlaceholder1: 'Код из СМС',
  button2: undefined,
  rootClassName: '',
  button: undefined,
  button1: undefined,
}

LoginForm.propTypes = {
  text2: PropTypes.element,
  text3: PropTypes.element,
  heading: PropTypes.element,
  button3: PropTypes.element,
  text1: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  text: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  button2: PropTypes.element,
  rootClassName: PropTypes.string,
  button: PropTypes.element,
  button1: PropTypes.element,
}

export default LoginForm
