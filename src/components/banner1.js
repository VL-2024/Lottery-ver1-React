import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-title thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text3">
                  Национальная игровая экосистема
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner1-text1 thq-heading-2">
            {props.content1 ?? (
              <Fragment>
                <span className="banner1-text2">
                  Исследуйте мир захватывающих лотерей, игр и огромных
                  джекпотов. Приготовьтесь играть и выигрывать!
                </span>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  rootClassName: '',
  heading1: undefined,
}

Banner1.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Banner1
