import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LoginForm from '../components/login-form'
import './loginform.css'

const Loginform = (props) => {
  return (
    <div className="loginform-container1">
      <Helmet>
        <title>loginform - Lottery ver.1</title>
        <meta property="og:title" content="loginform - Lottery ver.1" />
      </Helmet>
      <div className="loginform-container2">
        <LoginForm
          text={
            <Fragment>
              <span className="loginform-text1">Номер телефона</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="loginform-text2">
                Мы отправим код подтверждения на указанный номер
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="loginform-text3">Код из СМС</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="loginform-text4">Пароль</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="loginform-text5">Продолжить</span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="loginform-text6">Продолжить</span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="loginform-text7">Войти по СМС</span>
            </Fragment>
          }
          button3={
            <Fragment>
              <span className="loginform-text8">Войти по паролю</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="loginform-text9">Вход в аккаунт</span>
            </Fragment>
          }
          rootClassName="login-formroot-class-name"
        ></LoginForm>
      </div>
    </div>
  )
}

export default Loginform
