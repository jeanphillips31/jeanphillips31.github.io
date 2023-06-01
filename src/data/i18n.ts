import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from '../locales/en/en.json';
import japanese from '../locales/jp/jp.json';

const resources = {
    en: {
        translation: english,
    },
    jp: {
        translation: japanese,
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        debug: false,
        fallbackLng: 'en',
        saveMissing: true
    });

export default i18next;