import { useState } from 'react'
import './slider.scss' // Твои стили

const Slider = () => {
	// Массив элементов с текстами для экранов
	const sliderItems = [
		{
			id: 1,
			title: 'Первый экран',
			url: 'img/events/events1.png',
			text: 'Это контент первого экрана',
		},
		{
			id: 2,
			title: 'Второй экран',
			url: 'img/events/events1.png',
			text: 'Это контент второго экрана',
		},
		{
			id: 3,
			title: 'Третий экран',
			url: 'img/events/events1.png',
			text: 'Это контент третьего экрана',
		},
	]
	const slides = [
		{ url: 'img/events/events1.png', title: '1' },
		{ url: 'img/events/events2.png', title: '2' },
		{ url: 'img/events/events3.png', title: '3' },
	]

	// Хранение выбранного экрана
	const [selectedId, setSelectedId] = useState(null)

	// Обработчик клика
	const handleItemClick = id => {
		setSelectedId(id)
	}

	return (
		<div className='slider-container'>
			<div className='slider'>
				{sliderItems.map(item => (
					<img
						src={item.url}
						key={item.id}
						alt=''
						className='slider-item'
						onClick={() => handleItemClick(item.id)}
					></img>
				))}
			</div>

			{/* Отображение экрана, если выбран элемент */}
			{selectedId !== null && (
				<div className='screen'>
					<h2>{sliderItems.find(item => item.id === selectedId)?.title}</h2>
					<p>{sliderItems.find(item => item.id === selectedId)?.text}</p>
					<button onClick={() => setSelectedId(null)}>Закрыть</button>
				</div>
			)}
		</div>
	)
}

export default Slider
