import React    from "react";
import imagesPopup from "./ImagesPopup.jsx";

class ImagesPopup extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			visible: false,
			direction: 'horizontal',
			dimensions: {
				width: '400px',
				heigth: '500px'
			},
			props: props
		}
	}

	componentDidMount(){
		
	}

	componentDidUpdate(prevProps,prevState) {
	  // Images popup toggle
	  if(this.props.visible !== prevState.visible){
		this.setState((state,props)=>({
			visible: this.props.visible
		}),()=>{
			console.log(this.state)
		})
	  }
	}

	render() {
		return imagesPopup.call(this, this.state);
	}
}

export default ImagesPopup;
