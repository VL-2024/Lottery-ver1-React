import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text5">
                    Your gateway to lottery excitement and big wins!
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text8">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text9">
                  Explore the exciting features offered on our platform to
                  enhance your lottery experience.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column"></div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="features1-feature3-title thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text6">
                        Latest Jackpot Prizes
                      </span>
                    </Fragment>
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text4">Play Now</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text7">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: undefined,
  slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1630495695262-316ef3a7f3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTAzNzEzNXw&ixlib=rb-4.1.0&q=80&w=500',
  feature1ImageAlt: 'Diverse Lottery Options Image',
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1623082185808-579b6093d0dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTAzNzEzNXw&ixlib=rb-4.1.0&q=80&h=300',
  feature3ImageAlt: 'Latest Jackpot Prizes Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1503471370190-c7ed2e75b36a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTAzNzEzNHw&ixlib=rb-4.1.0&q=80&w=500',
  feature2ImageAlt: 'Winning Tips & Strategies Image',
  secondaryAction: undefined,
  sectionTitle: undefined,
  sectionDescription: undefined,
}

Features1.propTypes = {
  mainAction: PropTypes.element,
  slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionDescription: PropTypes.element,
}

export default Features1
