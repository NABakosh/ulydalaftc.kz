import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import eventData from "../data/eventdata.json"

const EventDetails = () => {
	 const { id } = useParams()
		const [event, setEvent] = useState(null)

		useEffect(() => {
			
			const foundEvent = eventData.find(event => event.id === id)
			setEvent(foundEvent)
		}, [id])
		if (event === '1') {
			console.log(`id:${id}`)
		}
		if (!event) return <p>Event not found</p>
	return (
		<div className='eventspage'>
			<h1 className='event-title'>{event.title}</h1>
			<article>
				{event.data.map((data, index) => (
					<div
						key={id}
						className={`event-${data.id}  ${
							index % 2 === 0 ? 'normal' : 'reverse'
						}`}
					>
						<img alt='' src={data.url} />
						<p>{data.text}</p>
					</div>
				))}
			</article>
		</div>
	)
}
export default EventDetails
