import "./firstDownload.scss";
import React from "react";






const buttons = (clickEvent) => {
	return(
		<div id="hidden-2" className="buttons w-50p content-row items-h-around hidden-2 mt-50">
      		<a onClick={(e) => clickEvent(e)} className="omit btn-minimalist">Omit</a>
      		<a onClick={(e) => clickEvent(e)} className="continue btn-minimalist">continue</a>
	    </div>
	)
}


const mainsection = (clickEvent) =>{
	return (
	<div id="content" className="container relative items-h-around content-column items-v-center">
		<div id="mainsection" className="to-hidden content-column items-h-center mt-100">
	      <div className="content-text">
	      	<p id="hidden-0" className="hidden-0 text-white">Bienvenido</p>
			<p id="hidden-1" className="hidden-1 text-white">Me llamo Nova, seré tu mejor asistente personal</p>
	      </div>
	    </div>
	    <div id="secondsection" className="to-hidden absolute content-column">
			<div id="hidden-3" className="hidden-3">
				<div className="content-row items-h-between nova-items">
					<div className="nova-icons-1">
						<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt=""/>
					</div>
					<div className="nova-icons-1">
						<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt=""/>
					</div>
					<div className="nova-icons-1">
						<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt=""/>
					</div>
				</div>
				<div className="mt-30 content-text">
					<p className="text-white">Ten una gestion de todas tus apps de entretenimiento favoritas</p>
				</div>
			</div>
		</div>
		<div id="thirdsection" className="to-hidden absolute content-column">
			<div id="hidden-4" className="hidden-4">
				<div className="content-row items-h-center">
					<div className="nova-icons-1">
						<img src="/assets/img/command-voice.png" alt=""/>
					</div>
				</div>
				<div className="mt-30 content-text">
					<p className="text-white">dispongo de un sistema de comandos por voz, y muchas mas sorpresas..</p>
				</div>
			</div>
		</div>

	    {buttons(clickEvent)}
	</div>
  );
}


const template = {
	mainsection : mainsection
}

export default template;
