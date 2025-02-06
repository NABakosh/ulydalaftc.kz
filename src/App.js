import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Slider from './Components/Slider'
import Header from './Components/Header'
import Home from "./Home"
import Footer from './Components/Footer'
import OurRobot from './OurRobot';

function App() {

	
	return (
		<div className='App'>
		<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/OurRobot' element={<OurRobot />} />
				</Routes>
				<Footer/>
			</Router>
		</div>
	)
}

export default App;
