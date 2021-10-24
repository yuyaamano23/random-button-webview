import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { countState } from "../atoms";
import styles from "../styles/Button.module.css";
import Router from "next/router";
import { AiOutlineReload } from "react-icons/ai";

const Button: FC = () => {
	const [randnum, setRandnum] = useState<number>(0);
	// recoil
	const [count, setCount] = useRecoilState<number>(countState);
	useEffect(() => {
		setRandnum(1 + Math.floor(Math.random() * 30));
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				{randnum == count ? (
					<>
						<h1>Bomb!!!!</h1>
						<div
							onClick={() => {
								Router.reload();
							}}
						>
							<AiOutlineReload />
							もういちど
						</div>
					</>
				) : (
					<>
						<h3>count : {count}</h3>
						<a
							className={styles.btnEmergencyReal}
							onClick={() => {
								setCount(count + 1);
							}}
						>
							<span className={styles.btnEmergencyRealBottom}></span>
							<span className={styles.btnEmergencyRealTop}>
								<span>押す</span>
							</span>
						</a>
					</>
				)}
				<div>buttonのページだお</div>
				<Link href="/">
					<a>To main page</a>
				</Link>
			</div>
		</div>
	);
};
export default Button;
