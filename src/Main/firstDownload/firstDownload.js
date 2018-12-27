import React    from "react";
import template from "./firstDownload.jsx";
import anim from "../../novanimation";

class firstDownload extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			count: 0,
			popup: 2,
			lastView: 5,
			views : ['mainsection','secondsection', 'thirdsection']
		}
	}


	componentDidMount(){
		anim.sequencialpopup({time1:400,target: 'hidden-0'})
		anim.sequencialpopup({time1:1500, time2: 1600, target: 'hidden-1', target2: 'hidden-2'})
	}

	clickEvent(e){
		const main = document.getElementById('main')

		if(e.target.text=='Omit'){
			this.props.history.push('/signup')
			return
		}
		this.setState((state,props)=>({
			count: state.count + 1,
			popup: state.popup + 1
		}), () => {

			const lastsection = document.getElementById(this.state.views[this.state.count - 1])
			const currentsection = document.getElementById(this.state.views[this.state.count])
			lastsection.classList.toggle('hidden-el')
			console.log(this.state.popup)
			if(this.state.popup==this.state.lastView){
				const btns = document.getElementById('hidden-2')
				btns.classList.add('hidden-el')
				setTimeout(()=>{
					this.props.history.push('/signup')
				}, 1200)
				
				return
			}
			anim.sequencialpopup({time1:1500, target: 'hidden-'+this.state.popup})
		})  
	}
	
	render() {
		return template.mainsection(this.clickEvent.bind(this));
	}
}

export default firstDownload;
