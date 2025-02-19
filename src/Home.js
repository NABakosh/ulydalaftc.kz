import React, { useEffect, useRef, useState} from 'react'
import Card from './Components/Card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderItems from './data/sliderItems.json'
import { Link, useNavigate } from 'react-router-dom'
import './adaptive.scss'



const SliderComponent = ({handleItemClick }) => {

	const settings = {
		draggable: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		infinite: true, // Включаем бесконечный режим
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 2,
		pauseOnHover: true,
		centerMode: true,
		centerPadding: '0px', // Убираем "отступы" по бокам
		responsive: [
			{
				breakpoint: 500,
				settings:{
					dots:true,
				}
			}
		]
	}
 	
	return (
		<Slider {...settings}>
			{sliderItems.map(item => (
				<div key={item.id}>
					<img
						alt=''
						className='slider'
						src={item.url}
						onClick={() => handleItemClick(item.id)}
					/>
				</div>
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
	const ourteam1 = useRef(null)
	const ourteam2 = useRef(null)
	const ourteam3 = useRef(null)
	const aboutUsRef1 = useRef(null)
	const aboutUsRef2 = useRef(null)
	const sponsors1 = useRef(null)
	const sponsors2 = useRef(null)
	const refs = [
		events1,
		events2,
		events3,
		aboutUsRef1,
		aboutUsRef2,
		ourteam1,
		ourteam2,
		ourteam3,
		sponsors1,
		sponsors2
	]
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					entry.target.classList.toggle('show', entry.isIntersecting)
				})
			},
			{ threshold: 0.2 }
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
			<section className={`events ${selectedId ? 'open' : ''}`}>
				<div className='background'>
					<img src='img/background/1.png' />
				</div>
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
									<img alt='' src={item.url2} />
								</aside>
								<p>{item.text2}</p>
							</article>
							<button
								className='button'
								onClick={() => handleReadMore(item.id)}
							>
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
				<div className='background'>
					<img src='img/background/2.png' />
				</div>
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
						<img alt='' width={670} height={380} src='img/aboutus/main.png' />
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
						<p>
							This website serves as a platform to showcase our robotics
							journey, highlight our projects and designs, and connect with the
							broader FTC community. It reflects our commitment to innovation
							and learning as we continuously grow, compete, and contribute to
							the future of STEM.
						</p>
						<section>
							<div>
								<img
									width={300}
									alt=''
									height={170}
									src='img/aboutus/aside3.png'
									style={{ objectFit: 'cover' }}
								/>
								<img
									width={300}
									height={170}
									alt=''
									src='img/aboutus/aside2.png'
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className='footer-images'>
								{/* <img
									width={300}
									height={170}
									alt=''
									src='img/aboutus/aside3.png'
									style={{ objectFit: 'cover' }}
								/> */}
								<img
									alt=''
									src='img/aboutus/image (8) 1.png'
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</section>
					</nav>
				</aside>
			</section>
			<div className='slice'></div>
			<section className='ourteam'>
				<div className='background'>
					<img src='img/background/1.png' />
				</div>
				<article ref={ourteam1}>
					<h1>OUR TEAM</h1>
					<p>
						Our team consists 3 menots and 15 passionate members, who are
						excited about the project and are working hard to make it a success.
					</p>
				</article>
				<main ref={ourteam2}>
					{arr.map(obj => (
						<Card name={obj.name} photoUrl={obj.imageUrl} role={obj.role} />
					))}
				</main>
				<button className='button' ref={ourteam3}>
					Read More 
				</button>
			</section>
			<div className='slice'></div>
			<section className='sponsors'>
				<article ref={sponsors1}>
					<h1>Our Sponsors</h1>
					<p>
						We are <span className='span'>grateful</span> to our sponsors for{' '}
						<span className='span'>supporting</span> our mission and helping us
						achieve our goals.
					</p>
				</article>
				<div ref={sponsors2}>
					<a href='https://www.instagram.com/explore/locations/802558641/skola-gimnazia-140-im-m-makataeva/'>
						<img src='img/sponsors/1.png' alt='' />
					</a>
					<a href='https://farabi.university/'>
						<img src='img/sponsors/2.png' alt='' />
					</a>
					<a href='http://damutech.kz/'>
						<img src='img/sponsors/3.png' alt='' />
					</a>
					<a href='http://almaty.daryny.kz/'>
						<img src='img/sponsors/4.png' alt='' />
					</a>
					<a href=''>
						<img src='img/sponsors/5.png' alt='' />
					</a>
					<a href='https://metu.edu.kz/'>
						<img src='img/sponsors/6.png' alt='' />
					</a>
				</div>
			</section>
		</>
	)
}
export default Home
