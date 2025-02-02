import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Slider from './Components/Slider'
import Header from './Components/Header'
import AboutUs from './AboutUs'
import Home from "./Home"

function App() {

	
	return (
				<div className='App'>
		<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/AboutUs' element={<AboutUs />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;
