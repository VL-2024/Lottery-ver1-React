import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './asia-jackpot-section.css'

const AsiaJackpotSection = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="asia-jackpot-section-container1 thq-section-padding">
      <div className="asia-jackpot-section-container2">
        <h1 className="asia-jackpot-section-text10">
          {props.heading ?? (
            <Fragment>
              <span className="asia-jackpot-section-text26">
                Азия джекпот - твой шанс на миллионы
              </span>
            </Fragment>
          )}
        </h1>
        <div className="asia-jackpot-section-container3 thq-section-max-width">
          <div className="asia-jackpot-section-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="asia-jackpot-section-tab-horizontal1"
            >
              <div className="asia-jackpot-section-divider-container1">
                {activeTab === 0 && (
                  <div className="asia-jackpot-section-container4"></div>
                )}
              </div>
              <div className="asia-jackpot-section-content1">
                <h2 className="asia-jackpot-section-feature1-title thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text14">
                        Азия Джекпот - это единый джекпот лотерей стран Азии
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text15">
                        <span>
                          Минимальный джекпот — 10 миллионов, максимальный — 1
                          миллиард!
                        </span>
                        <br></br>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="asia-jackpot-section-tab-horizontal2"
            >
              <div className="asia-jackpot-section-divider-container2">
                {activeTab === 1 && (
                  <div className="asia-jackpot-section-container5"></div>
                )}
              </div>
              <div className="asia-jackpot-section-content2">
                <h2 className="asia-jackpot-section-feature2-title thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text22">
                        Заполни билет легко и быстро
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text11">
                        <span>
                          Выбери 5 основных чисел и 2 бонусных — вручную или
                          нажмите «Счастливый выбор».
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="asia-jackpot-section-tab-horizontal3"
            >
              <div className="asia-jackpot-section-divider-container3">
                {activeTab === 2 && (
                  <div className="asia-jackpot-section-container6"></div>
                )}
              </div>
              <div className="asia-jackpot-section-content3">
                <h2 className="asia-jackpot-section-feature3-title thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text19">
                        <span>Следи за розыгрышем</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="asia-jackpot-section-text23">
                        <span>
                          Смотри прямую трансляцию тиража или проверяй
                          результаты онлайн. Выигрыши зачисляются автоматически.
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="asia-jackpot-section-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="asia-jackpot-section-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="asia-jackpot-section-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="asia-jackpot-section-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

AsiaJackpotSection.defaultProps = {
  feature3ImgAlt: 'Image illustrating game information',
  feature2ImgAlt: 'Image showing winning numbers',
  feature2Description: undefined,
  feature1ImgSrc: '/imageForSection/asia_jp_1-1400w.png',
  feature2ImgSrc: '/imageForSection/card_1-1400w.png',
  feature1Title: undefined,
  feature1Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc: '/imageForSection/draw_1-1400w.png',
  feature2Title: undefined,
  feature3Description: undefined,
  feature1ImgAlt: 'Image depicting jackpot prizes',
  heading: undefined,
}

AsiaJackpotSection.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  heading: PropTypes.element,
}

export default AsiaJackpotSection
