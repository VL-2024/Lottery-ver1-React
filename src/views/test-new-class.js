import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Features11 from '../components/features11'
import './test-new-class.css'

const TestNewClass = (props) => {
  return (
    <div className="test-new-class-container">
      <Helmet>
        <title>TestNewClass - Lottery ver.1</title>
        <meta property="og:title" content="TestNewClass - Lottery ver.1" />
      </Helmet>
      <Features11
        slogan={
          <Fragment>
            <span className="test-new-class-text10">Play, Win, Repeat!</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="test-new-class-text11">Play Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="test-new-class-text12">Exciting Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="test-new-class-text13">Instant AAA Lotteries</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="test-new-class-text14">
              Classic Draw Lotteries
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="test-new-class-text15">Sports Lotteries</span>
          </Fragment>
        }
        rootClassName="features11root-class-name"
        secondaryAction={
          <Fragment>
            <span className="test-new-class-text16">Learn More</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="test-new-class-text17">
              Explore the amazing features that make our platform stand out from
              the rest.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="test-new-class-text18">
              Participate in quick and thrilling instant lotteries for instant
              wins.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="test-new-class-text19">
              Experience the traditional draw lotteries with big jackpot prizes
              up for grabs.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="test-new-class-text20">
              Engage in sports lotteries where your knowledge can lead you to
              exciting wins.
            </span>
          </Fragment>
        }
      ></Features11>
    </div>
  )
}

export default TestNewClass
