import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner21 from '../components/banner21'
import ProjectDesacription from '../components/project-desacription'
import LotteryTypeSection from '../components/lottery-type-section'
import PromoGame from '../components/promo-game'
import AsiaJackpotSection from '../components/asia-jackpot-section'
import SliderAction from '../components/slider-action'
import FastGamesSection from '../components/fast-games-section'
import SportLotterySection from '../components/sport-lottery-section'
import PromoStopOn7 from '../components/promo-stop-on7'
import ClassicLotterySection from '../components/classic-lottery-section'
import Testimonial17 from '../components/testimonial17'
import Features24 from '../components/features24'
import Banner2 from '../components/banner2'
import OurPartners from '../components/our-partners'
import Footer4 from '../components/footer4'
import LoginModal from '../components/login-modal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Lottery ver.1</title>
        <meta property="og:title" content="Lottery ver.1" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Главная</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Лотереи</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Контакты</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Результаты</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Lotteries</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Games</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Winning Numbers</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="home-text18">Акции</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text19">Регистрация</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text20">Войти</span>
          </Fragment>
        }
        logoSrc="/Logo/logo_v1-1500h.png"
        link2Url="#Features24"
        page1Description={
          <Fragment>
            <span className="home-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Banner21
        videoSora1="/Video/video_home3.mp4"
        rootClassName="banner21root-class-name"
      ></Banner21>
      <ProjectDesacription rootClassName="project-desacriptionroot-class-name"></ProjectDesacription>
      <hr className="home-separator1"></hr>
      <LotteryTypeSection
        feature1Title={
          <Fragment>
            <span className="home-text25">Мгновенные лотереи</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text26">Тиражные лотереи</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text27">Спортивные лотереи</span>
          </Fragment>
        }
        rootClassName="lottery-type-sectionroot-class-name"
        feature2ImageSrc="/imagePopularLottery/classic_keno_rus-300h.png"
        feature3ImageSrc="/imagePopularLottery/sportloto_1-300h.png"
        feature1Description={
          <Fragment>
            <span className="home-text28">Играй и выигрывай за секунды</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text29">Классические лотереи</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text30">
              Прогнозируй спортивные результаты
            </span>
          </Fragment>
        }
      ></LotteryTypeSection>
      <hr className="home-separator2"></hr>
      <PromoGame rootClassName="promo-gameroot-class-name"></PromoGame>
      <hr className="home-separator3"></hr>
      <AsiaJackpotSection
        heading={
          <Fragment>
            <span className="home-text31">
              Азия джекпот - твой шанс на миллионы
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text32">
              Азия Джекпот - это единый джекпот лотерей стран Азии
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33">Заполни билет легко и быстро</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text34">
              <span>Следи за розыгрышем</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1ImgSrc="/imageForSection/asia_jp_1-1400w.png"
        feature1Description={
          <Fragment>
            <span className="home-text37">
              <span>
                Минимальный джекпот — 10 миллионов, максимальный — 1 миллиард!
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41">
              <span>
                Выбери 5 основных чисел и 2 бонусных — вручную или нажмите
                «Счастливый выбор».
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text44">
              <span>
                Смотри прямую трансляцию тиража или проверяй результаты
                онлайн. Выигрыши зачисляются автоматически.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></AsiaJackpotSection>
      <hr className="home-separator4"></hr>
      <SliderAction rootClassName="slider-actionroot-class-name"></SliderAction>
      <hr className="home-separator5"></hr>
      <FastGamesSection
        text={
          <Fragment>
            <span className="home-text47">
              Быстрые лотереи — моментальные результаты и шанс на выигрыш в один
              клик.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text48">Мгновенные лотереи</span>
          </Fragment>
        }
        image1Src="/ImageFastGames/anibus-1500w.jpg"
        image2Src="/ImageFastGames/bascetball-1500w.jpg"
        image3Src="/ImageFastGames/el%20porco-1500w.jpg"
        image4Src="/ImageFastGames/spaceship-1500w.jpg"
        image7Src="/ImageFastGames/flash-1500w.jpg"
        image8Src="/ImageFastGames/kleopatra-1500w.jpg"
        image9Src="/ImageFastGames/football-1500w.jpg"
        image2Src1="/ImageFastGames/winter%20night-1500w.jpg"
        rootClassName="fast-games-sectionroot-class-name"
      ></FastGamesSection>
      <hr className="home-separator6"></hr>
      <SportLotterySection
        text={
          <Fragment>
            <span className="home-text49">
              Прогнозируй спорт — выигрывай как в лотерее
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text50">
              Выбери исходы спортивных матчей, используй интуицию и знание
              спорта, чтобы забрать главный приз
            </span>
          </Fragment>
        }
        heading={
          <Fragment>
            <span className="home-text51">Спортивные лотереи</span>
          </Fragment>
        }
        rootClassName="sport-lottery-sectionroot-class-name"
      ></SportLotterySection>
      <hr className="home-separator7"></hr>
      <PromoStopOn7
        text2={
          <Fragment>
            <span className="home-text52">
              Нажми &quot;Стоп&quot; и поймай число 7!
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text53">0</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="home-text54">Старт</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text55">🎰 Поймай семерку!</span>
          </Fragment>
        }
        rootClassName="promo-stop-on7root-class-name"
        heading3={
          <Fragment>
            <span className="home-text56">Получите бонус</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text57">Введите номер телефона</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text58">Text</span>
          </Fragment>
        }
        button3={
          <Fragment>
            <span className="home-text59">Получитиь бонус</span>
          </Fragment>
        }
      ></PromoStopOn7>
      <hr className="home-separator8"></hr>
      <ClassicLotterySection
        text1={
          <Fragment>
            <span className="home-text60">
              <span>Классика лотерей — большие розыгрыши каждую неделю.</span>
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
        }
        heading1={
          <Fragment>
            <span className="home-text64">Классические лотереи</span>
          </Fragment>
        }
        imageSrc5="/imagePopularLottery/classic_5_rus-1500w.png"
        imageSrc57="/imagePopularLottery/classic_8_rus-1500w.png"
        imageSrc58="/imagePopularLottery/classic_6_rus-1500w.png"
        imageSrc59="/imagePopularLottery/classic_2_rus-1500w.png"
        imageSrc510="/imagePopularLottery/classic_7_rus-1500w.png"
        imageSrc571="/imagePopularLottery/sportloto_1-300h.png"
        imageSrc581="/imagePopularLottery/classic_keno_rus-300h.png"
        imageSrc591="/imagePopularLottery/classic_4-1500w.png"
        rootClassName="classic-lottery-sectionroot-class-name"
      ></ClassicLotterySection>
      <hr className="home-separator9"></hr>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text65">
              Я привык рассчитывать, а не надеяться. Финансы — это про логику, а
              не удачу. Если повезло — что ж, приятно знать, что судьба за тобой
              следит.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text66">
              <span>
                В лотерею не играю — я просто работаю 25 часов в сутки. На удачу
                не надеюсь, потому что она устаёт раньше, чем я.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text69">
              Не верю в случайности. Любая случайность — это результат цепочки
              закономерностей, просто не всегда очевидных.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text70">
              Никогда не выигрывал. А хотелось. Видимо, стоило хоть раз купить
              билет… но всё время было некогда — работа, дела, жизнь...
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text71">
              Я пользуюсь этим сайтом уже много лет, чтобы выигрывать каждый
              день.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text72">Истории наших победителей</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text73">Сергей Х.</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text74">Владимир Д.</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text75">Вадим Л.</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text76">Дмитрий С</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text77">Lottery Enthusiast</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text78">Jackpot Winner</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text79">Game Guru</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text80">Lottery Fan</span>
          </Fragment>
        }
        author2Src="https://images.unsplash.com/photo-1621871766940-0a5df608a439?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIzOTAxOHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></Testimonial17>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text81">Наши лицензии</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text82">Правила и стратегия игры</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text83">Выигравшие номера и джекпоты</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text84">
              Discover tips and strategies to improve your chances of winning.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text85">
              Learn about different lottery games and their rules.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text86">
              Stay updated with the latest winning numbers and jackpot prizes.
            </span>
          </Fragment>
        }
      ></Features24>
      <Banner2
        action1={
          <Fragment>
            <span className="home-text87">Sign Up Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text88">
              Исследуйте мир захватывающих лотерей, игр и огромных джекпотов.
              Приготовьтесь играть и выигрывать!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text89">Национальная игровая экосистема</span>
          </Fragment>
        }
        rootClassName="banner2root-class-name"
      ></Banner2>
      <a
        href="https://goldbet.uz"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <OurPartners
          rootClassName="our-partnersroot-class-name"
          className="home-component22"
        ></OurPartners>
      </a>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text90">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text91">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text92">Privacy Policy</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text93">Terms and Conditions</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text94">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text95">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text96">Cookie Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text97">Privacy Policy</span>
          </Fragment>
        }
        logoSrc="/Logo/logo_gb_uz-1500h.png"
      ></Footer4>
      <LoginModal></LoginModal>
      <div className="home-container2">
        <div>
          <div className="home-container4">
            <Script
              html={`<style>
  body {
    overscroll-behavior: contain;
    touch-action: manipulation;
    margin: 0;
  }

  /* #LoginModal — внешний контейнер */
  #LoginModal {
    display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    box-sizing: border-box;
    flex-direction: column;
  }

  /* ModalWrapper — внутренняя обёртка */
  .modal-wrapper {
    background: white;
    inset: 0;
    width: 90%;
    max-width: 620px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 1rem;
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .modal-wrapper p {
    margin-bottom: 1rem;
  }

  .close-login {
    background: crimson;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
  }

  .login-button {
    margin: 2rem;
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
</style>


<script>
  function setupModalScript() {
    const modal = document.getElementById("LoginModal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".close-login");
    const wrapper = modal.querySelector(".modal-wrapper");
    const loginButtons = document.querySelectorAll(".login-button");

    loginButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });

    closeBtn?.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Закрытие при клике вне модального окна
    modal.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        modal.style.display = "none";
      }
    });
  }

  setTimeout(setupModalScript, 100);
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
