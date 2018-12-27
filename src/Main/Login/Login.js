import React    from "react";
import template from "./Login.jsx";
import {login} from '../../controllers/user'

class Login extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			props: this.props
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){

	}
	handleSubmit(e){
		console.log('login submit')
		const username = document.getElementById('name2').value
		const password = document.getElementById('password2').value
		const userdata={
			username: username,
			password: password,
		}
		login(userdata)
	}

	render() {
	return template.call(this, 
		this.state.props,
		this.handleSubmit);
	}
}

export default Login;
