import Head from 'next/head';
import Link from 'next/Link';
import styles from '../styles/Home.module.scss';
import Footer from './footer';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<div className={styles.container}>
				<Head>
					<title>Avy Savvy</title>
					<link rel='icon' href='../public/snow.png' />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>Avy Savvy</h1>

					<Link href='/backcountry/form'>
						<button className={styles.button}>enter</button>
					</Link>

					<div>
						<p className={styles.text}>
							Skiing is inherently dangerous. If you are planning on leaving a
							resort and entering the backcountry, make sure you have the proper
							equipment, knowledge, a partner, and a plan. If you don't know,
							DON'T GO!
						</p>
						<p className={styles.text}>
							This app is not meant to and{' '}
							<span style={{ fontWeight: '700' }}>will not</span> replace proper
							backcountry training. If you have not skied backcountry before,
							please consider taking an Avalanche Safety Level I course at a
							minimum before entering the backcountry.
						</p>
					</div>
				</main>

				<Footer className={styles.footer} />
			</div>
		</Layout>
	);
}
