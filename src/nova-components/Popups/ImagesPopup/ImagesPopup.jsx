import "./ImagesPopup.scss";
import React from "react";
import Dropzone from 'react-dropzone'

const imagesPopup = (props,popupFocusOut,dropImages) => {
	const settings = {
		ocult: props.visible ? '': 'ocult'
	}

	const defaultImages = [{src: '/images/code.png', pos: '140px' },{src: '/images/one-way.png', pos: '320px' },{src: '/images/wallp.png', pos: '500px' },{src: '/images/wallp.png', pos: '680px' },{src: '/images/wallp.png', pos: '860px' }]
	
	return (
		<div id="popup-images" className={'popup-images '+settings.ocult}
		onClick={(e) => popupFocusOut(e)}
		>
			<div  className="w-50p images-content">
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


			<div className="uploadmanager p-20">

			<Dropzone
				accept="image/*"
				onDrop={dropImages}
			>
				{({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
					const dropzoneStyle = {
						active: isDragActive ? 'dropzone-active' : '',
						reject: isDragReject ? 'dropzone-reject' : ''
					}
		          return (
		            <div
		              {...getRootProps()}
		              className={'dropzone-base ' + dropzoneStyle.active + dropzoneStyle.reject}
		            >
		              <input name="image" {...getInputProps()} />
		              {
		                isDragActive ?
		                  <p>Drop files here...</p> :
		                  <p>Drop images or click to upload</p>
		              }
		            </div>
		          )
		        }}
			</Dropzone>
			</div>
			</div>
		</div>
	);
}

export default imagesPopup;
