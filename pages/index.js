import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';
import Layout from '../components/layout';
import { motion } from 'framer-motion';

const buttonVariants = {
	hover: {
		scale: 1.3,
		textShadow: '0px 0px 8px rgb(255, 255, 255)',
		boxShadow: '0px 0px 8px rgb(255, 255, 255)',
		transition: {
			duration: 0.5
		},
	},
};

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Layout>
					<Head>
						<title>Avy Savvy</title>
						<link rel='icon' href='/snow.svg' />
					</Head>
				</Layout>

				<main className={styles.main}>
					<h1 className={styles.title}>Avy Savvy</h1>

					<Link href='/backcountry/form'>
						<motion.button variants={buttonVariants} whileHover='hover' className={styles.button}>enter</motion.button>
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
			</div>
			<Footer />
		</div>
	);
}
