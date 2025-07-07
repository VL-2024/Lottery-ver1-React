import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container1 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container2">
          <h2 className="banner3-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner3-text4">
                  Welcome to the World of Lotteries and Games
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner3-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner3-text5">
                  Explore a world of excitement and possibilities with our
                  diverse range of lottery games, jackpots, sports predictions,
                  and winning numbers.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner3-text3">Play Now</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  rootClassName: '',
  action1: undefined,
  heading1: undefined,
  image1Alt: 'Lottery and Games Banner Image',
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1670711454210-6516fc2674fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM3Mzc5OHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Banner3.propTypes = {
  rootClassName: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Banner3
