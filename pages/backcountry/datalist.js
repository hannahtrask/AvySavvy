import { useState, useEffect } from 'react';
import styles from '../../styles/datalist.module.scss';
import Link from 'next/link';
import Place from './[place]';

const Datalist = (props) => {
	console.log(props);
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		const getAllData = async () => {
			setAllData(props.snotelData);
		};
        getAllData();
        console.log('this is allData', allData)
	});

	const allAreas = allData.map((station) => {
		return (
			<div
				className={styles.station}
				key={station.station_information.elevation}>
				<h2>{station.station_information.name}</h2>
                <h2><span className={styles.bold}>triplet</span>:{' '}{station.station_information.triplet}</h2>
				<h3>elevation: {station.station_information.elevation}</h3>
				<p>
					<span className={styles.bold}>latitude</span>:{' '}
					{station.station_information.location.lat}
				</p>
				<p>
					<span className={styles.bold}>longitude</span>:{' '}
					{station.station_information.location.lng}
				</p>
				<p>
					<Link href={`/backcountry/${station.station_information.triplet}`}>more info</Link>
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