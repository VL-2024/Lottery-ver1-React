import React from 'react'

import PropTypes from 'prop-types'

import './slider-action.css'

const SliderAction = (props) => {
  return (
    <div className={`slider-action-container1 ${props.rootClassName} `}>
      <div className="slider-action-container2">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-pause-autoplay-on-mouse-enter="true"
          className="slider-action-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="slider-action-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-action-slider-slide2 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-action-slider-slide3 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="slider-action-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="slider-action-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="slider-action-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

SliderAction.defaultProps = {
  rootClassName: '',
}

SliderAction.propTypes = {
  rootClassName: PropTypes.string,
}

export default SliderAction
