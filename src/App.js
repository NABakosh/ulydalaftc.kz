import './index.scss';
import Slider from './Slider'
function App() {
  return (
		<div className='App'>
			<section className='events'>
				<h1>Events</h1>
				<div>
					<img src='img/events/arrowl.svg' />
					<img src='img/events/events1.png' alt='Slide 1' />
					<img src='img/events/events1.png' alt='Slide 1' />
					<img src='img/events/events1.png' alt='Slide 1' />
					<img src='img/events/arrowr.svg' />
				</div>
				<button>
					READ MORE <img width={55} src='img/events/barrow.svg' />
				</button>
			</section>
		</div>
	)
}

export default App;
