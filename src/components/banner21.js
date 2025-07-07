import React from 'react'

import PropTypes from 'prop-types'

import './banner21.css'

const Banner21 = (props) => {
  return (
    <div
      className={`banner21-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner21-max-width thq-section-max-width">
        <video
          src={props.videoSora1}
          loop="true"
          muted="true"
          poster={props.videoSora1}
          autoPlay="true"
          playsInline
          className="banner21-video"
        ></video>
      </div>
    </div>
  )
}

Banner21.defaultProps = {
  rootClassName: '',
  videoSora1:
    '/Video/20250627_1305_enchanting%20lottery%20moment_remix_01jyrdhqfreb1addyj472z0bz0.mp4',
}

Banner21.propTypes = {
  rootClassName: PropTypes.string,
  videoSora1: PropTypes.string,
}

export default Banner21
