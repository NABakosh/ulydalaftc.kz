import TeamCard from "./Components/TeamCard"

const OurTeam = () => {
    const arr = [
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
			{ img: 'img/teampage/muha1.png', name: 'Merey', role: 'Captain' },
		]
    return (
			<>
				<div className='teampage'>
					<h1>OUR TEAM</h1>
					<main>
						{arr.map(obj => (
							<TeamCard img={obj.img} name={obj.name} role={obj.role} alt={obj.name} />
						))}
					</main>
				</div>
			</>
		)
}
export default OurTeam