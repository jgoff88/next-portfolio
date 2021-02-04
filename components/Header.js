import headerStyles from '../styles/Header.module.scss';
const Header = () => {
	const x = 5;
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Web</span> Designer
			</h1>
		</div>
	);
};

export default Header;
