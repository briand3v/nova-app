import axios from 'axios'
import {store} from '../store'
import {addcard} from '../actions/ct-actions/cards'

var baseURL = 'http://localhost:8080'

// create new supercard
export const createCard = (data) => {
	return axios.post(baseURL+'/cards/s213sd3411e12323/new',{
		accid: data.owner,
		type: data.type,
		title: data.title,
		desc: data.desc,
		date: data.timestamp,
		images: data.images ? data.images: null,
		record: data.record ? data.record: null,
		message: data.message,
		duedate: data.totaltime,
		minihelpers: data.helpers ? data.helpers: [],
		design: data.design
	})
}

// update card
export const updateCard = (data) => {
	axios.post(baseURL+'/cards/'+data.cardid+'/update',{
		name: data.name,
		desc: data.desc,
		date: data.timestamp
	})
}

// delete current card, add time to keep in trash
export const deleteCard = (data) => {
	axios.delete(baseURL+'/cards/'+data.cardid+'/delete/:timetrash', {})
}

// my supercards
export const mycards = (data) => {
	axios.get(baseURL+'/cards/'+data.userid+'/list')
}


export const uploadImage = (image, userid) => {
	const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
	return axios.post(baseURL+'/cards/upload',image)
}


export const loadLinks = () =>{
	return axios.get('/cards/images/loadall')
}