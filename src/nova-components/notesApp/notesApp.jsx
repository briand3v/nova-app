import "./notesApp.scss";
import React from "react";
import CardNote from './Card/cardnote';
import ImagesPopup from '../Popups/ImagesPopup/ImagesPopup';
import { PlusCircle } from 'react-feather';

function template(state,addCard,iPopup,closeEvent,removeCard) {
	
  return (
    <div className="notes-app">
		<div className="container fit-left-content">
			<div className="row h-100p">
				<div className="column column-33">
					<div className="card notes-card">
						<div className="overlay p-20">
							<p className="text-white fw-500 fs-20">Briandev</p>
						</div>
					</div>
					<div className="notespanel">
						<div className="notespanel_one">
						<PlusCircle className="mbrih f-right ifeather m-t-10" color="white" size={30} onClick={(e)=> {addCard(e)}}/>
						</div>
						<div className="notespanel_two">
							<div className="d-flex content-row buttons">
								
							</div>
						</div>
					</div>
				</div>
				<div className="column column-67 superblock-cards">
					{/* data must be the data of each card in order to print it into the popupImages */}
					{
						state.cards.map((card,i) => {
							return (<CardNote id={card.id} data={card.data} openPopup={iPopup} removeCard={removeCard} new={card.new} key={i} animation={typeof card.animation !== 'undefined' ? card.animation : '' } firtsRender={state.firtsrender}/>)
						})
					}

				</div>
				<ImagesPopup objectId={'123sdalmk2331sde231d'} visible={state.impagesPopup} closeEvent={closeEvent}/>
			</div>
		</div>
    </div>
  );
};

export default template;
