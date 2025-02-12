const TeamCard = (props) => {
    return (
			<div className='teampage-card'>
				<div>
					<img src={props.img} alt='' />
					<img className='oyu1' alt='' src='img/teampage/1.png' />
					<img className='oyu2' src='img/teampage/2.png' alt='' />
				</div>
				<p>{props.name}</p>
				<span>{props.role}</span>
			</div>
		)
}

export default TeamCard