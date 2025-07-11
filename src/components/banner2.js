import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div
      className={`banner2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container2">
          <h2 className="banner2-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner2-text4">
                  Национальная игровая экосистема
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner2-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner2-text5">
                  Исследуйте мир захватывающих лотерей, игр и огромных
                  джекпотов. Приготовьтесь играть и выигрывать!
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner2-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner2-text3">Sign Up Now</span>
              </Fragment>
            )}
          </span>
        </button>
        <video
          src={props.videoSora1}
          loop="true"
          muted="true"
          poster={props.videoSora1}
          autoPlay="true"
          playsInline="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  action1: undefined,
  heading1: undefined,
  videoSora1: '/Video/video_home3.mp4',
  content1: undefined,
  rootClassName: '',
}

Banner2.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  videoSora1: PropTypes.string,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner2
