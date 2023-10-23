import React from 'react';



const Cards = ({name, email, id}) => {
	return (
		<div className = 'bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt="robohash" src={`https://robohash.org/${id}?200x200`}></img>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>	
		</div>			
	);
}

export default Cards;