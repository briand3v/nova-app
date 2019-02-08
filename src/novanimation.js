const delayText = (time,target) => {
	setTimeout(()=>{
		const text = document.getElementById(target)
		text.classList.toggle('show-el');
		text.classList.add('to-hidden');
	},time);
}

const inittimeout = (obj) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			const text = document.getElementById(obj.target)
			text.classList.toggle('show-el');
			text.classList.add('to-hidden');
			// next popup is obj target2 exist
			if(obj.target2){
				const nexttimer = {time: obj.time2,target:obj.target2};
				resolve(nexttimer)
			}
		},obj.time1);
	})
}
const sequencialpopup = (obj) => {
	
	inittimeout(obj).then((t)=>{
		delayText(t.time, t.target)
	});
}

const anim = {
	sequencialpopup: sequencialpopup
}

export default anim;