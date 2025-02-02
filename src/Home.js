import React, { useEffect, useRef } from 'react'
import Card from './Components/Card'

const Home = () => {
	const slides = [
		{ url: 'img/events/events1.png', title: '1' },
		{ url: 'img/events/events2.png', title: '2' },
		{ url: 'img/events/events3.png', title: '3' },
	]

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
				<div className='overlay'>
					<main>
						<h1>SDU STEM week</h1>
						<div className='slice'></div>
						<article>
							<aside>
								<p>
									Our team participated in the SDU STEM Week, where we had the
									opportunity to showcase our robot to students and professors.
									We introduced them to the exciting world of robotics,
									highlighting the potential of innovation and technology in
									shaping the future. It was an amazing experience to share our
									passion and inspire others!
								</p>
								<img src='img/events/overlay-sdu.png' />
							</aside>
							<p>
								During the event, we engaged with attendees, demonstrating the
								capabilities of our Robot and sparking conversations about the
								future of robotics and its impact on various industries.
							</p>
						</article>
						<button>Close</button>
					</main>
				</div>
				<h1 ref={events1}>Events</h1>
				<div ref={events2}>
					<img src='img/events/arrowl.svg' alt='Slide 2' />
					<img src='img/events/events2.png' alt='Slide 2' />
					<img src='img/events/events2.png' alt='Slide 2' />
					<img src='img/events/events2.png' alt='Slide 2' />
					<img src='img/events/arrowr.svg' alt='Slide 2' />
				</div>
				<button ref={events3}>
					READ MORE 
					<img width={55} src='img/events/barrow.svg' />
				</button>
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
				<button>
					READ MORE 
					<img width={55} src='img/events/barrow.svg' />
				</button>
			</section>
			<div className='slice'></div>
			<section className='ourrobot'>
				<article>
					<h1>OUR ROBOT</h1>
					<p>
						Our team’s approach to building competitive robots is grounded in
						innovation, precision, and adaptability. Each season presents a
						unique challenge, and we rise to meet it by designing robots that
						are not only functional but also efficient, reliable, and versatile.
						As the competition rules change every year, so does our robot’s
						design, construction, and features. This dynamic environment pushes
						us to constantly learn, improve, and refine our strategies and build
						techniques.
					</p>
				</article>
				<main>
					<div>
						<span> Advanced Tools for Precision Engineering</span>
						<p>
							Our team’s approach to building competitive robots is grounded in
							innovation, precision, and adaptability. Each season presents a
							unique challenge, and we rise to meet it by designing robots that
							are not only functional but also efficient, reliable, and
							versatile. As the competition rules change every year, so does our
							robot’s design, construction, and features. This dynamic
							environment pushes us to constantly learn, improve, and refine our
							strategies and build techniques.
						</p>
					</div>
					<div>
						<span> High-Quality Materials and Components</span>
						<p>
							{' '}
							To construct our robots, we rely on high-quality components
							sourced from trusted suppliers like GoBILDA and REV Robotics.
							These companies provide industry-leading parts, such as durable
							chassis components, precision motors, gear systems, sensors, and
							more. Using these professional-grade materials ensures our robots
							perform consistently under the pressures of competitive play.
							Additionally, we incorporate custom elements such as 3D-printed
							parts to tailor the robot’s capabilities to meet game-specific
							challenges.
						</p>
					</div>
				</main>
				<aside>
					<div className='robotSideBar'>
						<div>
							<img
								width={130 / 1.2}
								height={156 / 1.2}
								src='img/ourrobot/1.png'
							/>
							<img
								width={130 / 1.2}
								height={130 / 1.2}
								src='img/ourrobot/2.png'
							/>
							<img
								width={120 / 1.2}
								height={120 / 1.2}
								src='img/ourrobot/3.png'
							/>
							<img
								width={130 / 1.2}
								height={130 / 1.2}
								src='img/ourrobot/4.png'
							/>
							<img
								width={85 / 1.2}
								height={105 / 1.2}
								src='img/ourrobot/5.png'
							/>
							<img
								width={130 / 1.2}
								height={80 / 1.2}
								src='img/ourrobot/6.png'
							/>
						</div>
						<p>
							{' '}
							Our design and construction process is powered by teamwork and
							creative problem-solving. Every member contributes ideas and
							expertise, whether in mechanical design, programming, or strategy
							development. Collaboration fuels our success, enabling us to build
							innovative robots that adapt to the fast-paced nature of FTC
							competitions. As the season unfolds, we continuously test,
							evaluate, and refine our designs to achieve peak performance.
							Whether it's enhancing grip mechanisms, improving drive systems,
							or fine-tuning autonomous routines, our robot evolves along with
							our skills and experience.
							<br /> Ultimately, our mission is not just to build great robots
							but to foster a passion for science, technology, engineering, and
							math (STEM) while pushing the boundaries of what’s possible in
							competitive robotics.
						</p>
					</div>
					<nav>
						<img src='img/ourrobot/7.png' />
						<p>
							For more precise information you can watch our tutorials on
							YouTube !
						</p>
					</nav>
				</aside>
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
			<footer>
				<article>
					<h2>Contact us</h2>
					<p>
						<img src='img/footer/location_on.png' />
						Kazakhstan, Almaty, Gymnasium No. 140 named after Mukagali Makatayev
					</p>
					<p>
						<img src='img/footer/phone.png' />
						 Call us: +7 *** *** ****
					</p>
					<p>
						<img src='img/footer/mail.png' /> ulydalaprotech@gmail.com
					</p>
				</article>
				<div></div>
				<aside>
					<h2>Follow us</h2>
					<p>
						<img src='icons/youtube.png' alt='YouTube' />
						<img src='icons/instagram.png' alt='Instagram' />
						<img src='icons/telegram.png' alt='Telegram' />
					</p>
				</aside>
			</footer>
		</>
	)
}
export default Home
