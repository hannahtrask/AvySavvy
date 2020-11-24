import { useRouter } from 'next/router';

const Place = () => {

	const router = useRouter();
	console.log(router)
	return (
		<>
			<h1>{router.query.place}</h1>
		</>
	);
};

export default Place;
