// components/Slider.js
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = () => {
	return (
		<Swiper
			spaceBetween={20} // Расстояние между слайдами
			navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }} // Подключаем кастомные кнопки
			loop={true} // Зацикленный скроллинг
			breakpoints={{
				768: { slidesPerView: 1.4 },
				1024: { slidesPerView: 3 },
			}}
		>
			{/* Левая стрелка */}
			<img className='arrow-left' src='img/events/arrowl.svg' alt='Left' />

			{/* Слайды */}
			<SwiperSlide>
				<img src='img/events/events1.png' alt='Slide 1' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='img/events/events1.png' alt='Slide 2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='img/events/events1.png' alt='Slide 3' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='img/events/events1.png' alt='Slide 4' />
			</SwiperSlide>

			{/* Правая стрелка */}
			<img className='arrow-right' src='img/events/arrowr.svg' alt='Right' />
		</Swiper>
	)
}

export default Slider
