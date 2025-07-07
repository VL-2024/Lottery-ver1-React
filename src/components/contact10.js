import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text16">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Have questions or feedback? Feel free to reach out to us!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text18">
                    Email: info@lotterywebsite.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text20">
                    For general inquiries and support
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text21">Phone: 123-456-7890</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Available during business hours
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'Email Icon',
  location2ImageAlt: 'Phone Icon',
  heading1: undefined,
  content1: undefined,
  location1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1517085908802-f56a43681c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEyOHw&ixlib=rb-4.1.0&q=80&w=1080',
  location2Description: undefined,
  location1Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1614605008553-d98daabfa5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEyOHw&ixlib=rb-4.1.0&q=80&w=1080',
  location2: undefined,
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  location1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2: PropTypes.element,
}

export default Contact10
