import React, { Fragment } from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import './log-in-ver1-for-test-page.css'

const LogINVer1ForTestPage = (props) => {
  return (
    <div
      className={`log-in-ver1-for-test-page-container1 login-container ${props.rootClassName} `}
    >
      <h2 className="log-in-ver1-for-test-page-text10">
        {props.heading ?? (
          <Fragment>
            <span className="log-in-ver1-for-test-page-text24">
              Вход в аккаунт
            </span>
          </Fragment>
        )}
      </h2>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="log-in-ver1-for-test-page-icon1 close-login"
      >
        <path
          d="M16 12H4m12 0l-4 4m4-4l-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <label htmlFor="phone">
        {props.text ?? (
          <Fragment>
            <span className="log-in-ver1-for-test-page-text19">
              Номер телефона
            </span>
          </Fragment>
        )}
      </label>
      <input
        type="tel"
        id="phone"
        maxlength="18"
        placeholder={props.textinputPlaceholder}
        className="log-in-ver1-for-test-page-textinput1 input"
      />
      <div className="log-in-ver1-for-test-page-container2 note">
        <span className="log-in-ver1-for-test-page-text12">
          {props.text1 ?? (
            <Fragment>
              <span className="log-in-ver1-for-test-page-text21">
                Мы отправим код подтверждения на указанный номер.
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div id="smsCodeBlock" className="hidden">
        <label htmlFor="sms-code">
          {props.text2 ?? (
            <Fragment>
              <span className="log-in-ver1-for-test-page-text26">
                Код из СМС
              </span>
            </Fragment>
          )}
        </label>
        <input
          type="text"
          id="sms-code"
          pattern="\\d*"
          inputmode="numeric"
          maxlength="4"
          placeholder={props.textinputPlaceholder1}
          className="log-in-ver1-for-test-page-textinput2 input"
        />
        <button
          onclick="verifyCode()"
          className="log-in-ver1-for-test-page-button1 sms-btn button"
        >
          <span>
            {props.button1 ?? (
              <Fragment>
                <span className="log-in-ver1-for-test-page-text23">
                  Продолжить
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <div id="passwordBlock" className="hidden">
        <label htmlFor="password">
          {props.text3 ?? (
            <Fragment>
              <span className="log-in-ver1-for-test-page-text22">Пароль</span>
            </Fragment>
          )}
        </label>
        <input
          type="password"
          id="password"
          minlength="6"
          placeholder={props.textinputPlaceholder2}
          className="log-in-ver1-for-test-page-textinput3 input"
        />
        <button
          onclick="verifyPassword()"
          className="log-in-ver1-for-test-page-button2 sms-btn button"
        >
          <span>
            {props.button2 ?? (
              <Fragment>
                <span className="log-in-ver1-for-test-page-text27">
                  Продолжить
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <button
        id="smsBtn"
        onclick="handleSmsLogin()"
        className="log-in-ver1-for-test-page-button3 sms-btn button"
      >
        <span id="smsBtnText">
          {props.text4 ?? (
            <Fragment>
              <span className="log-in-ver1-for-test-page-text25">
                Войти по СМС
              </span>
            </Fragment>
          )}
        </span>
      </button>
      <button
        onclick="handlePasswordLogin()"
        className="log-in-ver1-for-test-page-button4 button password-btn"
      >
        <span>
          {props.button ?? (
            <Fragment>
              <span className="log-in-ver1-for-test-page-text20">
                Войти по паролю
              </span>
            </Fragment>
          )}
        </span>
      </button>
      <span>
        <DateTimePrimitive
          format="DD/MM/YYYY"
          date="Mon Jun 23 2025 22:38:05 GMT+0300 (Москва, стандартное время)"
        ></DateTimePrimitive>
      </span>
      <div
        id="message"
        className="log-in-ver1-for-test-page-container5 success-message hidden"
      ></div>
    </div>
  )
}

LogINVer1ForTestPage.defaultProps = {
  textinputPlaceholder: '+7 (___) ___-__-__',
  textinputPlaceholder2: 'Введите пароль',
  text: undefined,
  button: undefined,
  text1: undefined,
  text3: undefined,
  button1: undefined,
  rootClassName: '',
  heading: undefined,
  text4: undefined,
  text2: undefined,
  textinputPlaceholder1: '____',
  button2: undefined,
}

LogINVer1ForTestPage.propTypes = {
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  text: PropTypes.element,
  button: PropTypes.element,
  text1: PropTypes.element,
  text3: PropTypes.element,
  button1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  text4: PropTypes.element,
  text2: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  button2: PropTypes.element,
}

export default LogINVer1ForTestPage
