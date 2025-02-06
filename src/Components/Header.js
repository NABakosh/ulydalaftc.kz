import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
				<img width={75} height={97} src='img/home/logo.png' alt='Logo' />
				<Link to='/'>Home</Link>
				<Link to='/OurRobot'>Our Robot</Link>
			</nav>
		</header>
	)
}

export default Header
