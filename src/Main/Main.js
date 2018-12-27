import React    from "react";
import initApp from "./Main.jsx";
import animation from  "../particles-pro.js";


class Main extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			init: 'Nova',
			update: '28/10/2018',
			props: this.props
		}
	}


	componentDidMount(){
		console.log(animation)
		animation.Fluid.initialize();
		this.timerId = setTimeout(()=>{
			this.state.props.history.push('/welcome')
		},5000)

	}


	render() {
	return initApp(this.state);
	}
}

export default Main;
