import styles from "./Home.module.scss";
import robots from "../../assets/image/robots.png";
import flag from "../../assets/icons/kg.png";
import { useTranslation } from "react-i18next";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div>
					<h1>
						{t("home.title.Hi, I'm")} <b>{t("home.title.Anatai")}</b>.
					</h1>
					<h1>{t("home.title.Nice meet you")}!</h1>
				</div>

				<div className={styles.art}>
					<img src={robots} alt="avatar" />
				</div>
			</div>

			<div className={styles.about}>
				<h2>{t("home.about.about me")}</h2>

				<div className={styles.texts}>
					<p>{t("home.about.My name")} 👦🏻.</p>
					<p> {t("home.about.years")} ☺.</p>
					<p>
						{t("home.about.Kyrgyzstan")}{" "}
						<img className={styles.flag} src={flag} alt="kg" />.
					</p>
					<p>{t("home.about.Responsible")}.</p>
					<p>{t("home.about.further")}.</p>
				</div>
			</div>
		</div>
	);
};
