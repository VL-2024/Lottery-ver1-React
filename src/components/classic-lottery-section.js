import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './classic-lottery-section.css'

const ClassicLotterySection = (props) => {
  return (
    <div
      id="classic-lottery"
      className={`classic-lottery-section-container1 ${props.rootClassName} `}
    >
      <div className="classic-lottery-section-container2">
        <div className="classic-lottery-section-content">
          <h1 className="classic-lottery-section-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="classic-lottery-section-text7">
                  Классические лотереи
                </span>
              </Fragment>
            )}
          </h1>
          <span className="classic-lottery-section-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="classic-lottery-section-text3">
                  <span>
                    Классика лотерей — большие розыгрыши каждую неделю.
                  </span>
                  <br></br>
                  <span>
                    Участвуй в регулярных тиражах, следи за датами и борись за
                    крупные джекпоты.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="classic-lottery-section-container3 image-grid">
        <div className="classic-lottery-section-container4 row">
          <img
            alt={props.imageAlt5}
            src={props.imageSrc5}
            className="classic-lottery-section-image1 grid-img"
          />
          <img
            alt={props.imageAlt59}
            src={props.imageSrc59}
            className="classic-lottery-section-image2 grid-img"
          />
          <img
            alt={props.imageAlt58}
            src={props.imageSrc58}
            className="classic-lottery-section-image3 grid-img"
          />
          <img
            alt={props.imageAlt57}
            src={props.imageSrc57}
            className="classic-lottery-section-image4 grid-img"
          />
        </div>
        <div className="classic-lottery-section-container5 row">
          <img
            alt={props.imageAlt510}
            src={props.imageSrc510}
            className="classic-lottery-section-image5 grid-img"
          />
          <img
            alt={props.imageAlt591}
            src={props.imageSrc591}
            className="classic-lottery-section-image6 grid-img"
          />
          <img
            alt={props.imageAlt581}
            src={props.imageSrc581}
            className="classic-lottery-section-image7 grid-img"
          />
          <img
            alt={props.imageAlt571}
            src={props.imageSrc571}
            className="classic-lottery-section-image8 grid-img"
          />
        </div>
      </div>
    </div>
  )
}

ClassicLotterySection.defaultProps = {
  imageAlt591: 'image',
  text1: undefined,
  imageAlt59: 'image',
  imageAlt57: 'image',
  imageAlt58: 'image',
  imageSrc5:
    'https://images.unsplash.com/photo-1649734924961-858e997c55de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTEzMjk2MHw&ixlib=rb-4.1.0&q=80&w=1500',
  imageSrc581: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc59: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc510: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt571: 'image',
  imageAlt581: 'image',
  imageSrc58: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  imageSrc57: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt5: 'image',
  imageAlt510: 'image',
  imageSrc591: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: undefined,
  imageSrc571: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

ClassicLotterySection.propTypes = {
  imageAlt591: PropTypes.string,
  text1: PropTypes.element,
  imageAlt59: PropTypes.string,
  imageAlt57: PropTypes.string,
  imageAlt58: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc581: PropTypes.string,
  imageSrc59: PropTypes.string,
  imageSrc510: PropTypes.string,
  imageAlt571: PropTypes.string,
  imageAlt581: PropTypes.string,
  imageSrc58: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc57: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt510: PropTypes.string,
  imageSrc591: PropTypes.string,
  heading1: PropTypes.element,
  imageSrc571: PropTypes.string,
}

export default ClassicLotterySection
