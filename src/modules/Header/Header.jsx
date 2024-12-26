import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { PATH } from "../../utils/constants/Constants";
import styles from "./Header.module.scss";
import i18n from "../../utils/helpers/i1next";

export const Header = () => {
	const { t } = useTranslation();
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
				<li>
					<Link to={PATH.home}>{t("header.home")}</Link>
				</li>
				<li>
					<Link to={PATH.works}>{t("header.works")}</Link>
				</li>
				<li>
					<Link to={PATH.skills}>{t("header.skills")}</Link>
				</li>
				<li>
					<Link to={PATH.contacts}>{t("header.contacts")}</Link>
				</li>
			</ul>

			<div className={styles.contacts}>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/anatai-ishembaev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/ishembaevvv"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithubSquare />
						</a>
					</li>
					<li>
						<a href="https://mail.google.com/mail/?view=cm&to=ishembaevvv05@gmail.com">
							<MdEmail />
						</a>
					</li>
				</ul>
			</div>

			<h3 className={styles.language} onClick={handleLanguageChange}>
				{language == "ru" ? "EN" : "RU"}
			</h3>
		</header>
	);
};
