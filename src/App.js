import './index.scss';
import Slider from './Components/Slider'
import Header from './Components/Header'
import Card from './Components/Card'

function App() {
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
		<div className='App'>
			<Header />
			<section className='home'>
				<div>
					<h1>Uly Dala</h1>
				</div>
			</section>
			<section className='events'>
				<h1>Events</h1>
				<div>
					<img src='img/events/arrowr.svg' />
					<img src='img/events/events1.png' alt='Slide 1' />
					<img src='img/events/events1.png' alt='Slide 1' />
					<img src='img/events/events1.png' alt='Slide 1' />
					<img src='img/events/arrowr.svg' />
				</div>
				<button>
					READ MORE 
					<img width={55} src='img/events/barrow.svg' />
				</button>
			</section>
			<section className='aboutus'>
				<article>
					<h1>ABOUT US</h1>
					<p>
						Team Uly Dala (27832) from Almaty, Kazakhstan, takes its name from
						the Kazakh phrase meaning "Great Valley," reflecting the vast steppe
						heritage of our ancestors. We embrace their spirit of exploration
						and innovation in the field of robotics, pushing boundaries and
						challenging ourselves each season.
					</p>
				</article>
				<aside>
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
							<img width={130} height={156} src='img/ourrobot/1.png' />
							<img width={130} height={156} src='img/ourrobot/2.png' />
							<img width={130} height={156} src='img/ourrobot/3.png' />
							<img width={130} height={156} src='img/ourrobot/4.png' />
							<img width={111} height={145} src='img/ourrobot/5.png' />
							<img width={130} height={100} src='img/ourrobot/6.png' />
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
							our skills and experience. Ultimately, our mission is not just to
							build great robots but to foster a passion for science,
							technology, engineering, and math (STEM) while pushing the
							boundaries of what’s possible in competitive robotics.
						</p>
					</div>
					<nav>
						<img />
						<p>
							For more precise information you can watch our tutorials on
							YouTube !
						</p>
					</nav>
				</aside>
			</section>
		</div>
	)
}

export default App;
