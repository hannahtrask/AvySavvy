import { useState, useEffect } from 'react';
import styles from '../../styles/datalist.module.scss';
import Link from 'next/link';

const Datalist = (props) => {
	console.log(props);
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		const getAllData = async () => {
			setAllData(props.snotelData);
		};
		getAllData();
	});

	// <div key={index}>
	// 	<Link href={`/${e.vehicle}/${e.name}`}>
	// 		<a>
	// 			navigate to {e.name}'s {e.vehicle}
	// 		</a>
	// 	</Link>

	const allAreas = allData.map((station) => {
		return (
			<div
				className={styles.station}
				key={station.station_information.elevation}>
				<h2>{station.station_information.name}</h2>
				<h3>elevation: {station.station_information.elevation}</h3>
				<p>
					<span className='bold'>latitude:</span>{' '}
					{station.station_information.location.lat}
				</p>
				<p>
					<span className='bold'>longitude:</span>{' '}
					{station.station_information.location.lng}
				</p>
				<p>
					<Link href={`/backcountry/${station.station_information.name}`}>click</Link>
				</p>
			</div>
		);
	});

	const loading = <h1>loading ... </h1>;

	return (
		<>
			<div className={styles.flex}>{props.snotelData ? allAreas : loading}</div>
		</>
	);
};

export default Datalist;
