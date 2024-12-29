import styles from "./Home.module.scss";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { AboutHear } from "./components/AboutHeader/AboutHeader";

export const Home = () => {

	return (
		<div className={styles.container}>
			<MainHeader />
			<AboutHear />
		</div>
	);
};
