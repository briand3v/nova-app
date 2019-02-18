import "./notesApp.scss";
import React from "react";
import CardNote from './Card/cardnote';
import ImagesPopup from '../Popups/ImagesPopup/ImagesPopup'

function template(state,create,iPopup,closeEvent) {
	
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
							<span className="mbrih mbri-plus mt-10 f-right"
							></span>
						</div>
						<div className="notespanel_two">
							<div className="d-flex content-row buttons">
								<div className="btn-danger">Delete</div>
								<div className="btn-copy">Copy</div>
								<div className="btn-default" onClick={(e)=> {create(e)}}>Note</div>
							</div>
						</div>
					</div>
				</div>
				<div className="column column-67 superblock-cards">
					<CardNote data={{img:'/images/code.png',num:1}} openPopup={iPopup} />
					<CardNote data={{img:'/images/wallp.png',num:2}} openPopup={iPopup}/>
					<CardNote data={{num:3}} openPopup={iPopup}/>
					<CardNote data={{img:'/images/code.png',num:4}} openPopup={iPopup}/>
					<CardNote data={{num:5}} openPopup={iPopup}/>
					<CardNote data={{num:6}} openPopup={iPopup}/>
					<CardNote data={{num:7}} openPopup={iPopup}/>
				</div>
				<ImagesPopup objectId={'123sdalmk2331sde231d'} visible={state.impagesPopup} closeEvent={closeEvent}/>
			</div>
		</div>
    </div>
  );
};

export default template;
