import { ADD_CARD, UPDATE_CARD, DELETE_CARD, LIST_CARDS } from '../actions/cardnotes'
import { combineReducers } from 'redux'


const smartCard = (state= initialState, action) => {
	
	switch(action.type){
		case ADD_CARD:
			return Object.assign({}, state, {
				status: action.status,
				card: action.payload
			})
			break;
		case UPDATE_CARD:
			return Object.assign({}, state, {
				status: action.status,
				card: action.payload
			})
			break;
		case DELETE_CARD:
			return Object.assign({}, state, {
				status: action.status,
				card: action.payload.
			})
			break;

	}
}


const superCards = (state= initialState, action) => {
	switch(action.type){
		case LIST_CARDS:
			return Object.assign({}, state, {
				status: action.status,
				cards: action.payload
			})
			break;
	}
}


const todoCards = combineReducers({
	smartCard: smartCard,
	superCards: superCards
})

export default todoCards


