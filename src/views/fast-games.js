import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import './fast-games.css'

const FastGames = (props) => {
  return (
    <div className="fast-games-container1">
      <Helmet>
        <title>FastGames - Lottery ver.1</title>
        <meta property="og:title" content="FastGames - Lottery ver.1" />
      </Helmet>
      <div className="fast-games-container2">
        <Navbar8
          link1={
            <Fragment>
              <span className="fast-games-text10">Главная</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="fast-games-text11">Джекпоты</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="fast-games-text12">Проверка билета</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="fast-games-text13">Лотереи</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="fast-games-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="fast-games-text15">Lotteries</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="fast-games-text16">Games</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="fast-games-text17">Winning Numbers</span>
            </Fragment>
          }
          link31={
            <Fragment>
              <span className="fast-games-text18">Акции</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="fast-games-text19">Регистрация</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="fast-games-text20">Войти</span>
            </Fragment>
          }
          rootClassName="navbar8root-class-name3"
          page1Description={
            <Fragment>
              <span className="fast-games-text21">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="fast-games-text22">Page Two Description</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="fast-games-text23">Page Three Description</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="fast-games-text24">Page Four Description</span>
            </Fragment>
          }
        ></Navbar8>
      </div>
      <div className="fast-games-container3">
        <div className="fast-games-container4">
          <Script
            html={`<iframe 
  src="https://staging.splt.eu/simulations/games#/fg" 
  width="100%" 
  height="800" 
  style="border: none;">
</iframe>

`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default FastGames
