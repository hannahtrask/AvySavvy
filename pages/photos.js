import { useState, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import axios from 'axios';
import Link from 'next/Link';

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				yoyo: Infinity,
				duration: 0.5,
			},
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
		},
	},
	animationTwo: {
		y: [0, -40],
		x: 0,
		transition: {
			y: {
				yoyo: Infinity,
				duration: 0.25,
				ease: 'easeOut',
			},
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
					<div
						className='indiv'
						drag
						dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
						dragElastic={0.5}>
						<img src={pic.img} alt={pic.alt} />
						<button className='delete' onClick={() => removePic(pic)}>
							DELETE PIC
						</button>
					</div>
				))}
		</>
	);

	const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
	const loading = (
		<>
			<motion.div
				className='loader'
				variants={loaderVariants}
				animate={animation}></motion.div>
			<div onClick={() => cycleAnimation()}></div>
		</>
	);

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
			<h1>gallery</h1>
			<h3>where can skiing take you?</h3>
			<div className='flex'>{photos.length > 0 ? photoDisplay() : loading}</div>
			<form onSubmit={handleSubmit} className='add-photo'>
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
				<input
					type='submit'
					value='ADD YOUR PIC'
					className='submit'
					onChange={handleChange}
				/>
			</form>
            <Link href='/'>
                <button>back home</button>
            </Link>
		</div>
	);
}
