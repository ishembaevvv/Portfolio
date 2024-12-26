import en from "../langs/en/en.json";
import ru from "../langs/ru/ru.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: en,
	},
	ru: {
		translation: ru,
	}	
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: JSON.parse(localStorage.getItem('language')),
		fallbacking: "en",
	});

	export default i18n;