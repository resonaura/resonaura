import BWLogo from './assets/BWLogo.svg';

import Icon_YouTube from './assets/icons/01-YouTube.svg';
import Icon_Spotify from './assets/icons/02-Spotify.svg';
import Icon_YMusic from './assets/icons/03-YMusic.svg';
import Icon_VKMusic from './assets/icons/04-VKMusic.svg';
import Icon_ITunes from './assets/icons/05-ITunes.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <section className="TitleBlock">
          <img src={BWLogo} alt="иероглиф" className="Logo" />
          <h1>Выбери музыкальный сервис</h1>
          <h2>на свой вкус</h2>
        </section>
        <section className="Social">
          <a title="YouTube Music" className="SocialNetwork YTMusic" href="https://music.youtube.com/playlist?list=OLAK5uy_mA4XrnUU_QEPuOBD3dtOILvTzCkBSoZiA">
            <img src={Icon_YouTube} alt="YouTube Music"></img>
          </a>
          <a title="Spotify" className="SocialNetwork Spotify" href="https://open.spotify.com/artist/0KIXKuBKF6aV8zGRsSAi7y?si=58e79e02d5af4ee5">
            <img src={Icon_Spotify} alt="Spotify"></img>
          </a>
          <a title="Yandex Music" className="SocialNetwork YMusic" href="https://music.yandex.ru/artist/11005912">
            <img src={Icon_YMusic} alt="Yandex Music"></img>
          </a>
          <a title="VK Music" className="SocialNetwork VKMusic" href="https://vk.com/artist/ieroglif">
            <img src={Icon_VKMusic} alt="VK Music"></img>
          </a>
          <a title="Apple Music" className="SocialNetwork ITunes" href="https://music.apple.com/ru/artist/%D0%B8%D0%B5%D1%80%D0%BE%D0%B3%D0%BB%D0%B8%D1%84/1556214675">
            <img src={Icon_ITunes} alt="Apple Music"></img>
          </a>
        </section>
      </section>
    </div>
  );
}

export default App;
