import React    from "react";
import template from "./notesApp.jsx";
import {createCard} from '../../controllers/cards'

class notesApp extends React.Component {

	constructor(){
		super()
	}
	

	createcard(){
		const defaultdata = {
			type: 'regular card',
			title: document.getElementById('titlecard').value,
			desc: document.getElementById('desccard').value
		}

		console.log(defaultdata)

		// const card = createCard(defaultdata)
		// card.then((res)=>{
		// 	console.log(res)
		// }).catch((err) => {
		// 	console.log(err.response)
		// })
	}

	render() {
		return template.call(this,this.createcard.bind(this));
	}
}

export default notesApp;
