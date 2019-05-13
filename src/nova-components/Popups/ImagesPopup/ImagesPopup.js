import React    from "react";
import imagesPopup from "./ImagesPopup.jsx";
import {uploadImage, loadLinks} from '../../../controllers/cards'

class ImagesPopup extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			visible: false,
			parent: props,
			images: null
		}
		this.images = []
		this._index = 0
		this._offset = 90
		this._rotation = 25
		this._baseindex = 10
		this._maxzindex = 42
		this._popupcontent = 'popup-images'

	}
	
	// update visible when props visible change
	componentDidUpdate(prevProps,prevState) {
		// Images popup toggle
		if(this.props.visible !== prevState.visible){
				this.setState((state,props)=>({
				visible: this.props.visible
			}),()=>{})
		}
	}


	componentDidMount(){
		this.init()
	}

	init(){
		// get chossed image by index
		this.images = Array.prototype.slice.call(document.querySelectorAll('img'))
		this._index = Math.floor(this.images.length/2)

		// style render images
		this.renderImages()
	}

	renderImages(){
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
		console.log(this.state)
		if(e.target.id===this._popupcontent){
			this.state.parent.closePopup()
		}
	}
	
	// handle images
	loadImages(){
		if(!this.state.images){
			loadLinks().then((res) => {
				// this.setState({
				// 	images: res
				// })
			})
			return
		}

		return this.state.images
	}

	appendImage(path){
		// create new image object
		const img = new Image()
		let index = 0
		if(this.state.images){
			index = this.state.images.length
		}
		img.onload = this.handleImageLoad(index)
		img.src = path
	}

	handleImageLoad(i) {
		const {images} = this.state

		images[i].loaded = true
		this.setState({images})
	}

	onDropImages(acceptedFiles, rejectedFiles){

		const data = new FormData()
		data.append('image',acceptedFiles[0],acceptedFiles[0].name)
		data.append('userId', 'asdadafadjahsdjasdh')
		data.append('index', 0)

		uploadImage(data).then((res) => {
			// make a notifications system
		}).catch((err) => {
			// make a notifications system
		})
	
	}

	render() {
		return imagesPopup.call(
			this, 
			this.state, 
			this.popupFocusOut.bind(this),
			this.onDropImages.bind(this));
	}
}

export default ImagesPopup;
