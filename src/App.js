import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Slider from './Components/Slider'
import Header from './Components/Header'
import Home from "./Home"
import Footer from './Components/Footer'
import OurRobot from './OurRobot';
import OurTeam from './OurTeam';

function App() {

	
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/OurRobot' element={<OurRobot />} />
					<Route path='/OurTeam' element={<OurTeam />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App;
