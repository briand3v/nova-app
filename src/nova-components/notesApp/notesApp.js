import React    from "react";
import template from "./notesApp.jsx";
import {createCard} from '../../controllers/cards';
import CardNote from './Card/cardnote';

class notesApp extends React.Component {

	constructor(){
		super();
		this.state = {
			data: null,
			impagesPopup: false,
			// cards: [{data:{ img: '/images/code.png', num:1}, new: false},{data:{ img: '/images/wallp.png', num:2}, new: false},{data:{ img: '/images/code.png', num:3}, new: false},{data:{ img: '/images/wallp.png', num:4}, new: false}],
			cards: [{data:{ img: '/images/code.png', num:1},id:"8717237dajsdjnfimiksj"}],
			newcards: 0,
			defaultIds: ['9192302149sasdqw', '232csadfklmkaks', 'asdl23riaknnflks'],
			firtsrender: true
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

		const card = createCard(defaultdata)
		card.then((res)=>{
			console.log(res)
		}).catch((err) => {
			console.log(err.response)
		})
	}

	addCard(e){
		e.preventDefault()
		const newcard = {data:{ img: '/images/code.png', num:this.state.cards.length+1}, new: true, animation:'fromleft-anim', id:this.state.defaultIds[this.state.newcards]}
		this.setState((state,props) => ({
			cards: [...state.cards, newcard],
			newcards: state.newcards + 1
		}),()=>{
			
			setTimeout(() => {
				const newcardanim = document.getElementsByClassName('cardleft')[this.state.newcards - 1]
				newcardanim.classList.add('fromleft-anim')
			}, 100);
		})
	}

	removeCard(e){
		e.preventDefault()
		
		let currentCards = this.state.cards
		console.log(currentCards)
		const carid = e.target.closest('.supernova-card').id
		const index = currentCards.findIndex((card,i)=>{
			return carid === card.id
		})
		console.log(index)
		currentCards.splice(index,1)
		console.log(currentCards)
		this.setState({
			cards: currentCards,
			firtsrender: false
		})
	}

	render() {
		return template.call(this,this.state,this.addCard.bind(this),this.openImagesPopup.bind(this),this.closePopup.bind(this), this.removeCard.bind(this));
	}
}

export default notesApp;
