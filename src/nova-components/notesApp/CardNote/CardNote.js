import React    from "react";
import template from "./CardNote.jsx";

class CardNote extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			props: props
		}
	}

	componentDidMount(){
		if(this.state.props.data.img){
			document.getElementsByClassName('first'+this.state.props.data.num)[0].style.backgroundImage = 'url('+this.state.props.data.img+')';
			document.getElementsByClassName('first'+this.state.props.data.num)[0].style.backgroundSize = 'cover';
			console.log(document.getElementsByClassName('first'+this.state.props.data.num)[0].style)
		}
	}

	// think about it if make it like snippet

	trim(string,length){
		const trimmedString = string.length > length ? string.substring(0, length) + '...' 
				: string
		return trimmedString
	}

  render() {
    return template.call(this,this.state,this.trim);
  }
}

export default CardNote;
