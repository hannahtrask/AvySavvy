import Link from 'next/link';
import Datalist from './datalist';
import { useState } from 'react';
import styles from '../../styles/form.module.scss';
import Footer from '../../components/footer';
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

export default function Form() {
	const [areaData, setAreaData] = useState([]);
	const [snotelData, setSnotelData] = useState([]);
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [zipCode, setZipCode] = useState('');

	const handleSearch = async (zipcode) => {
		const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCMEjVA97XCiyFFpVaL1w8bFEw_KDERLuE&components=postal_code:${zipcode}`;
		const res = await fetch(googleApi);
		const json = await res.json();
		setAreaData(json.results);
		if (areaData.length > 0) {
			setLat(await areaData[0].geometry.location.lat);
			setLng(await areaData[0].geometry.location.lng);
		}
		const snotel = `https://avysavvy.herokuapp.com/`;
		const response = await fetch(snotel + `request/${lat}/${lng}`);
		const jsonObj = await response.json();
		console.log('this is jsonObj', jsonObj);
		setSnotelData(await jsonObj);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(zipCode);
		setZipCode();
	};

	return (
		<>
			<h1 className={styles.title}>Let's go skiing.</h1>
			<div className={styles.form}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h4 className={styles.text}>what's your zip?</h4>
					<input
						type='text'
						name='resort'
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
					<div>
						<motion.input
							variants={buttonVariants}
							whileHover='hover'
							type='submit'
							value='SEND IT'
							className={styles.button}
						/>
						<Link href='/photos'>
							<motion.button
								variants={buttonVariants}
								whileHover='hover'
								className={styles.button}>
								photo gallery
							</motion.button>
						</Link>
					</div>
				</form>
			</div>
			{snotelData && <Datalist snotelData={snotelData} />}
			<Link href='/'>
				<motion.button
					variants={buttonVariants}
					whileHover='hover'
					className={styles.button2}>
					back to home
				</motion.button>
			</Link>
			<Footer />
		</>
	);
}
