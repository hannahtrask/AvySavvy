import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/photos.module.scss';
import Footer from '../components/footer';
import Loader from '../components/loader';
import { motion } from 'framer-motion';

const buttonVariants = {
	hover: {
		scale: 1.3,
		textShadow: '0px 0px 8px rgb(255, 255, 255)',
		boxShadow: '0px 0px 8px rgb(255, 255, 255)',
		transition: {
			duration: 0.5,
		},
	},
};

export default function Photos() {
	const [photos, setPhotos] = useState([]);
	const url = 'https://avysavvy.herokuapp.com/avysavvy/images';

	const getPhotos = () => {
		axios
			.get(url)
			.then((res) => {
				setPhotos(res.data);
			})
			.then(() => console.log(photos))
			.catch((err) => console.log(err));
	};
	//eslint-disable-next-line
	useEffect(() => getPhotos(), []);

	const photoDisplay = () => (
		<>
			{photos &&
				photos.map((pic) => (
					<div className={styles.pic} key={pic.id}>
						<img src={pic.img} alt={pic.alt} className={styles.indiv} />
						<motion.button
							variants={buttonVariants}
							whileHover='hover'
							className='delete'
							onClick={() => removePic(pic)}>
							DELETE PIC
						</motion.button>
					</div>
				))}
		</>
	);

	const loading = <h1> loading ... </h1>;

	/* new pic */
	const emptyPic = { img: '', alt: '' };
	const [formData, setFormData] = useState(emptyPic);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleCreate = (newPic) => {
		fetch(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPic),
		}).then(() => {
			getPhotos();
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleCreate(formData);
	};

	/* remove a song */
	const removePic = (pic) => {
		console.log(pic);
		axios.delete(url + '/' + pic._id).then(() => getPhotos());
	};

	return (
		<div>
			<h1 className={styles.heading1}>gallery</h1>
			<h3 className={styles.heading2}>where can skiing take you?</h3>
			<div className={styles.flex}>
				{photos.length > 0 ? photoDisplay() : <Loader />}
			</div>
			<form onSubmit={handleSubmit} className={styles.form} id='form'>
				<h2>ADD A PIC</h2>
				<h4>image url</h4>
				<input
					type='text'
					name='img'
					value={formData.img}
					onChange={handleChange}
				/>
				<br />
				<h4>alternative text</h4>
				<input
					type='text'
					name='alt'
					value={formData.alt}
					onChange={handleChange}
				/>
				<br />
				<motion.input
					variants={buttonVariants}
					whileHover='hover'
					type='submit'
					value='ADD YOUR PIC'
					className={styles.button}
					onChange={handleChange}
				/>
			</form>
			<Link href='/'>
				<motion.button
					variants={buttonVariants}
					whileHover='hover'
					className={styles.button}>
					back home
				</motion.button>
			</Link>
			<Footer />
		</div>
	);
}
