import Link from 'next/link';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.title}>
			<Link href='/'>
				<a className={styles.header}>avy savvy</a>
			</Link>
			<Link href='/backcountry/form'>
				<a className={styles.link}>backcountry</a>
			</Link>
			<Link href='/photos'>
				<a className={styles.link}>photos</a>
			</Link>
			{children}
		</div>
	);
};

export default Layout;
