import React    from "react";
import template from "./notesApp.jsx";
import {createCard} from '../../controllers/cards';
import CardNote from './Card/cardnote';
import { inherits } from "util";

class notesApp extends React.Component {

	constructor(){
		super();
		this.state = {
			data: null,
			impagesPopup: false,
			//cards: [{data:{ img: '/images/code.png', num:1}, new: false},{data:{ img: '/images/wallp.png', num:2}, new: false},{data:{ img: '/images/code.png', num:3}, new: false},{data:{ img: '/images/wallp.png', num:4}, new: false}],
			cards: [{data:{ img: '/images/code.png', num:1}, id:"8717237dajsdjnfimiksj", new:false, text:'Hola mundo'}],
			newcards: 0,
			defaultIds: ['9192302149sasdqw', '232csadfklmkaks', 'asdl23riaknnflks','12321432131rsaddas','asdajkhduibbdsa','123bdaskgiyqkjasdjbvasj'],
		}
	}
	
	componentDidMount() {
		this.init()
	}

	init(){
		console.log(this.state)
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

	saveCard(){
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
		const newObjectId = this.state.defaultIds[this.state.newcards];
		const newcard = {data:{ img: '/images/code.png', num:this.state.cards.length+1}, new: true, animation:'fromleft-anim', id:this.state.defaultIds[this.state.newcards], text: 'Hello'+this.state.cards.length+1}
		this.setState((state,props) => ({
			cards: [...state.cards, newcard],
			newcards: state.newcards + 1
		}),()=>{
			const newcardanim = document.getElementById(newObjectId)
			newcardanim.style.opacity = '0';
			newcardanim.style.webkitTransform = 'translateX(-70px)';
			newcardanim.style.MozTransform = 'translateX(-70px)';
			newcardanim.style.webkitTransition = '.6s all ease-in-out';
			newcardanim.style.MozTransform = '.6s all ease-in-out';
			// broke here is there are more the 6 cards [XXXXXXXXXXXXXXXXXXXXXXX]
			console.log(newcardanim)
			setTimeout(() => {
				newcardanim.classList.add('fromleft-anim')
			}, 100);
		})
	}

	removeCard(e){
		e.preventDefault()
		e.stopPropagation()
		
		const id = e.target.closest('.anim_shadow').id;
		const card = document.getElementById(id.split('#')[1])
		const confirmRemove = card.querySelector('.card_delete')

		confirmRemove.classList.remove('ocult')
		confirmRemove.classList.add('card_delete_expand')
		e.target.closest('.anim_shadow').classList.add('anim_shadow_card')

		// let index = this.getIndexCardIdByTarget(e)
		// this.setState(preveState => {
		// 	let newCards = [...preveState.cards]
		// 	newCards.splice(index,1)
		// 	return {cards: newCards}
		// })
	}

	focusOut(e){
		e.preventDefault();

		// save text input in case of make other action like delete other card to keep the changes
		let currentCards = this.state.cards
		const text = e.target.value;
		currentCards[this.getIndexCardIdByTarget(e)].text = text
		this.setState({
			cards: currentCards
		})
	}

	getIndexCardIdByTarget(e){
		let currentCards = this.state.cards
		const carid = e.target.closest('.supernova-card').id
		const index = currentCards.findIndex((card,i)=>{
			return carid === card.id
		})
		return index
	}

	handleChangeText(e){
		
		const text = e.target.value;
		const index = this.getIndexCardIdByTarget(e)
		this.setState(preveState => {
			let newUpdatedCards = [...preveState.cards]
			newUpdatedCards[index].text = text
			return {cards: newUpdatedCards}
		})
	}

	render() {
		return template.call(this,this.state,this.addCard.bind(this),this.openImagesPopup.bind(this),this.closePopup.bind(this), this.removeCard.bind(this), this.focusOut.bind(this), this.handleChangeText.bind(this));
	}
}

export default notesApp;
