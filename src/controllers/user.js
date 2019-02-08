import axios from 'axios'
import {store} from '../store'
import {signup} from '../actions/ct-actions/main'

var baseURL = 'http://localhost:8080'

export function registre(data){

	return axios.post(baseURL+'/auth/signup',{
		username: data.username,
		password: data.password,
		email: data.email
	})
}

export function login(data){

	return axios.post(baseURL+'/auth/login', {
		username: data.username,
		password: data.password
	})
}