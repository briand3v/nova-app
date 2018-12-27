import axios from 'axios'
import {store} from '../store'
import {signup} from '../actions/ct-actions/main'

var baseURL = 'http://localhost:8080'

export function registre(data){

	axios.post(baseURL+'/auth/signup',{
		username: data.username,
		password: data.password,
		email: data.email
	}).then((res)=>{
		console.log(res)
	}).catch((err)=>{
		console.log(err.response)
	})
}


export function login(data){

	axios.post(baseURL+'/auth/login', {
		username: data.username,
		password: data.password
	}).then((res)=>{
		console.log(res)
	}).catch((err) => {
		console.log(err.response)
	})
}