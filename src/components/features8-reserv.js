import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features8-reserv.css'

const Features8Reserv = (props) => {
  return (
    <div
      className={`features8-reserv-layout226 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features8-reserv-max-width thq-grid-auto-300 thq-section-max-width">
        <div className="features8-reserv-column1 thq-flex-column">
          <span className="features8-reserv-over-title11 thq-body-small">
            {props.feature1Slogan ?? (
              <Fragment>
                <span className="features8-reserv-text15">
                  Играй и выигрывай за секунды
                </span>
              </Fragment>
            )}
          </span>
          <div className="features8-reserv-content1 thq-flex-column">
            <h3 className="features8-reserv-title11 thq-heading-3">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features8-reserv-text18">
                    Быстрые/Мгновенные лотереи
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="features8-reserv-description11 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features8-reserv-text20">
                    Мгновенные лотереи — моментальные результаты и шанс на приз
                    в один клик. Без ожидания, здесь и сейчас.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-reserv-actions1 thq-flex-row">
            <Link
              to="/fast-games"
              className="features8-reserv-button1 thq-button-filled"
            >
              <span className="features8-reserv-action11 thq-body-small">
                {props.mainActionFast1 ?? (
                  <Fragment>
                    <span className="features8-reserv-text22">
                      Играть сейчас
                    </span>
                  </Fragment>
                )}
              </span>
            </Link>
            <button className="features8-reserv-button2 thq-button-outline">
              <span className="features8-reserv-action21 thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features8-reserv-text14">Демо</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="features8-reserv-column2 thq-flex-column">
          <span className="features8-reserv-over-title12 thq-body-small">
            {props.feature2Slogan ?? (
              <Fragment>
                <span className="features8-reserv-text16">
                  Классика лотерей — большие розыгрыши каждую неделю
                </span>
              </Fragment>
            )}
          </span>
          <div className="features8-reserv-content2 thq-flex-column">
            <h3 className="features8-reserv-title12 thq-heading-3">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features8-reserv-text17">
                    Классические тиражные лотереи
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="features8-reserv-description12 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features8-reserv-text10">
                    Участвуй в регулярных тиражах, следи за датами и борись за
                    крупные джекпоты.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-reserv-actions2 thq-flex-row">
            <button className="features8-reserv-button3 thq-button-filled">
              <span className="features8-reserv-action12 thq-body-small">
                {props.mainActionClassic ?? (
                  <Fragment>
                    <span className="features8-reserv-text21">
                      Купить билет
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features8-reserv-button4 thq-button-outline">
              <span className="features8-reserv-action22 thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features8-reserv-text14">Демо</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="features8-reserv-column3 thq-flex-column">
          <span className="features8-reserv-over-title13 thq-body-small">
            {props.feature3Slogan ?? (
              <Fragment>
                <span className="features8-reserv-text12">
                  Прогнозируй спорт — выигрывай как в лотерее
                </span>
              </Fragment>
            )}
          </span>
          <div className="features8-reserv-content3 thq-flex-column">
            <h3 className="features8-reserv-title13 thq-heading-3">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features8-reserv-text13">
                    Спортивные лотереи
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="features8-reserv-description13 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features8-reserv-text11">
                    Выбери исходы спортивных матчей, используй интуицию и знание
                    спорта, чтобы забрать главный приз.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features8-reserv-actions3 thq-flex-row">
            <button className="features8-reserv-button5 thq-button-filled">
              <span className="features8-reserv-action13 thq-body-small">
                {props.mainActionSport ?? (
                  <Fragment>
                    <span className="features8-reserv-text19">
                      Спортпрогноз
                    </span>
                  </Fragment>
                )}
              </span>
              NewProp
            </button>
            <button className="features8-reserv-button6 thq-button-outline">
              <span className="features8-reserv-action23 thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features8-reserv-text14">Демо</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features8Reserv.defaultProps = {
  rootClassName: '',
  feature2Description: undefined,
  feature3Description: undefined,
  feature3Slogan: undefined,
  feature3Title: undefined,
  secondaryAction: undefined,
  feature1Slogan: undefined,
  feature2Slogan: undefined,
  feature2Title: undefined,
  feature1Title: undefined,
  mainActionSport: undefined,
  feature1Description: undefined,
  mainActionClassic: undefined,
  mainActionFast1: undefined,
}

Features8Reserv.propTypes = {
  rootClassName: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3Slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature2Slogan: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  mainActionSport: PropTypes.element,
  feature1Description: PropTypes.element,
  mainActionClassic: PropTypes.element,
  mainActionFast1: PropTypes.element,
}

export default Features8Reserv
