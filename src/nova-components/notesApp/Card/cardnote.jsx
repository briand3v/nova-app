import "./cardNote.scss";
import React from "react";
import { Trash } from 'react-feather';
import { Image } from 'react-feather';
import { CheckCircle } from 'react-feather';
import { Mic } from 'react-feather';

const CardNote = props => {
	const imagestyle = {
		backgroundImage: 'url('+props.data.img+')',
		backgroundSize: 'cover'
	}
	let isnew = ''
	if(typeof props.new !== 'undefined' && props.new && props.firtsRender){
		isnew = 'cardleft'
	}


	console.log(props.id)
	
	return (
	<div id={props.id} className={"supernova-card first "+isnew} style={imagestyle}>
		<div className="container card-container">
			<div className="row content-column">
				<div className="column column-100 h-5p">
					<input id="titlecard" className="inputtext cardtitle" placeholder="Title"/>
				</div>
				
				<div className="column column-100 h-50p">
					<div className="row">
						<div className="column column-25 d-flex items-justify-between items-align-end">
							{
								props.new ? <div className="d-flex items-align-center"><CheckCircle className="mbrih ifeather hover-success-ifeather" color="white" size={24}/></div> : ''
							}
							<Trash className="mbrih ifeather m-l-10" color="white" size={20} onClick={(e) => {props.removeCard(e)}} />
							<Mic className="mbrih f-right ifeather" color="white" size={20} />
							<Image className="mbrih f-right ifeather" color="white" size={20} onClick={(e)=>{ props.openPopup(e) }} />
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

export default CardNote;
