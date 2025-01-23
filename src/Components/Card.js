const Card = (props) =>{
    return(
        <div>
            <img src={props.photoUrl} alt='team-photo'/>
            <p>{props.name}</p>
            <span>{props.role}</span>
		</div>
    )
}

export default Card