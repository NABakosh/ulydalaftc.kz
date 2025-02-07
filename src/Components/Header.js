import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/'>Events</Link>
				<img width={75} height={97} src='img/home/logo.png' alt='Logo' />
				<Link to='/OurRobot'>Robot</Link>
				<Link to='/OurTeam'>Team</Link>
			</nav>
		</header>
	)
}

export default Header
