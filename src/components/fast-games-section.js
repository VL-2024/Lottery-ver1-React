import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './fast-games-section.css'

const FastGamesSection = (props) => {
  return (
    <div
      id="fastgames"
      className={`fast-games-section-header78 ${props.rootClassName} `}
    >
      <div className="fast-games-section-column thq-section-max-width thq-section-padding">
        <div className="fast-games-section-content1">
          <h1 className="fast-games-section-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="fast-games-section-text3">
                  Мгновенные лотереи
                </span>
              </Fragment>
            )}
          </h1>
          <span className="fast-games-section-text2">
            {props.text ?? (
              <Fragment>
                <span className="fast-games-section-text4">
                  <span className="fast-games-section-text5">
                    Быстрые лотереи — моментальные результаты и шанс на выигрыш
                    в один клик.
                  </span>
                  <span className="fast-games-section-text6">
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
      <Link to="/fast-games" className="fast-games-section-navlink">
        <div className="fast-games-section-content2">
          <div className="fast-games-section-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="fast-games-section-strip1 thq-animated-group-horizontal">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="fast-games-section-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt1}
                src={props.image2Src1}
                className="fast-games-section-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="fast-games-section-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="fast-games-section-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="fast-games-section-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="fast-games-section-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="fast-games-section-strip2 thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="fast-games-section-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="fast-games-section-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="fast-games-section-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="fast-games-section-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="fast-games-section-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="fast-games-section-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="fast-games-section-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="fast-games-section-strip3 thq-animated-group-horizontal-reverse">
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="fast-games-section-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt2}
                src={props.image8Src2}
                className="fast-games-section-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="fast-games-section-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="fast-games-section-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image7Alt2}
                src={props.image7Src2}
                className="fast-games-section-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="fast-games-section-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="fast-games-section-strip4 thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt1}
                src={props.image7Src1}
                className="fast-games-section-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt1}
                src={props.image8Src1}
                className="fast-games-section-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt1}
                src={props.image9Src1}
                className="fast-games-section-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt1}
                src={props.image12Src1}
                className="fast-games-section-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt1}
                src={props.image10Src1}
                className="fast-games-section-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt11}
                src={props.image12Src11}
                className="fast-games-section-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
      </Link>
      <div>
        <div className="fast-games-section-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

FastGamesSection.defaultProps = {
  image8Src2: '/ImageFastGames/golden%20bank-1400w.jpg',
  image9Alt: 'Hero Image',
  image8Src1: '/ImageFastGames/anibus-1400w.jpg',
  image12Alt1: 'Hero Image',
  image7Src2: '/ImageFastGames/superloto%20games-1400w.jpg',
  image12Src11:
    'https://images.unsplash.com/photo-1555864400-cc47dd93d427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEzMHw&ixlib=rb-4.1.0&q=80&w=1400',
  image4Alt: 'Hero Image',
  heading1: undefined,
  image10Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1611550082883-a65b37a8ea89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEyOXw&ixlib=rb-4.1.0&q=80&w=1400',
  image2Src: '/forest.jpg',
  image7Src1:
    'https://images.unsplash.com/photo-1611891487122-207579d67d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEyOXw&ixlib=rb-4.1.0&q=80&w=1400',
  text: undefined,
  image5Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image12Src1:
    'https://images.unsplash.com/photo-1555864400-cc47dd93d427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEzMHw&ixlib=rb-4.1.0&q=80&w=1400',
  image1Src: '/ImageFastGames/el%20porco-1400w.jpg',
  image3Src: '/ImageFastGames/anibus-1400w.jpg',
  rootClassName: '',
  image9Src: '/hockey.jpg',
  image12Alt11: 'Hero Image',
  image2Src1: '/ImageFastGames/wheel%20magic-1400w.jpg',
  image7Alt2: 'Hero Image',
  image10Alt1: 'Hero Image',
  image6Alt: 'Hero Image',
  image4Src: '/ImageFastGames/bascetball-1400w.jpg',
  image8Alt1: 'Hero Image',
  image7Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image8Alt2: 'Hero Image',
  image2Alt1: 'Hero Image',
  image9Src1:
    'https://images.unsplash.com/photo-1617678280072-a00c15e86b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEzMHw&ixlib=rb-4.1.0&q=80&w=1400',
  image8Src: '/ImageFastGames/golden%20bank-1400w.jpg',
  image10Src: '/ImageFastGames/shield-1400w.jpg',
  image9Alt1: 'Hero Image',
  image10Src1:
    'https://images.unsplash.com/photo-1599826452316-c682f75d39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEzNHw&ixlib=rb-4.1.0&q=80&w=1400',
  image7Alt1: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDM1MDEzM3w&ixlib=rb-4.1.0&q=80&w=1400',
  image1Alt: 'Lottery Central Image',
  image7Src: '/ImageFastGames/superloto%20games-1400w.jpg',
}

FastGamesSection.propTypes = {
  image8Src2: PropTypes.string,
  image9Alt: PropTypes.string,
  image8Src1: PropTypes.string,
  image12Alt1: PropTypes.string,
  image7Src2: PropTypes.string,
  image12Src11: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  image10Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image2Src: PropTypes.string,
  image7Src1: PropTypes.string,
  text: PropTypes.element,
  image5Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image12Src1: PropTypes.string,
  image1Src: PropTypes.string,
  image3Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image9Src: PropTypes.string,
  image12Alt11: PropTypes.string,
  image2Src1: PropTypes.string,
  image7Alt2: PropTypes.string,
  image10Alt1: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image8Alt1: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image8Alt2: PropTypes.string,
  image2Alt1: PropTypes.string,
  image9Src1: PropTypes.string,
  image8Src: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt1: PropTypes.string,
  image10Src1: PropTypes.string,
  image7Alt1: PropTypes.string,
  image5Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
}

export default FastGamesSection
