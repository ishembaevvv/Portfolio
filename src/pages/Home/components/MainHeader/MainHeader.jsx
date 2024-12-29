import { useTranslation } from "react-i18next";
import styles from "../../Home.module.scss";
import robots from "../../../../assets/image/robots.png";

export const MainHeader = () => {
	const { t } = useTranslation();

	return (
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
	);
};
