import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './promo-game.css'

const PromoGame = (props) => {
  return (
    <div className={`promo-game-container1 ${props.rootClassName} `}>
      <div className="promo-game-container2">
        <div className="promo-game-container3">
          <Script
            html={`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Поймай шар удачи</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: linear-gradient(to bottom, #e0f7fa, #ffffff);
      text-align: center;
    }
    .luck-wrapper {
      padding: 20px;
      border-radius: 16px;
      width: 100%;
    }
    .luck-title {
      font-size: 24px;
      font-weight: bold;
    }
    .luck-subtitle {
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
    }
    .luck-start-btn {
      margin: 15px auto;
      padding: 12px 24px;
      font-size: 18px;
      background: #ff3b3b;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .luck-message {
      font-size: 18px;
      margin-top: 10px;
      min-height: 40px;
    }
    .luck-timer-bar {
      height: 8px;
      background: #ffffff;
      width: 100%;
      max-width: 600px;
      margin: 6px auto 0 auto;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid #00c853;
    }
    .luck-timer-fill {
      height: 100%;
      width: 100%;
      background: linear-gradient(to right, #00e676, #b2ff59);
      transition: width 0.1s linear;
    }
    .luck-game-area {
      width: 100%;
      max-width: 600px;
      height: 0;
      max-height: 0;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      background: #ffffff;
      transition: max-height 0.6s ease, height 0.6s ease;
    }
    .luck-game-area.active {
      height: 60vh;
      max-height: 1000px;
    }
    .luck-ball {
      width: 60px;
      height: 60px;
      background: radial-gradient(circle at 30% 30%, #ffcc00, #ff9900);
      border-radius: 50%;
      position: absolute;
      cursor: pointer;
      transform: translateY(100px);
      opacity: 0;
      animation: popIn 0.4s ease-out forwards;
    }
    @keyframes popIn {
      0% { transform: translateY(100px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .luck-counter-text {
      font-size: 14px;
      color: #555;
      margin-top: 5px;
    }
    .confetti {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
    }
    .confetti-piece {
      width: 10px;
      height: 10px;
      background-color: red;
      position: absolute;
      top: 0;
      animation: confetti-fall 3s linear forwards;
    }
    @keyframes confetti-fall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      display: none;
    }
    .modal.active {
      display: flex;
    }
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 12px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      text-align: left;
    }
    .modal-content h2 {
      margin-top: 0;
    }
    .modal-content input {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: 16px;
    }
    .modal-content button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      background-color: #00c853;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="luck-wrapper">
    <h1 class="luck-title">🎯 Поймай шар удачи и получи приз!</h1>
    <p class="luck-subtitle">Поймай 3 шара за 10 секунд</p>
    <button class="luck-start-btn">Начать игру</button>
    <div class="luck-message"></div>
    <div class="luck-counter-text">Поймано: <span class="luck-caught">0</span></div>
    <div class="luck-timer-bar"><div class="luck-timer-fill"></div></div>
    <div class="luck-game-area"></div>
  </div>
  <div class="confetti"></div>

  <!-- Модальное окно регистрации -->
  <div class="modal" id="modal">
    <div class="modal-content">
      <h2>🎁 Получите бонус</h2>
      <p>Введите номер телефона, чтобы получить приз:</p>
      <input type="tel" placeholder="Ваш телефон" required />
      <button onclick="document.getElementById('modal').classList.remove('active')">Отправить</button>
    </div>
  </div>

  <script>
    (function () {
      const wrapper = document.querySelector(".luck-wrapper");
      const startBtn = wrapper.querySelector(".luck-start-btn");
      const gameArea = wrapper.querySelector(".luck-game-area");
      const message = wrapper.querySelector(".luck-message");
      const timerBar = wrapper.querySelector(".luck-timer-bar");
      const timerFill = wrapper.querySelector(".luck-timer-fill");
      const counterText = wrapper.querySelector(".luck-counter-text");
      const counterCount = wrapper.querySelector(".luck-caught");
      const confettiContainer = document.querySelector(".confetti");
      const modal = document.getElementById("modal");

      let caught = 0;
      let gameInterval, moveInterval, balls = [];

      function updateCounter() {
        counterCount.textContent = caught;
      }

      function updateTimerBar(timeLeft) {
        timerFill.style.width = \`\${(timeLeft / 10) * 100}%\`;
      }

      function createBall() {
        const ball = document.createElement("div");
        ball.className = "luck-ball";
        ball.style.left = Math.random() * (gameArea.offsetWidth - 60) + "px";
        ball.style.top = Math.random() * (gameArea.offsetHeight - 60) + "px";
        ball.addEventListener("click", () => {
          ball.remove();
          caught++;
          updateCounter();
          if (caught >= 3) endGame(true);
        });
        gameArea.appendChild(ball);
        balls.push(ball);
      }

      function moveBalls() {
        balls.forEach(ball => {
          ball.style.left = Math.random() * (gameArea.offsetWidth - 60) + "px";
          ball.style.top = Math.random() * (gameArea.offsetHeight - 60) + "px";
        });
      }

      function startGame() {
        caught = 0;
        let timeLeft = 10;
        message.textContent = "";
        gameArea.innerHTML = "";
        balls = [];
        timerBar.style.display = "block";
        confettiContainer.innerHTML = "";
        gameArea.classList.add("active");
        updateCounter();

        for (let i = 0; i < 5; i++) createBall();
        moveInterval = setInterval(moveBalls, 2200);
        updateTimerBar(timeLeft);
        gameInterval = setInterval(() => {
          timeLeft--;
          updateTimerBar(timeLeft);
          if (timeLeft <= 0) endGame(false);
        }, 1000);
      }

      function endGame(won) {
        clearInterval(gameInterval);
        clearInterval(moveInterval);
        balls.forEach(ball => ball.remove());
        gameArea.classList.remove("active");
        timerBar.style.display = "none";
        message.innerHTML = won ?
          "🎉 Вы поймали удачу!" :
          "😢 Увы, не успели. Попробуйте снова!";
        if (won) {
          launchConfetti();
          setTimeout(() => {
            modal.classList.add("active");
          }, 600);
        }
      }

      function launchConfetti() {
        const colors = ["#ff5252", "#ffeb3b", "#00e676", "#448aff", "#ff6ec7"];
        for (let i = 0; i < 100; i++) {
          const piece = document.createElement("div");
          piece.className = "confetti-piece";
          piece.style.left = Math.random() * 100 + "vw";
          piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          piece.style.width = Math.random() * 8 + 4 + "px";
          piece.style.height = Math.random() * 8 + 4 + "px";
          piece.style.animationDuration = Math.random() * 2 + 2 + "s";
          confettiContainer.appendChild(piece);
          setTimeout(() => piece.remove(), 3000);
        }
      }

      startBtn.addEventListener("click", startGame);
    })();
  </script>
</body>
</html>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

PromoGame.defaultProps = {
  rootClassName: '',
}

PromoGame.propTypes = {
  rootClassName: PropTypes.string,
}

export default PromoGame
