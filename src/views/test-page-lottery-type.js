import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './test-page-lottery-type.css'

const TestPageLotteryType = (props) => {
  return (
    <div className="test-page-lottery-type-container1">
      <Helmet>
        <title>TestPageLotteryType - Lottery ver.1</title>
        <meta
          property="og:title"
          content="TestPageLotteryType - Lottery ver.1"
        />
      </Helmet>
      <div className="test-page-lottery-type-container2">
        <div className="test-page-lottery-type-container3">
          <Script
            html={`<section style='padding: 40px 20px; background-color: #fff; width: 100%; font-family: Arial, sans-serif;'>
  <div style='text-align: center; margin-bottom: 24px;'>
    <h2 style='font-size: 28px; color: #a00000; margin: 0;'>Exciting Features</h2>
    <p style='color: #555; font-size: 16px; margin: 8px 0 0;'>Explore our lottery options</p>
  </div>
  <div style='display: flex; justify-content: space-between; gap: 20px; width: 100%; flex-wrap: wrap;'>
    <div style='background: #fdf8f1; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); padding: 20px; flex: 1; text-align: center; box-sizing: border-box; min-width: 280px;'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/3/30/Risk_game_board.jpg' alt='Instant Lottery' style='width: 100%; height: auto; border-radius: 8px; object-fit: cover;' />
      <h3 style='margin-top: 12px; font-size: 20px; color: #a00000;'>Instant Lottery</h3>
      <p style='font-size: 14px; color: #666;'>Play and win instantly with scratch cards and digital games.</p>
    </div>
    <div style='background: #fdf8f1; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); padding: 20px; flex: 1; text-align: center; box-sizing: border-box; min-width: 280px;'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Basketball.png' alt='Draw Lottery' style='width: 100%; height: auto; border-radius: 8px; object-fit: cover;' />
      <h3 style='margin-top: 12px; font-size: 20px; color: #a00000;'>Draw Lottery</h3>
      <p style='font-size: 14px; color: #666;'>Participate in scheduled draws and chase the jackpot.</p>
    </div>
    <div style='background: #fdf8f1; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); padding: 20px; flex: 1; text-align: center; box-sizing: border-box; min-width: 280px;'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/NBA_Basketball_Court.jpg' alt='Sports Lottery' style='width: 100%; height: auto; border-radius: 8px; object-fit: cover;' />
      <h3 style='margin-top: 12px; font-size: 20px; color: #a00000;'>Sports Lottery</h3>
      <p style='font-size: 14px; color: #666;'>Predict sports outcomes and win exciting prizes.</p>
    </div>
  </div>
</section>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default TestPageLotteryType
