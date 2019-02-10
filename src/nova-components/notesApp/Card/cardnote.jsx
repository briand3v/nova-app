import "./cardNote.scss";
import React from "react";


const text = 'This field is for reading briefly your note if behave like a simple note, in other case I have to think other funtionalities';

const CardNote = props => {
	const imagestyle = {
		backgroundImage: 'url('+props.data.img+')',
		backgroundSize: 'cover'
	}

	const num = 1;
	return (
	<div className="supernova-card first" style={imagestyle}>
		<div className="container card-container">
			<div className="row content-column">
				<div className="column column-100 h-5p">
					<input id="titlecard" className="inputtext cardtitle" placeholder="Title"/>
				</div>
				
				<div className="column column-100 h-50p">
					<div className="row">
						<div className="column column-25">
							<span className="mbrih mbri-photo f-right"
							onClick={(e)=>{ props.openPopup(e) }}></span>
						</div>
						<div className="column column-50">
							<textarea id="desccard" className="cardtext" placeholder="Card description"></textarea>
						</div>
						<div className="column column-25">Second block</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};


const trimText = (string, length) => { 
	const trimmedString = string.length > length ? string.substring(0, length) + '...' 
						: string
	return trimmedString
}



export default CardNote;
