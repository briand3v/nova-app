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
		this.images = []
		this._index = 0
		this._transformname = 'transform'
		this._offset = 90
		this._rotation = 45
		this._baseindex = 10
		this._maxzindex = 42
		this._scrollleft = 0
	}

	componentDidMount(){
		this.init()
	}

	init(){
		// get images and set the index on the images in the middle
		this.images = Array.prototype.slice.call(document.querySelectorAll('img'))
		this._index = Math.floor(this.images.length/2)
		console.log(this.images)
		console.log(this._index)
		
		this.registreEvents()
		this.renderAnim()
	}

	renderAnim(){
		for(let i = 0; i<this.images.length; i++){

			const currentimage = document.getElementsByClassName('img'+i)[0]
			// const currentimagepos = document.getElementsByClassName('img'+i)[0].getBoundingClientRect()
			// console.log(currentimagepos)
			//before
			if(i < this._index){
				// currentimage.style[this._transformname] = "translateX(-"+ (this._offset * (this._index - i)) + "% ) rotateY("+ this._rotation + "deg)";
				currentimage.style.transform = "rotateY("+ this._rotation + "deg)";
				currentimage.style.zIndex = this._baseindex + i;
			}

			//current 
			if(i === this._index){
				currentimage.style.transform = "rotateY(0deg) translateZ(140px)";
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

	handleScrollAnim(e) {

		// handle scroll event 
		const currentScrollLeft = e.target.scrollLeft

		// right scroll direction
		if(currentScrollLeft > this._scrollleft){
			this.flowRight()
		}
		// left scroll direction
		if(currentScrollLeft < this._scrollleft){
			this.flowLeft()
		}
		this._scrollleft = currentScrollLeft
	}

	flowRight(){
		if(this._index){
			this._index--;
			this.renderAnim();
		}
	}

	flowLeft(){
		//check if has images on the left side
		if(this.images.length > (this._index + 1)){
			this._index++;
			this.renderAnim();
		}
	}

	registreEvents(){
		const scrollnode = document.getElementById('scroll-content')
		scrollnode.onscroll = (e) => this.handleScrollAnim(e)
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
