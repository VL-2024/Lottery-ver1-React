import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LogINVer1ForTestPage from '../components/log-in-ver1-for-test-page'
import './autorisation-page.css'

const AutorisationPage = (props) => {
  return (
    <div className="autorisation-page-container">
      <Helmet>
        <title>AutorisationPage - Lottery ver.1</title>
        <meta property="og:title" content="AutorisationPage - Lottery ver.1" />
      </Helmet>
      <LogINVer1ForTestPage
        text={
          <Fragment>
            <span className="autorisation-page-text1">Номер телефона</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="autorisation-page-text2">
              Мы отправим код подтверждения на указанный номер.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="autorisation-page-text3">Код из СМС</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="autorisation-page-text4">Пароль</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="autorisation-page-text5">Войти по СМС</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="autorisation-page-text6">Войти по паролю</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="autorisation-page-text7">Продолжить</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="autorisation-page-text8">Продолжить</span>
          </Fragment>
        }
        heading={
          <Fragment>
            <span className="autorisation-page-text9">Вход в аккаунт</span>
          </Fragment>
        }
      ></LogINVer1ForTestPage>
    </div>
  )
}

export default AutorisationPage
