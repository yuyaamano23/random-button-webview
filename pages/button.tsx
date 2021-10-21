import Link from "next/link";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { countState } from "../atoms";
import styles from "../styles/Button.module.css";

const Button: FC = () => {
	// recoil
	const [count, setCount] = useRecoilState<number>(countState);
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
