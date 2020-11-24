import { useState, useEffect } from 'react';

const Datalist = (props) => {
    console.log(props)
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		const getAllData = async () => {
			setAllData(props.snotelData);
		};
		getAllData();
	});

	const allAreas = allData.map((station) => {
		return (
			<div className='area-data' key={station.station_information.elevation}>
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
			</div>
		);
	});

	const loading = <h1>loading ... </h1>;

	return <div>{props.snotelData ? allAreas : loading}</div>;
};

export default Datalist;