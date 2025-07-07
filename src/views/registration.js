import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import SignUp10 from '../components/sign-up10'
import './registration.css'

const Registration = (props) => {
  return (
    <div className="registration-container1">
      <Helmet>
        <title>Registration - Lottery ver.1</title>
        <meta property="og:title" content="Registration - Lottery ver.1" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="registration-text10">Главная</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="registration-text11">Джекпоты</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="registration-text12">Проверка билета</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="registration-text13">Лотереи</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="registration-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="registration-text15">Lotteries</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="registration-text16">Games</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="registration-text17">Winning Numbers</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="registration-text18">Акции</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="registration-text19">Регистрация</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="registration-text20">Войти</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name1"
        page1Description={
          <Fragment>
            <span className="registration-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="registration-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="registration-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="registration-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <SignUp10
        text={
          <Fragment>
            <span className="registration-text25">
              Введите номер в формате + 996 700 000 0000
            </span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="registration-text26">Отправить СМС</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="registration-text27">Регистрация</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="registration-text28">Регистрация</span>
          </Fragment>
        }
      ></SignUp10>
      <div>
        <div className="registration-container3">
          <Script
            html={`<script>
  document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("signup-phone-reg");
    const smsBtn = document.getElementById("signup-send-sms");
    const smsCodeField = document.querySelector(".sms-code");
    const phoneError = document.querySelector(".phone-error");

    // Визуальный отладчик
    const logDiv = document.createElement("div");
    logDiv.style.cssText = "position:fixed;bottom:10px;left:10px;background:#fefefe;padding:10px;border:1px solid #ccc;font-size:13px;z-index:9999;max-width:300px;color:#000";
    logDiv.innerHTML = "<b>🧪 JS отладка:</b><br>";
    document.body.appendChild(logDiv);
    const log = (msg) => {
      console.log(msg);
      logDiv.innerHTML += msg + "<br>";
    };

    

        // Обработка ввода
        phoneInput.addEventListener("input", function () {
      let cleaned = phoneInput.value.replace(/[^0-9]/g, ""); // только цифры
      if (cleaned.startsWith("996")) {
        cleaned = cleaned.slice(3); // удаляем префикс
      }
      phoneInput.value = "+996" + cleaned.slice(0, 9);
      
    });


    // Обработка клика
    smsBtn.addEventListener("click", function () {
     

      let rawPhone = (phoneInput.value || "").trim();
      let phone = rawPhone.replace(/[^+\\d]/g, "");

      const pattern = new RegExp("^\\\\+996\\\\d{9}\$");
      const validPrefixes = [
        "+996700", "+996701", "+996702",
        "+996555", "+996556", "+996557",
        "+996777", "+996770", "+996771"
      ];

      

      if (!pattern.test(phone)) {
        phoneInput.classList.add("invalid");
        phoneError.textContent = "Введите номер в формате +996XXXXXXXXX";
        phoneError.style.display = "block";
        smsCodeField.style.display = "none";
        
        return;
      }

      if (!validPrefixes.some(p => phone.startsWith(p))) {
        phoneInput.classList.add("invalid");
        phoneError.textContent = "Оператор не поддерживается.";
        phoneError.style.display = "block";
        smsCodeField.style.display = "none";
        
        return;
      }

      // Если всё верно
      phoneInput.classList.remove("invalid");
      phoneError.style.display = "none";
      smsCodeField.style.display = "block";
      smsCodeField.scrollIntoView({ behavior: "smooth" });
     

      // Таймер повторной отправки
      let timeLeft = 180;
      smsBtn.disabled = true;
      const originalText = smsBtn.textContent;

      const countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        smsBtn.textContent = \`Повтор через \${minutes}:\${seconds.toString().padStart(2, "0")}\`;
        timeLeft--;

        if (timeLeft < 0) {
          clearInterval(countdown);
          smsBtn.disabled = false;
          smsBtn.textContent = originalText;
          
        }
      }, 1000);
    });
  });
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Registration
