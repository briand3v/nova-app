// create actions
import { SIGN_UP, LOGIN, LOGOUT} from '../user'


export function signup(data){
	return {
		type: SIGN_UP,
		status: 'null',
		payload: {
			data
		}
	}
}

export function login(data){
	return {
		type: LOGIN,
		status: 'null',
		payload: {
			data
		}
	}
}

