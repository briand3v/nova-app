import "./ImagesPopup.scss";
import React from "react";

const imagesPopup = props => {
	const settings = {
		ocult: props.visible ? '': 'ocult'
	}

	const defaultImages = [{src: '/images/code.png', pos: '0px' },{src: '/images/one-way.png', pos: '100px' },{src: '/images/wallp.png', pos: '200px' },{src: '/images/wallp.png', pos: '300px' },{src: '/images/wallp.png', pos: '400px' }]
	
	return (
		<div className={'popup-images '+settings.ocult}>
			<div className="w-50p images-content">
			<span className="mbri-close mbrih c-black f-right p-10" onClick={(e)=>{props.props.closeEvent(e)}}></span>
			<div className="images">
				{
					defaultImages.map((img,i)=>{
						return (<img className={'img'+i} key={i} src={img.src} style={{left:img.pos}} />)
					})
				}
			</div>
			</div>
		</div>
	);
}

export default imagesPopup;
