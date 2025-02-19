import { Link } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
	const [isOpen,setIsOpen] = useState(false)
	const toggleMenu = () =>{
		setIsOpen(!isOpen)
	}
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='list'>
					<Link to='/'>Home</Link>
					<Link to='/events'>Events</Link>
					<Link to='/'>
						<img src='/img/home/logo.png' alt='Logo' />
					</Link>
					<Link to='/robot'>Robot</Link>
					<Link to='/team'>Team</Link>
				</ul>
			</nav>
			<nav className='burger'>
				<Link to='/'>
					<img width={75} src='/img/home/logo.png' alt='Logo' />
				</Link>
				<button onClick={toggleMenu}>
					<img width={40} height={30} src='/img/burger/burger.svg' />
				</button>
				<div className={`drawer ${isOpen ? 'open' : ''}`}>
					<article>
						<button onClick={toggleMenu}>
							<img src='/img/burger/z.svg' />
						</button>
					</article>
					<ul className='burger-list'>
						<div>
							<Link to='/' onClick={toggleMenu}>
								Home
							</Link>
						</div>
						<div>
							<Link to='/events' onClick={toggleMenu}>
								Events
							</Link>
						</div>
						<div>
							<Link to='/robot' onClick={toggleMenu}>
								Robot
							</Link>
						</div>
						<div>
							<Link to='/team' onClick={toggleMenu}>
								Team
							</Link>
						</div>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
