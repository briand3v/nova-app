import React    from "react";
import template from "./Home.jsx";

class Home extends React.Component {

	constructor(props){
		super(props)
		this.props = props;
		this.nextView = this.nextView.bind(this)
	}

	nextView(e){
		console.log(e)
		// handle a animation event
		this.props.history.push('/notes')
	}
	
	render() {
		return template.call(
			this,
			this.nextView
			);
	}
}

export default Home;
