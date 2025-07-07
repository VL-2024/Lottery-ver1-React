import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './lottery-type-section.css'

const LotteryTypeSection = (props) => {
  return (
    <div
      className={`lottery-type-section-layout251 thq-section-padding ${props.rootClassName} `}
    >
      <div className="lottery-type-section-max-width thq-section-max-width">
        <div className="lottery-type-section-section-title thq-flex-row"></div>
        <div className="lottery-type-section-content1">
          <div className="lottery-type-section-row thq-flex-row">
            <div className="lottery-type-section-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 lottery-type-section-feature1-image"
              />
              <div className="lottery-type-section-content2 thq-flex-column">
                <h3 className="lottery-type-section-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="lottery-type-section-text4">
                        Мгновенные лотереи
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="lottery-type-section-feature1-description thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="lottery-type-section-text3">
                        Играй и выигрывай за секунды
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="lottery-type-section-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 lottery-type-section-feature2-image"
              />
              <div className="lottery-type-section-content3 thq-flex-column">
                <h3 className="lottery-type-section-feature2-title thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="lottery-type-section-text5">
                        Тиражные лотереи
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="lottery-type-section-feature2-description thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="lottery-type-section-text6">
                        Классические лотереи
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="lottery-type-section-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 inline-card-text lottery-type-section-feature3-image"
              />
              <div className="lottery-type-section-content4 thq-flex-column">
                <h3 className="lottery-type-section-feature3-title thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="lottery-type-section-text2">
                        Спортивные лотереи
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="lottery-type-section-feature3-description thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="lottery-type-section-text1">
                        Прогнозируй спортивные результаты
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LotteryTypeSection.defaultProps = {
  feature3Description: undefined,
  feature3ImageAlt: 'Sports Lotteries Image',
  feature3Title: undefined,
  feature1Description: undefined,
  feature2ImageAlt: 'Classic Draw Lotteries Image',
  feature1Title: undefined,
  feature3ImageSrc:
    '/imagePopularLottery/20250630_1931_sports%20and%20events_remix_01jz0trjc7fp2veqrsqzstrmca-300h.png',
  feature1ImageAlt: 'Instant Lotteries Image',
  feature2Title: undefined,
  feature2Description: undefined,
  rootClassName: '',
  feature2ImageSrc:
    '/imagePopularLottery/20250630_1906_dynamic%20lottery%20display_simple_compose_01jz0sbc4rfj4r2d23neeqzd30-300h.png',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1700085663927-d223c604fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTExMTkxNXw&ixlib=rb-4.1.0&q=80&h=300',
}

LotteryTypeSection.propTypes = {
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default LotteryTypeSection
