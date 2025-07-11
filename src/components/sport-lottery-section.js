import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import TestSportCard from './test-sport-card'
import './sport-lottery-section.css'

const SportLotterySection = (props) => {
  return (
    <div
      id="sportlottery"
      className={`sport-lottery-section-container1 ${props.rootClassName} `}
    >
      <div className="sport-lottery-section-container2">
        <h1 className="sport-lottery-section-text10 thq-heading-2">
          {props.heading ?? (
            <Fragment>
              <span className="sport-lottery-section-text75">
                Спортивные лотереи
              </span>
            </Fragment>
          )}
        </h1>
        <span className="sport-lottery-section-text11">
          {props.text ?? (
            <Fragment>
              <span className="sport-lottery-section-text74">
                Прогнозируй спорт — выигрывай как в лотерее
              </span>
            </Fragment>
          )}
        </span>
        <span className="sport-lottery-section-text12">
          {props.text1 ?? (
            <Fragment>
              <span className="sport-lottery-section-text73">
                Выбери исходы спортивных матчей, используй интуицию и знание
                спорта, чтобы забрать главный приз
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="sport-lottery-section-container3">
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-lottery-section-text13">Футбол</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-lottery-section-text14">8</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="sport-lottery-section-text15">
                Можно выбрать от одного до трех исходов в каждом матче.
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-lottery-section-text16">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-lottery-section-text17">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-lottery-section-text18">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="sport-lottery-section-text19">8 х 100 KGS</span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-lottery-section-text20">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-lottery-section-text21">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-lottery-section-text22">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-lottery-section-text23">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-lottery-section-text24">
                fthfthfhfh fh t t ytyy eryt ee er 
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-lottery-section-text25">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-lottery-section-text26">
                Кол-во вариантов
              </span>
            </Fragment>
          }
          text23111={
            <Fragment>
              <span className="sport-lottery-section-text27">Цена билета</span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-lottery-section-text28">Теннис</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-lottery-section-text29">8</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="sport-lottery-section-text30">
                Можно выбрать от одного до трех исходов в каждом матче.
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-lottery-section-text31">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-lottery-section-text32">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-lottery-section-text33">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="sport-lottery-section-text34">8 х 100 KGS</span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-lottery-section-text35">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-lottery-section-text36">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-lottery-section-text37">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-lottery-section-text38">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-lottery-section-text39">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-lottery-section-text40">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-lottery-section-text41">
                Кол-во вариантов
              </span>
            </Fragment>
          }
          text23111={
            <Fragment>
              <span className="sport-lottery-section-text42">Цена билета</span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name1"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-lottery-section-text43">Баскетбол</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-lottery-section-text44">8</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="sport-lottery-section-text45">
                Можно выбрать от одного до трех исходов в каждом матче.
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-lottery-section-text46">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-lottery-section-text47">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-lottery-section-text48">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="sport-lottery-section-text49">8 х 100 KGS</span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-lottery-section-text50">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-lottery-section-text51">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-lottery-section-text52">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-lottery-section-text53">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-lottery-section-text54">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-lottery-section-text55">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-lottery-section-text56">
                Кол-во вариантов
              </span>
            </Fragment>
          }
          text23111={
            <Fragment>
              <span className="sport-lottery-section-text57">Цена билета</span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name2"
        ></TestSportCard>
        <TestSportCard
          text2={
            <Fragment>
              <span className="sport-lottery-section-text58">Хоккей</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sport-lottery-section-text59">8</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="sport-lottery-section-text60">
                Можно выбрать от одного до трех исходов в каждом матче.
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="sport-lottery-section-text61">
                Сделать прогноз
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="sport-lottery-section-text62">1</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="sport-lottery-section-text63">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="sport-lottery-section-text64">8 х 100 KGS</span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="sport-lottery-section-text65">Х</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="sport-lottery-section-text66">
                Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
              </span>
            </Fragment>
          }
          text232={
            <Fragment>
              <span className="sport-lottery-section-text67">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text233={
            <Fragment>
              <span className="sport-lottery-section-text68">
                VfB Stuttgart - Bayern Munich 21:30
              </span>
            </Fragment>
          }
          text234={
            <Fragment>
              <span className="sport-lottery-section-text69">
                Barbora Krejcikova - Alexandra Eala 15:30
              </span>
            </Fragment>
          }
          text2111={
            <Fragment>
              <span className="sport-lottery-section-text70">2</span>
            </Fragment>
          }
          text2311={
            <Fragment>
              <span className="sport-lottery-section-text71">
                Кол-во вариантов
              </span>
            </Fragment>
          }
          text23111={
            <Fragment>
              <span className="sport-lottery-section-text72">Цена билета</span>
            </Fragment>
          }
          rootClassName="test-sport-cardroot-class-name11"
        ></TestSportCard>
      </div>
    </div>
  )
}

SportLotterySection.defaultProps = {
  text1: undefined,
  text: undefined,
  heading: undefined,
  rootClassName: '',
}

SportLotterySection.propTypes = {
  text1: PropTypes.element,
  text: PropTypes.element,
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default SportLotterySection
