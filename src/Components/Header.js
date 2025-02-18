import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='list'>
					<Link to='/'>Home</Link>
					<Link to='/events'>Events</Link>
					<img src='/img/home/logo.png' alt='Logo' />
					<Link to='/robot'>Robot</Link>
					<Link to='/team'>Team</Link>
				</ul>
			</nav>
		</header>
	)
}

export default Header
