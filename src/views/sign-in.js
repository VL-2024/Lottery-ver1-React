import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import SignIn3 from '../components/sign-in3'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>SignIn - Lottery ver.1</title>
        <meta property="og:title" content="SignIn - Lottery ver.1" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="sign-in-text10">Главная</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="sign-in-text11">Джекпоты</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="sign-in-text12">Проверка билета</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="sign-in-text13">Лотереи</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="sign-in-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="sign-in-text15">Lotteries</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="sign-in-text16">Games</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="sign-in-text17">Winning Numbers</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="sign-in-text18">Акции</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="sign-in-text19">Регистрация</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-in-text20">Войти</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name4"
        page1Description={
          <Fragment>
            <span className="sign-in-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="sign-in-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="sign-in-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="sign-in-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <SignIn3
        action1={
          <Fragment>
            <span className="sign-in-text25">Войти</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-in-text26">
              Нет аккаунта? Зарегистрируйтесь.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="sign-in-text27">
              Войдите, чтобы начать играть в лотереи, делать спортивные прогнозы
              и отслеживать выигрышные номера.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-in-text28">Вход в аккаунт</span>
          </Fragment>
        }
        rootClassName="sign-in3root-class-name"
      ></SignIn3>
    </div>
  )
}

export default SignIn
