import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div
      className={`contact7-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact7-text18">Наши контакты</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact7-text17">
                    720001, улица Киевская, дом 100, Бишкек
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text19">
                    Центральный офис лотереи
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact7-text20">
                    Если у Вас есть вопросы, посетите наш главный офис.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
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
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact7-text16">Служба поддержки</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact7-text21">
                    Круглосуточная служба поддержки
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
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

Contact7.defaultProps = {
  location1ImgSrc:
    'https://images.unsplash.com/photo-1593453917438-14f60d0d2357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM2NDYyNnw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  location2: undefined,
  content1: undefined,
  heading1: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1506621791785-381723a87549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM2NDYyNnw&ixlib=rb-4.1.0&q=80&w=1080',
  location1ImgAlt: 'Lottery Central Headquarters Image',
  location1: undefined,
  location2ImgAlt: 'Customer Support Image',
  location1Description: undefined,
  location2Description: undefined,
}

Contact7.propTypes = {
  location1ImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  location2: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location1: PropTypes.element,
  location2ImgAlt: PropTypes.string,
  location1Description: PropTypes.element,
  location2Description: PropTypes.element,
}

export default Contact7
