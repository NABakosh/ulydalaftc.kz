import { FaYoutube, FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer>
			<article>
				<h2>Contact us</h2>
				<p>
					<img
						alt='Location'
						src='img/footer/location_on.png'
						className='location'
					/>
					Kazakhstan, Almaty, Gymnasium No. 140 named after Mukagali Makatayev
				</p>
				<p>
					<img alt='Phone' src='img/footer/phone.png' />
					Call us: +7 747 352 7515
				</p>
				<p>
					<img alt='Mail' src='img/footer/mail.png' />
					ulydalapochta@juz40.com
				</p>
			</article>
			<aside>
				<h2>Follow us</h2>
				<div className='social-network'>
					<a href='https://youtube.com/@ulydala-ftc?si=neGIR1InCPeoN0sR'>
						<FaYoutube size={70} color='#DBAE46' />
					</a>
					<a href='https://www.instagram.com/ulydala_.ftc?igsh=MWYxbng4ZnZmZW05Nw=='>
						<FaInstagram size={70} color='#DBAE46' />
					</a>
					<a href='https://t.me/UlyDalaFirst_bot'>
						<FaTelegram color='#DBAE46' size={70} />
					</a>
					<a href='https://www.tiktok.com/@ulydala_ftc?_t=8rRDfX86u1f&_r=1'>
						<FaTiktok color='#DBAE46' size={70} />
					</a>
				</div>
			</aside>
		</footer>
	)
}

export default Footer
