import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Banner1 from './banner1'
import './project-desacription.css'

const ProjectDesacription = (props) => {
  return (
    <div className={`project-desacription-container ${props.rootClassName} `}>
      <Banner1
        content1={
          <Fragment>
            <span className="project-desacription-text1">
              Исследуйте мир захватывающих лотерей, игр и огромных джекпотов.
              Приготовьтесь играть и выигрывать!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="project-desacription-text2">
              Национальная игровая экосистема
            </span>
          </Fragment>
        }
        rootClassName="banner1root-class-name"
      ></Banner1>
    </div>
  )
}

ProjectDesacription.defaultProps = {
  rootClassName: '',
}

ProjectDesacription.propTypes = {
  rootClassName: PropTypes.string,
}

export default ProjectDesacription
