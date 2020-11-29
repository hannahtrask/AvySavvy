import { useRouter } from 'next/router';
import styles from '../../styles/place.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';
import Chart from 'chart.js';
import { motion } from 'framer-motion';

const buttonVariants = {
	hover: {
		scale: 1.3,
		textShadow: '0px 0px 8px rgb(255, 255, 255)',
		boxShadow: '0px 0px 8px rgb(255, 255, 255)',
		transition: {
			duration: 0.2,
		},
	},
};

const Place = () => {
	const router = useRouter();

	useEffect(() => {
		const placeAPICall = async () => {
			try {
				const snotel = `https://avysavvy.herokuapp.com/`;
				const triplet = router.query.place;
				const response = await fetch(snotel + `request/${triplet}`);
				const json = await response.json();
				const formattedDepthData = prepareData(json);
				createDepthChart(formattedDepthData);
				const formattedSWEData = prepareSWEData(json);
				createSWEChart(formattedSWEData);
				setPlace(json);
			} catch (err) {
				console.log(err);
			}
		};
		placeAPICall();
		//eslint-disable-next-line
	}, []);

	const prepareSWEData = (data) => {
		const chartData = {
			labels: [],
			datasets: [
				{
					label: 'Change in Snow Depth(in)',
					data: [],
					backgroundColor: 'rgba(116, 160, 199, 0.4)',
					borderColor: 'rgba(116, 160, 199, 1)',
				},
				{
					label: 'Change in SWE(in)',
					data: [],
					backgroundColor: 'rgba(184, 137, 183, 0.7)',
					borderColor: 'rgba(184, 137, 183, 1)',
				},
			],
		};

		data.data.forEach((day) => {
			chartData.labels.push(day.Date);
			if (day['Change In Snow Depth (in)'] > 0) {
				chartData.datasets[0].data.push(day['Change In Snow Depth (in)']);
			} else {
				chartData.datasets[0].data.push(0);
			}
			if (day['Change In Snow Water Equivalent (in)'] > 0) {
				chartData.datasets[1].data.push(
					day['Change In Snow Water Equivalent (in)']
				);
			} else {
				chartData.datasets[1].data.push(0);
			}
		});

		return chartData;
	};

	const prepareData = (data) => {
		const chartData = {
			labels: [],
			datasets: [
				{
					label: 'Snow Depth(in)',
					data: [],
					backgroundColor: 'rgba(116, 160, 199, 0.4)',
					borderColor: 'rgba(116, 160, 199, 1)',
				},
				{
					label: 'SWE (in)',
					data: [],
					backgroundColor: 'rgba(184, 137, 183, 0.7)',
					borderColor: 'rgba(184, 137, 183, 1)',
				},
			],
		};

		data.data.forEach((day) => {
			chartData.labels.push(day.Date);
			if (day['Snow Depth (in)'] > 0) {
				chartData.datasets[0].data.push(day['Snow Depth (in)']);
			} else {
				chartData.datasets[0].data.push(0);
			}
			if (day['Snow Water Equivalent (in)'] > 0) {
				chartData.datasets[1].data.push(day['Snow Water Equivalent (in)']);
			} else {
				chartData.datasets[1].data.push(0);
			}
		});
		return chartData;
	};

	const createDepthChart = (data) => {
		const context = document.querySelector('#depth');
		// eslint-disable-next-line
		const tempsChart = new Chart(context, {
			type: 'line',
			data: data,
		});
	};

	const createSWEChart = (data) => {
		const context = document.querySelector('#swe');
		// eslint-disable-next-line
		const tempsChart = new Chart(context, {
			type: 'line',
			data: data,
		});
	};

	return (
		<>
			<h1 className={styles.header}>{router.query.place}</h1>
			<div className={styles.chart}>
				<br />
				<h3 className={styles.title}>Depth</h3>
				<h3 className={styles.title}>Snow Water Equivalent and Snowpack</h3>
				<canvas id='depth' width='300' height='100'></canvas>
			</div>
			<div className={styles.chart}>
				<h3 className={styles.title}>Change</h3>
				<h3 className={styles.title}>SWE and Snowpack</h3>
				<canvas id='swe' width='300' height='100'></canvas>
			</div>
			<motion.button
				variants={buttonVariants}
				whileHover='hover'
				className={styles.button}>
				<Link href='/'>home</Link>
			</motion.button>
		</>
	);
};

export default Place;
