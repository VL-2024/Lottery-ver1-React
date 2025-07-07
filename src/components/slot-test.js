import React from 'react'

import PropTypes from 'prop-types'

import './slot-test.css'

const SlotTest = (props) => {
  return (
    <div className={`slot-test-container1 ${props.rootClassName} `}>
      <div className="slot-test-container2">{props.children}</div>
    </div>
  )
}

SlotTest.defaultProps = {
  rootClassName: '',
}

SlotTest.propTypes = {
  rootClassName: PropTypes.string,
}

export default SlotTest
