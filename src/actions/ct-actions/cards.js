// create actions
import { ADD_CARD, UPDATE_CARD, DELETE_CARD, LIST_CARDS} from '../cardnotes'

export function addcard(data){
	return {
		type: ADD_CARD,
		status: 1,
		payload: {
			data
		}
	}
}

export function updatecard(data){
	return {
		type: UPDATE_CARD,
		status: 1,
		payload: {
			data
		}
	}
}

export function deletecard(data){
	return {
		type: DELETE_CARD,
		status: 1,
		payload: {
			data
		}
	}
}

export function listCards(data){
	return {
		type: LIST_CARDS,
		status: 1,
		payload: {
			data
		}
	}
}