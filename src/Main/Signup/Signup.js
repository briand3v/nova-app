import React    from "react";
import template from "./Signup.jsx";
import Login from "../Login/Login"
import {registre} from '../../controllers/user'


class Signup extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			toggle: false,
		}
	}
	
	componentDidMount(){
		setTimeout(()=>{
			const form = document.getElementsByClassName('auth-card')[0]
			form.classList.toggle('card-anim-1')
		},300)
		
	}

	// method using in both form components
	switchForm(e){
		const signupcontainer = document.getElementById('signup-form')
		const logincontainer = document.getElementById('login-form')
		const target = e.target
		const status = target == 'signup' ? true : false
		signupcontainer.classList.toggle('card-anim-1')
		logincontainer.classList.toggle('card-anim-1')
		
		this.setState((state,props)=>({
			toggle: status
		}), () => {
			// do somthing with the new value after changes
		})
	}

	handlesubmit(e){
		const username = document.getElementById('name').value
		const email = document.getElementById('email').value
		const password = document.getElementById('password').value
		const userdata={
			username: username,
			password: password,
			email: email
		}
		registre(userdata)
	}

	render() {

		return template.Signup(
			this.switchForm.bind(this),
			this.handlesubmit.bind(this), 
			this.state);
	}
}

export default Signup;
