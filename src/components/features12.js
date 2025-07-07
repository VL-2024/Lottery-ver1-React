import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features12.css'

const Features12 = (props) => {
  return (
    <div className="features12-layout251 thq-section-padding">
      <div className="features12-max-width thq-section-max-width">
        <div className="thq-flex-row features12-section-title">
          <div className="features12-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features12-text20">Win Big with Us!</span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features12-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features12-text21">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features12-text17">
                  Explore the exciting features of our online platform for
                  participating in lotteries, games, and sports predictions.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features12-content1">
          <div className="features12-row thq-flex-row">
            <div className="features12-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features12-feature1-image"
              />
              <div className="features12-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features12-text15">Jackpot Prizes</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features12-text19">
                        Get a chance to win large jackpot prizes in various
                        games and lotteries.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features12-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features12-feature2-image"
              />
              <div className="features12-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features12-text22">Winning Numbers</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features12-text23">
                        Access information on winning numbers to stay updated on
                        the latest results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features12-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features12-feature3-image"
              />
              <div className="features12-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features12-text18">
                        Strategies for Success
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features12-text13">
                        Discover effective strategies to increase your chances
                        of winning in games and predictions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features12-actions">
          <button className="thq-button-filled features12-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features12-text16">Join Now</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features12-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features12-text14">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features12.defaultProps = {
  feature1ImageAlt: 'Jackpot Prizes Image',
  feature3Description: undefined,
  secondaryAction: undefined,
  feature1Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1591352473009-8b153850a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMTQwNHw&ixlib=rb-4.1.0&q=80&h=300',
  mainAction: undefined,
  sectionDescription: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1707608423081-6abb65ce2a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMTQwNHw&ixlib=rb-4.1.0&q=80&w=1400',
  slogan: undefined,
  feature2ImageAlt: 'Winning Numbers Image',
  feature3ImageAlt: 'Strategies Image',
  sectionTitle: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1709540235844-62f616e47a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEwMTQwM3w&ixlib=rb-4.1.0&q=80&h=300',
  feature2Description: undefined,
}

Features12.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features12
