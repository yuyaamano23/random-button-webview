import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { countState } from "../atoms";
import styles from "../styles/Button.module.css";

const Button: FC = () => {
	const [randnum, setRandnum] = useState<number>(0);
	const [isFinished, setIsFinished] = useState<boolean>(false);
	// recoil
	const [count, setCount] = useRecoilState<number>(countState);
	useEffect(() => {
		setRandnum(1 + Math.floor(Math.random() * 25));
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<h1>{randnum == count && <span>Bomb!!!!</span>}</h1>
				<h3>count : {count}</h3>
				<div
					className={styles.btnSquareShadow}
					onClick={() => setCount(count + 1)}
				>
					click!!!
				</div>
				<div>buttonのページだお</div>
				<Link href="/">
					<a>To main page</a>
				</Link>
			</div>
		</div>
	);
};
export default Button;
