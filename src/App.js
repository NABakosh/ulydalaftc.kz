import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Home"
import Footer from './Components/Footer'
import OurRobot from './OurRobot';
import OurTeam from './OurTeam';
import Event from './Event'
function App() {

	
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/robot' element={<OurRobot />} />
					<Route path='/team' element={<OurTeam />} />
					<Route path='/events' element={<Event/>} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App;
