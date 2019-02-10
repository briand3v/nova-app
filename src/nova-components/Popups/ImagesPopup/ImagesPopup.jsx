import "./ImagesPopup.scss";
import React from "react";

const imagesPopup = props => {
	const settings = {
		ocult: props.visible ? '': 'ocult'
	}

	const defaultImages = [{src: '/images/code.png', pos: '300px' },{src: '/images/one-way.png', pos: '400px' },{src: '/images/wallp.png', pos: '500px' },{src: '/images/wallp.png', pos: '600px' },{src: '/images/wallp.png', pos: '700px' }]
	
	return (
		<div className={'popup-images '+settings.ocult}>
			<div className="w-50p images-content">
			<div>
				<span className="mbri-close mbrih c-black f-right p-10" onClick={(e)=>{props.props.closeEvent(e)}}></span>				
			</div>
			<div id="scroll-content" className="images">
				<div className="images_all">
					{
						defaultImages.map((img,i)=>{
							return (<img className={'image img'+i} key={i} src={img.src} style={{left:img.pos}} />)
						})
					}
				</div>
			</div>
			</div>
		</div>
	);
}

export default imagesPopup;
