import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Home'
import Footer from './Components/Footer'
import OurRobot from './OurRobot'
import OurTeam from './OurTeam'
import Event from './Event'
import EventDetails from './Components/EventDetails'
import LoadingScreen from './Components/LoadingScreen'
import { useEffect, useState } from 'react'

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Проверяем, загрузился ли уже документ
		if (document.readyState === 'complete') {
			setTimeout(() => setLoading(false), 1200)
		} else {
			// Добавляем слушатель загрузки страницы
			const handleLoad = () => {
				setTimeout(() => setLoading(false), 1200)
			}
			window.addEventListener('load', handleLoad)

			// Убираем слушатель при размонтировании
			return () => window.removeEventListener('load', handleLoad)
		}
	}, [])

	return (
		<>
			{loading && (
				<div className='loading-container'>
					<LoadingScreen />
				</div>
			)}
			<div className={`App ${loading ? 'content-hidden' : 'content-visible'}`}>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/robot' element={<OurRobot />} />
						<Route path='/team' element={<OurTeam />} />
						<Route path='/event/:id' element={<EventDetails />} />
						<Route path='/events' element={<Event />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	)
}

export default App
