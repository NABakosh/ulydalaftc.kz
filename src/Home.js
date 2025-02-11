import React, { useEffect, useRef, useState} from 'react'
import Card from './Components/Card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderItems from './data/sliderItems.json'
import { Link, useNavigate } from 'react-router-dom'

const PreviousButton = ({ onClick }) => (
	<img
		className='slick-prev custom-arrow'
		onClick={onClick}
		src='/img/events/arrowl.svg'
		alt='Previous'
	/>
)

const NextButton = ({ onClick }) => (
	<img
		className='custom-arrow slick-next'
		onClick={onClick}
		src='/img/events/arrowr.svg'
		alt='Next'
	/>
)



const SliderComponent = ({handleItemClick }) => {

	const settings = {
		prevArrow: <PreviousButton />,
		nextArrow: <NextButton />,
		draggable: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		infinite: true, // Включаем бесконечный режим
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: true,
		centerMode: true,
		centerPadding: '0px', // Убираем "отступы" по бокам
	}
 	
	return (
		<Slider {...settings}>
			{sliderItems.map(item => (
				<img
					className='slider'
					key={item.id}
					src={item.url}
					onClick={() => handleItemClick(item.id)}
				/>
			))}
		</Slider>
	)
}
const Home = () => {
	const navigate = useNavigate()

	const handleReadMore = id => {
		navigate(`/event/${id}`)
	}
	const handleOpenOverlay = id => {
		setSelectedId(id)
	}

	const handleCloseOverlay = () => {
		document
			.querySelector('.overlay.show-overlay')
			?.classList.add('hide-overlay')
		setTimeout(() => {
			setSelectedId(null) // Скрываем оверлей после завершения анимации
		}, 500) // Длительность анимации закрытия
	}

	const season = '2024' // Укажи нужный сезон
	const eventCode = 'KZCMP'
	const [selectedId, setSelectedId] = useState(null)

	// Обработчик клика
	const handleItemClick = id => {
		setSelectedId(id)
	}

	const events1 = useRef(null)
	const events2 = useRef(null)
	const events3 = useRef(null)
	const aboutUsRef1 = useRef(null)
	const aboutUsRef2 = useRef(null)
	const refs = [events1, events2, events3, aboutUsRef1, aboutUsRef2]
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					entry.target.classList.toggle('show', entry.isIntersecting)
				})
			},
			{ threshold: 0.4 }
		)

		refs.forEach(ref => ref.current && observer.observe(ref.current))
		return () => observer.disconnect()
	}, [])

	const arr = [
		{
			imageUrl: 'img/ourteam/team1.png',
			name: 'Zangar',
			role: 'mentor',
		},
		{
			imageUrl: 'img/ourteam/team3.png',
			name: 'Mira',
			role: 'mentor',
		},
		{
			imageUrl: 'img/ourteam/team2.png',
			name: 'Berik',
			role: 'mentor',
		},
	]
	return (
		<>
			<section className='home'>
				<div>
					<h1>Uly Dala</h1>
				</div>
			</section>
			<section className='events'>
				{sliderItems.map(item => (
					<div
						className={`overlay ${
							selectedId === item.id ? 'show-overlay' : ''
						}`}
						key={item.id}
						onClick={handleCloseOverlay}
					>
						<main onClick={e => e.stopPropagation()}>
							<span onClick={handleCloseOverlay}>x</span>
							<h1>{item.title}</h1>
							<div className='slice'></div>
							<article>
								<aside>
									<p>{item.text}</p>
									<img src={item.url2} />
								</aside>
								<p>{item.text2}</p>
							</article>
							<button className='button' onClick={() => handleReadMore(item.id)}>
								Read More
							</button>
						</main>
					</div>
				))}
				<h1 ref={events1}>Events </h1>
				<div className='slider-item' ref={events2}>
					<SliderComponent handleItemClick={handleOpenOverlay} />
				</div>
				<div className='seeAll' ref={events3}>
					<Link to='/events'>
						<p>See all</p>
					</Link>
				</div>
			</section>
			<div className='slice'></div>
			<section className='aboutus'>
				<article ref={aboutUsRef1}>
					<h1>ABOUT US</h1>
					<p>
						Team Uly Dala (27832) from Almaty, Kazakhstan, takes its name from
						the Kazakh phrase meaning "Great Valley," reflecting the vast steppe
						heritage of our ancestors. We embrace their spirit of exploration
						and innovation in the field of robotics, pushing boundaries and
						challenging ourselves each season.
					</p>
				</article>
				<aside ref={aboutUsRef2}>
					<main>
						<img width={670} height={380} src='img/aboutus/main.png' />
						<p>
							Our mission is to advance STEM learning by fostering innovation,
							problem-solving, and teamwork. Through hands-on experiences and
							competitive challenges, we develop skills that prepare us to
							become leaders and innovators. We strive to inspire Kazakhstan's
							youth to explore the limitless potential of technology and
							engineering.
						</p>
					</main>
					<nav>
						<section>
							<div>
								<img
									width={300}
									height={170}
									src='img/aboutus/aside1.png'
									style={{ objectFit: 'cover' }}
								/>
								<img
									width={300}
									height={170}
									src='img/aboutus/aside2.png'
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div>
								<img
									width={300}
									height={170}
									src='img/aboutus/aside3.png'
									style={{ objectFit: 'cover' }}
								/>
								<img
									width={300}
									height={170}
									src='img/aboutus/aside4.png'
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</section>
						<p>
							This website serves as a platform to showcase our robotics
							journey, highlight our projects and designs, and connect with the
							broader FTC community. It reflects our commitment to innovation
							and learning as we continuously grow, compete, and contribute to
							the future of STEM.
						</p>
					</nav>
				</aside>
			</section>
			<div className='slice'></div>
			<section className='ourteam'>
				<article>
					<h1>OUR TEAM</h1>
					<p>
						Our team consists 3 menots and 15 passionate members, who are
						excited about the project and are working hard to make it a success.
					</p>
				</article>
				<main>
					{arr.map(obj => (
						<Card name={obj.name} photoUrl={obj.imageUrl} role={obj.role} />
					))}
				</main>
				<button className='button'>
					READ MORE 
					<img width={55} src='img/events/barrow.svg' />
				</button>
			</section>
			<div className='slice'></div>

			<section className='sponsors'>
				<article>
					<h1>Our Sponsors</h1>
					<p>
						We are grateful to our sponsors for supporting our mission and
						helping us achieve our goals.
					</p>
				</article>
				<div>
					<img src='img/sponsors/1.png' />
					<img src='img/sponsors/2.png' />
					<img src='img/sponsors/3.png' />
					<img src='img/sponsors/4.png' />
					<img src='img/sponsors/5.png' />
					<img src='img/sponsors/6.png' />
				</div>
			</section>
		</>
	)
}
export default Home
