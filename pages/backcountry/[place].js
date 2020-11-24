import { useRouter } from 'next/router';
import styles from '../../styles/place.module.scss';

const Place = () => {
	const router = useRouter();
	console.log(router)
	return (
		<>
			<h1 className={styles.header}>{router.query.place}</h1>
		</>
	);
};

export default Place;
