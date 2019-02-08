import { VisibilityFilters, SIGN_UP, LOGIN, LOGOUT } from '../actions/user'
import { combineReducers } from 'redux'

var initialState = {
	status: VisibilityFilters.SHOW_ALL,
	payload: []
}


function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case VisibilityFilters.SHOW_ALL:
      return action.filter
    default:
      return state
  }
}


function auth(state= initialState, action){
	switch(action.type){
		case SIGN_UP:
			return Object.assign({}, state, {
				status: action.payload,
				payload: action.payload
			})
			break; 
		case LOGIN:
			return Object.assign({}, state, {
				status: action.payload,
				payload: action.payload
			})
			break;
		default:
			return state
	}
}




const todoApp = combineReducers({
  visibilityFilter,
  auth
})

export default todoApp