import "./cardNote.scss";
import React from "react";
import { Trash } from 'react-feather';
import { Image } from 'react-feather';
import { CheckCircle } from 'react-feather';
import { Mic } from 'react-feather';

const CardNote = props => {

	const imagestyle = {
		backgroundImage: 'url('+props.data.img+')',
		backgroundSize: 'cover',
		borderRadius: '6px'
	}

	return (



	<div id={props.id} className="row m-l-0 supernova-card">

		<div className="column column-10 card_delete ocult m-b-0 p-0 d-flex content-column items-justify-around">
			<div className="w-100p h-50p d-flex items-align-center items-justify-center card-red">
				<p className="m-b-0 text-center">Delete</p>
			</div>
			<div className="w-100p h-50p d-flex items-align-center items-justify-center">
				<p className="m-b-0 text-center">Cancel</p>
			</div>
		</div>

		<div id={"card#"+props.id} className="column column-100 first m-l-0 m-b-0 p-15 anim_shadow" style={imagestyle}>
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
								<textarea onBlur={(e) => {props.focusOut(e)}} onChange={(e) => {props.handleChangeText(e)}} className="cardtext" placeholder="Card description" value={props.text}></textarea>
							</div>
							<div className="column column-25">Second block</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	);
};

export default CardNote;
