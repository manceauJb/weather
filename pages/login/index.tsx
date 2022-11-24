import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Login() {
	return (
		<div>
			<Head>
				<title>Login</title>
			</Head>
			<h1 className={styles.title}>Login</h1>
		</div>
	);
}
