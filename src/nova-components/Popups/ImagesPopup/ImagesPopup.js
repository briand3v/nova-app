import React    from "react";
import imagesPopup from "./ImagesPopup.jsx";
import {uploadImage} from '../../../controllers/cards'

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
		this.images = []
		this._index = 0
		this._offset = 90
		this._rotation = 25
		this._baseindex = 10
		this._maxzindex = 42
		this._popupcontent = 'popup-images'

	}

	componentDidUpdate(prevProps,prevState) {
		// Images popup toggle
		if(this.props.visible !== prevState.visible){
				this.setState((state,props)=>({
				visible: this.props.visible
			}),()=>{
				// console.log(this.state)
			})
		}
	}


	componentDidMount(){
		this.init()
	}

	init(){
		// get images and set the index on the images in the middle
		this.images = Array.prototype.slice.call(document.querySelectorAll('img'))
		this._index = Math.floor(this.images.length/2)
		this.renderAnim()
	}

	renderAnim(){
		for(let i = 0; i<this.images.length; i++){

			const currentimage = document.getElementsByClassName('img'+i)[0]
		
			if(i < this._index){
				// currentimage.style[this._transformname] = "translateX(-"+ (this._offset * (this._index - i)) + "% ) rotateY("+ this._rotation + "deg)";
				currentimage.style.transform = "rotateY("+ this._rotation + "deg)";
				currentimage.style.zIndex = this._baseindex + i;
			}
			//current 
			if(i === this._index){
				currentimage.style.transform = "rotateY(0deg) scale(1.2)";
				currentimage.style.border = "1px solid yellow"
				currentimage.style.zIndex = this._maxzindex;
			}
			//after
			if(i > this._index){
				// currentimage.style[this._transformname] = "translateX( "+ ( this._offset * ( i - this._index  ) ) +"% ) rotateY( -"+ this._rotation +"deg )";
				currentimage.style.transform = "rotateY( -"+ this._rotation +"deg )";
				currentimage.style.zIndex = this._baseindex + (this.images.length - i);
			}
		}
	}

	popupFocusOut(e){
		if(e.target.id==this._popupcontent){
			this.state.props.closeEvent()
		}
	}

	onDropImages(acceptedFiles, rejectedFiles){
		const data = new FormData();
		data.append('file',acceptedFiles[0])
		if(data){
			for (var key of data.entries()) {
				console.log(key[1])
				uploadImage(key[1]).then((res) =>{
					console.log(res)
				})
			}
		}
	}

	render() {
		return imagesPopup.call(this, this.state, this.popupFocusOut.bind(this),this.onDropImages.bind(this));
	}
}

export default ImagesPopup;
