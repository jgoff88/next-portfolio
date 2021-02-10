import headerStyles from '../styles/Header.module.scss';
import 'tailwindcss/tailwind.css';
const Header = () => {
	const x = 5;
	return (
		<div className="animate-spin">
			<h1 className={headerStyles.title}>
				<span>Web</span> Designer
			</h1>
		</div>
	);
};

export default Header;
