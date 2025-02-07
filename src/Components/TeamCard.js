const TeamCard = (props) => {
    return (
			<div className='teampage-card'>
				<div>
					<img src={props.img} />
					<img className='oyu1' src='img/teampage/1.png' />
					<img className='oyu2' src='img/teampage/2.png' />
				</div>
				<p>{props.name}</p>
				<span>{props.role}</span>
			</div>
		)
}

export default TeamCard