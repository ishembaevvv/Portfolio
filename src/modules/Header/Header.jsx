import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import { PATH } from "../../utils/constants/Constants";
import styles from "./Header.module.scss";
import i18n from "../../utils/helpers/i1next";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [language, setLanguage] = useLocalStorage("language", "en");

	const handleLanguageChange = () => {
		if (language == "en") {
			i18n.changeLanguage("ru");
			setLanguage("ru");
		} else if (language == "ru") {
			i18n.changeLanguage("en");
			setLanguage("en");
		}
	};

	return (
		<header className={styles.header}>
			<a href="tel:+996702380990">
				<FaPhoneAlt /> +996 (702) 380 990
			</a>

			<ul className={styles.list}>
				<li onClick={() => navigate(PATH.main)}>{t("header.home")}</li>
				<li onClick={() => navigate(PATH.about)}>{t("header.about")}</li>
				<li onClick={() => navigate(PATH.works)}>{t("header.works")}</li>
				<li onClick={() => navigate(PATH.skills)}>{t("header.skills")}</li>
				<li onClick={() => navigate(PATH.contacts)}>{t("header.contacts")}</li>
			</ul>

			<h3 className={styles.language} onClick={handleLanguageChange}>
				{language == "ru" ? "EN" : "RU"}
			</h3>
		</header>
	);
};
