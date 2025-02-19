import { Link } from 'react-router-dom'

const Event = () => {
	const events = [
		{ id: '1', url: 'img/events/events1.png' },
		{ id: '2', url: 'img/events/events2.png' },
		{ id: '3', url: 'img/events/events3.png' },
		{ id: '4', url: 'img/events/events4.png' },
		{ id: '5', url: 'img/events/events5.png' },
		{ id: '6', url: 'img/events/events6.png' },
		{ id: '7', url: 'img/events/events7.png' },
		{ id: '8', url: 'img/events/events8.png' },
		{ id: '9', url: 'img/events/events9.png' },
		{ id: '10', url: 'img/events/events10.png' },
		{ id: '11', url: 'img/events/events11.png' },
	]

	return (
		<div className='eventspage'>
			<h1>Events</h1>
			<article className='all-events'>
				<main>
					{events.map(event => (
						<Link key={event.id} to={`/event/${event.id}`}>
							<img width={300} src={event.url} alt={`Event ${event.id}`} />
						</Link>
					))}
				</main>
			</article>
		</div>
	)
}

export default Event
