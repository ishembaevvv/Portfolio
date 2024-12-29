import styles from "./Footer.module.scss";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.contacts}>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/anatai-ishembaev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin style={{ fontSize: 32 }} />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/ishembaevvv"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithubSquare style={{ fontSize: 32 }} />
						</a>
					</li>
					<li>
						<a href="https://mail.google.com/mail/?view=cm&to=ishembaevvv05@gmail.com">
							<MdEmail style={{ fontSize: 32 }} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
