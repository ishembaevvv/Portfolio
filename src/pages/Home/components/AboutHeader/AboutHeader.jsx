import styles from "../../Home.module.scss";
import flag from "../../../../assets/icons/kg.png";
import { useTranslation } from "react-i18next";
import { PATH } from "../../../../utils/constants/Constants";
import { useNavigate } from "react-router-dom";

export const AboutHear = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className={styles.about}>
			<h2 onClick={() => navigate(PATH.about)}>{t("home.about.about me")}</h2>

			<div className={styles.texts}>
				<p>
					{t("home.about.Kyrgyzstan")}{" "}
					<img className={styles.flag} src={flag} alt="kg" />.
				</p>
				<p>{t("home.about.Responsible")}.</p>
				<p>{t("home.about.further")}.</p>
			</div>
		</div>
	);
};
