import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import LanguageDetector from 'i18next-browser-languagedetector';

import common_ua from "./translations/ua/common.json";
import common_en from "./translations/en/common.json";
import common_ru from "./translations/ru/common.json";

i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },  // React already does escaping
  resources: {
      ua: {
          common: common_ua               // 'common' is our custom namespace
      },
      en: {
          common: common_en
      },
      ru: {
        common: common_ru
      },
    },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
