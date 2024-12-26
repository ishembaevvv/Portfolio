import styles from "./Home.module.scss";
import robots from "../../assets/image/robots.png";

export const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div>
					<h1>Hi, I'm <b>Anatai</b>.</h1>
					<h1>Nice meet you!</h1>
				</div>
				
				<div className={styles.art}>
					<img src={robots} alt="avatar" />
				</div>
			</div>
		</div>
	);
};
