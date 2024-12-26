import styles from "./Loading.module.scss";

export const Loading = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.justify_content_center + " " + styles.jimu_primary_loading}></div>
		</div>
	);
};
