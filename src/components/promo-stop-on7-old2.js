import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './promo-stop-on7.css'

import { useEffect } from "react";


window.initRouletteGame = function () {
  const btn = document.getElementById("rouletteStartBtn");
  const numberDisplay = document.getElementById("rouletteNumber");
  const message = document.getElementById("rouletteMessage");

  if (!btn || !numberDisplay || !message) return;

  const displayContainer = numberDisplay.closest("div");
  const messageContainer = message.closest("div");

  displayContainer.classList.add("roulette-hidden");
  messageContainer.classList.add("roulette-hidden");

  let interval;
  let isSpinning = false;
  let firstClick = true;

  btn.addEventListener("click", () => {
    if (firstClick) {
      displayContainer.classList.remove("roulette-hidden");
      messageContainer.classList.remove("roulette-hidden");
      firstClick = false;
    }

    if (!isSpinning) {
      message.textContent = "";
      btn.textContent = "Стоп";
      isSpinning = true;
      interval = setInterval(() => {
        const num = Math.floor(Math.random() * 10);
        numberDisplay.textContent = num;
      }, 60);
    } else {
      clearInterval(interval);
      isSpinning = false;
      btn.textContent = "Играть снова";
      const result = parseInt(numberDisplay.textContent);
      if (result === 7) {
        message.textContent = "🎉 Ура! Вы поймали 7! Зарегистрируйтесь, чтобы получить приз!";
        launchConfetti();
      } else {
        message.textContent = "😢 Увы, вы не поймали 7. Попробуйте ещё раз!";
      }
    }
  });
};


const PromoStopOn7 = (props) => {
  useEffect(() => {
    if (typeof window.initRouletteGame === "function") {
      window.initRouletteGame();
    }
  }, []);

  return (
    <div className={`promo-stop-on7-container10 ${props.rootClassName} `}>
      <div>
        <div className="promo-stop-on7-container12">
          <Script
            html={`<style>
  #confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }

  .confetti-piece {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    animation: confetti-fall 3s linear forwards;
  }

  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  /* 📱 Модальное окно */
.modal {
  display: none;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
}

.modal.active {
  display: flex;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: left;
}

.modal-content h2 {
  margin-top: 0;
  font-size: 20px;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.modal-content button {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  background-color: #00c853;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

#phoneModal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 10000;
  justify-content: center;
  align-items: center;
}

#phoneModal.active {
  display: flex;
}

/* 🔒 Скрытие до клика */
.roulette-hidden {
  display: none;
}
</style>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="promo-stop-on7-container14">
          <Script
            html={`<script>
(function(){
  window.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("rouletteStartBtn");
    const numberDisplay = document.getElementById("rouletteNumber");
    const message = document.getElementById("rouletteMessage");

    const displayContainer = numberDisplay.closest("div"); // контейнер вокруг числа
    const messageContainer = message.closest("div");

    // Скрываем их изначально
    displayContainer.classList.add("roulette-hidden");
    messageContainer.classList.add("roulette-hidden");

    let interval;
    let isSpinning = false;
    let firstClick = true;

    btn.addEventListener("click", () => {
      // Раскрытие при первом клике
      if (firstClick) {
        displayContainer.classList.remove("roulette-hidden");
        messageContainer.classList.remove("roulette-hidden");
        firstClick = false;
      }

      if (!isSpinning) {
        message.textContent = "";
        btn.textContent = "Стоп";
        isSpinning = true;
        interval = setInterval(() => {
          const num = Math.floor(Math.random() * 10);
          numberDisplay.textContent = num;
        }, 60);
      } else {
        clearInterval(interval);
        isSpinning = false;
        btn.textContent = "Играть снова";
        const result = parseInt(numberDisplay.textContent);
        if (result === 7) {
          message.textContent = "🎉 Ура! Вы поймали 7! Зарегистрируйтесь, чтобы получить приз!";
          launchConfetti(); // запускаем конфетти
        } else {
          message.textContent = "😢 Увы, вы не поймали 7. Попробуйте ещё раз!";
        }
      }
    });
  });

  // 🎊 Глобальная функция конфетти
  function launchConfetti() {
    const confetti = document.getElementById("confetti");
    const colors = ["#ff5252", "#ffeb3b", "#00e676", "#448aff", "#ff6ec7"];
    for (let i = 0; i < 100; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = Math.random() * 8 + 4 + "px";
      piece.style.height = Math.random() * 8 + 4 + "px";
      piece.style.animationDuration = Math.random() * 2 + 2 + "s";
      confetti.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }
  }
})();
</script>`}
          ></Script>
        </div>
      </div>
      <div className="promo-stop-on7-container15 roulette-wrapper">
        <h1 className="roulette-title">
          {props.heading2 ?? (
            <Fragment>
              <span className="promo-stop-on7-text20">🎰 Поймай семерку!</span>
            </Fragment>
          )}
        </h1>
        <p className="roulette-subtitle">
          {props.text2 ?? (
            <Fragment>
              <span className="promo-stop-on7-text21">
                Нажми &quot;Стоп&quot; и поймай число 7!
              </span>
            </Fragment>
          )}
        </p>
        <div id="rouletteNumber" className="roulette-display">
          <span>
            {props.text3 ?? (
              <Fragment>
                <span className="promo-stop-on7-text19">0</span>
              </Fragment>
            )}
          </span>
        </div>
        <button id="rouletteStartBtn" className="roulette-start-btn button">
          <span>
            {props.button2 ?? (
              <Fragment>
                <span className="promo-stop-on7-text18">Старт</span>
              </Fragment>
            )}
          </span>
        </button>
        <div id="rouletteMessage" className="roulette-message"></div>
        <div id="confetti" className="promo-stop-on7-confetti"></div>
        <div id="phoneModal" className="promo-stop-on7-container18">
          <div id="modal-content" className="promo-stop-on7-container19">
            <h1>
              {props.heading3 ?? (
                <Fragment>
                  <span className="promo-stop-on7-text22">Получите бонус</span>
                </Fragment>
              )}
            </h1>
            <span>
              {props.text4 ?? (
                <Fragment>
                  <span className="promo-stop-on7-text23">
                    Введите номер телефона
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder1}
              id="phoneInput"
              className="input"
            />
            <span id="phoneError" className="error-message">
              {props.text5 ?? (
                <Fragment>
                  <span className="promo-stop-on7-text24">Text</span>
                </Fragment>
              )}
            </span>
            <button type="button" id="submitPhoneBtn" className="button">
              <span>
                {props.button3 ?? (
                  <Fragment>
                    <span className="promo-stop-on7-text25">
                      Получитиь бонус
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

PromoStopOn7.defaultProps = {
  button2: undefined,
  text3: undefined,
  heading2: undefined,
  text2: undefined,
  rootClassName: '',
  heading3: undefined,
  text4: undefined,
  textinputPlaceholder1: '+996 (700) 123456',
  text5: undefined,
  button3: undefined,
}

PromoStopOn7.propTypes = {
  button2: PropTypes.element,
  text3: PropTypes.element,
  heading2: PropTypes.element,
  text2: PropTypes.element,
  rootClassName: PropTypes.string,
  heading3: PropTypes.element,
  text4: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  text5: PropTypes.element,
  button3: PropTypes.element,
}

export default PromoStopOn7
