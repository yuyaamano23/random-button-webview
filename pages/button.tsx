import Link from "next/link";
import React, { FC } from "react";
import styles from "../styles/Button.module.css";

const Button: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.btnSquareShadow}>click!!!</div>
				<div>buttonのページだお</div>
				<Link href="/">
					<a>To button page</a>
				</Link>
			</div>
		</div>
	);
};
export default Button;
