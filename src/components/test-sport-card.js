import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './test-sport-card.css'

const TestSportCard = (props) => {
  return (
    <div className={`test-sport-card-container ${props.rootClassName} `}>
      <div className="test-sport-card-container-event">
        <div className="test-sport-card-title-event">
          <span className="test-sport-card-text10">
            {props.text2 ?? (
              <Fragment>
                <span className="test-sport-card-text31">Матч</span>
              </Fragment>
            )}
          </span>
          <span className="test-sport-card-text11">
            {props.text21 ?? (
              <Fragment>
                <span className="test-sport-card-text28">1</span>
              </Fragment>
            )}
          </span>
          <span className="test-sport-card-text12">
            {props.text211 ?? (
              <Fragment>
                <span className="test-sport-card-text39">Х</span>
              </Fragment>
            )}
          </span>
          <span className="test-sport-card-text13">
            {props.text2111 ?? (
              <Fragment>
                <span className="test-sport-card-text25">2</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="test-sport-card-event1">
          <span className="test-sport-card-text14">
            {props.text23 ?? (
              <Fragment>
                <span className="test-sport-card-text34">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            )}
          </span>
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox10 thq-checkbox"
          />
          <input
            type="checkbox"
            className="test-sport-card-checkbox11 thq-checkbox"
          />
          <input
            type="checkbox"
            className="test-sport-card-checkbox12 thq-checkbox"
          />
        </div>
        <div className="test-sport-card-event2">
          <span className="test-sport-card-text15">
            {props.text234 ?? (
              <Fragment>
                <span className="test-sport-card-text38">
                  Barbora Krejcikova - Alexandra Eala 15:30
                </span>
              </Fragment>
            )}
          </span>
          <input
            type="checkbox"
            className="test-sport-card-checkbox13 thq-checkbox"
          />
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox14 thq-checkbox"
          />
          <input
            type="checkbox"
            className="test-sport-card-checkbox15 thq-checkbox"
          />
        </div>
        <div className="test-sport-card-event3">
          <span className="test-sport-card-text16">
            {props.text233 ?? (
              <Fragment>
                <span className="test-sport-card-text27">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            )}
          </span>
          <input
            type="checkbox"
            className="test-sport-card-checkbox16 thq-checkbox"
          />
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox17 thq-checkbox"
          />
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox18 thq-checkbox"
          />
        </div>
        <div className="test-sport-card-event4">
          <span className="test-sport-card-text17">
            {props.text232 ?? (
              <Fragment>
                <span className="test-sport-card-text26">
                  VfB Stuttgart - Bayern Munich 21:30
                </span>
              </Fragment>
            )}
          </span>
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox19 thq-checkbox"
          />
          <input
            type="checkbox"
            className="test-sport-card-checkbox20 thq-checkbox"
          />
          <input
            type="checkbox"
            className="test-sport-card-checkbox21 thq-checkbox"
          />
        </div>
        <div className="test-sport-card-event5">
          <span className="test-sport-card-text18">
            {props.text231 ?? (
              <Fragment>
                <span className="test-sport-card-text30">
                  Paris Saint-Germain - Bayern Munich 19:00 05.07.2025
                </span>
              </Fragment>
            )}
          </span>
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox22 thq-checkbox"
          />
          <input
            type="checkbox"
            className="test-sport-card-checkbox23 thq-checkbox"
          />
          <input
            type="checkbox"
            checked
            className="test-sport-card-checkbox24 thq-checkbox"
          />
        </div>
        <div className="test-sport-card-container-button">
          <span className="test-sport-card-text19">
            {props.text5 ?? (
              <Fragment>
                <span className="test-sport-card-text37">
                  Можно выбрать от одного до трех исходов в каждом матче.
                </span>
              </Fragment>
            )}
          </span>
          <div className="test-sport-card-price1">
            <span className="test-sport-card-text20">
              {props.text2311 ?? (
                <Fragment>
                  <span className="test-sport-card-text32">
                    Кол-во вариантов
                  </span>
                </Fragment>
              )}
            </span>
            <span className="test-sport-card-text21">
              {props.text4 ?? (
                <Fragment>
                  <span className="test-sport-card-text29">8</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="test-sport-card-price2">
            <span className="test-sport-card-text22">
              {props.text23111 ?? (
                <Fragment>
                  <span className="test-sport-card-text36">Цена билета</span>
                </Fragment>
              )}
            </span>
            <span className="test-sport-card-text23">
              {props.text41 ?? (
                <Fragment>
                  <span className="test-sport-card-text33">8 х 100 KGS</span>
                </Fragment>
              )}
            </span>
          </div>
          <button
            type="button"
            className="test-sport-card-button thq-button-animated thq-button-filled button"
          >
            <span className="test-sport-card-text24">
              {props.button ?? (
                <Fragment>
                  <span className="test-sport-card-text35">
                    Сделать прогноз
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

TestSportCard.defaultProps = {
  text2111: undefined,
  text232: undefined,
  text233: undefined,
  text21: undefined,
  text4: undefined,
  text231: undefined,
  text2: undefined,
  text2311: undefined,
  text41: undefined,
  text23: undefined,
  button: undefined,
  text23111: undefined,
  text5: undefined,
  rootClassName: '',
  text234: undefined,
  text211: undefined,
}

TestSportCard.propTypes = {
  text2111: PropTypes.element,
  text232: PropTypes.element,
  text233: PropTypes.element,
  text21: PropTypes.element,
  text4: PropTypes.element,
  text231: PropTypes.element,
  text2: PropTypes.element,
  text2311: PropTypes.element,
  text41: PropTypes.element,
  text23: PropTypes.element,
  button: PropTypes.element,
  text23111: PropTypes.element,
  text5: PropTypes.element,
  rootClassName: PropTypes.string,
  text234: PropTypes.element,
  text211: PropTypes.element,
}

export default TestSportCard
