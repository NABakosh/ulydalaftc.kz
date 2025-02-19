import TeamCard from './Components/TeamCard'

const OurTeam = () => {
	const arr = [
		{ id: 1, img: 'img/teampage/merei.png', name: 'Merey', role: 'Captain' },
		{ id: 2, img: 'img/teampage/ai.png', name: 'Aikhanym', role: 'Inspire' },
		{ id: 3, img: 'img/teampage/zhanik.png', name: 'Zhanasyl', role: 'Driver' },
		{
			id: 4,
			img: 'img/teampage/adiya.png',
			name: 'Adiya',
			role: '3D designer',
		},
		{ id: 5, img: 'img/teampage/saniya.png', name: 'Saniya', role: 'SMM' },
		{
			id: 6,
			img: 'img/teampage/vlad.png',
			name: 'Vladislav',
			role: 'Programmer',
		},
		{
			id: 7,
			img: 'img/teampage/muha.png',
			name: 'Muhamedzhan',
			role: 'Electronical engineer',
		},
		{ id: 8, img: 'img/teampage/aisha.png', name: 'Aisha', role: 'Handbook' },
		{ id: 9, img: 'img/teampage/sun.png', name: 'Sungyla', role: 'Programmer' },
		{ id: 10, img: 'img/teampage/amina.png', name: 'Amina', role: 'Outreach' },
		{
			id: 11,
			img: 'img/teampage/alikhan.png',
			name: 'Alikhan',
			role: '3D cader',
		},
		{
			id: 12,
			img: 'img/teampage/aiya.png',
			name: 'Aiya',
			role: 'Human player',
		},
	]

	return (
		<div className='teampage'>
			<h1>OUR TEAM</h1>
			<main>
				{arr.map(obj => (
					<TeamCard
						id={obj.id} // Уникальный ключ // Правильная строка
						img={obj.img}
						name={obj.name}
						role={obj.role}
						alt={obj.name}
					/>
				))}
			</main>
		</div>
	)
}

export default OurTeam
