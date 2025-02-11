import React, { useEffect, useState } from 'react'

const LoadingScreen = () => {
	const [hide, setHide] = useState(false)

	useEffect(() => {
		// Через 3 секунды экран начнет скрываться
		setTimeout(() => {
			setHide(true)
		}, 1400)
	}, [])

	return (
		<div className={`loading-screen ${hide ? 'hide' : ''}`}>
			<div className='container'>
				<img src='img/arqar.png' alt='Arqar' className='arqar' />
			</div>
		</div>
	)
}

export default LoadingScreen
