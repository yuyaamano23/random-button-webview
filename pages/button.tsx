import Link from "next/link";
import React, { FC, useState } from "react";
import styles from "../styles/Button.module.css";

const Button: FC = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<h3>count : {count}</h3>
				<div
					className={styles.btnSquareShadow}
					onClick={() => setCount(count + 1)}
				>
					click!!!
				</div>
				<div>buttonのページだお</div>
				<Link href="/">
					<a>To button page</a>
				</Link>
			</div>
		</div>
	);
};
export default Button;
