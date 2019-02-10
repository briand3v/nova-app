import React    from "react";
import template from "./notesApp.jsx";
import {createCard} from '../../controllers/cards'

class notesApp extends React.Component {

	constructor(){
		super();
		this.state = {
			props: 'none',
			data: null,
			impagesPopup: false
		}
	}
	
	componentDidMount() {
		
	}

	trim(string,length){
		const trimmedString = string.length > length ? string.substring(0, length) + '...' 
				: string
		return trimmedString
	}
	
	openImagesPopup(e){
		this.setState((state,props)=>({
			impagesPopup: !state.impagesPopup
		}),()=>{
		})
	}

	closePopup(){
		this.setState({impagesPopup: false})
	}

	createcard(){
		const defaultdata = {
			type: 'regular card',
			title: document.getElementById('titlecard').value,
			desc: document.getElementById('desccard').value
		}
		// const card = createCard(defaultdata)
		// card.then((res)=>{
		// 	console.log(res)
		// }).catch((err) => {
		// 	console.log(err.response)
		// })
	}

	render() {
		return template.call(this,this.state,this.createcard.bind(this),this.openImagesPopup.bind(this),this.closePopup.bind(this));
	}
}

export default notesApp;
