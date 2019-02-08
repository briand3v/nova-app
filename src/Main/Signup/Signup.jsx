import "./Signup.scss";
import React from "react";
import Login from "../Login/Login"



const signup = (switchForm, handlesubmit, state) => {
  return (
    <div id="content" className="bg-signup">
    	<div className="bg-opacity w-100p h-100p d-flex items-v-center items-h-center">
    		<div className="container form-content">
				<div className="row d-flex items-h-center relative">
					<form id="signup-form" className="auth-card">

						<h2>Nuevo usuario</h2>

						<div className="d-flex content-column">
							<input 
							id="name" className="form-control" data-type="name" type="text" placeholder="Nombre de usuario" />
						</div>
						<div className="d-flex content-column">
							<input
							id="email" className="form-control" data-type="email"  type="text" placeholder="Correo" />
						</div>
						<div className="d-flex content-column">
							<input
							id="password" className="form-control" data-type="password"  type="password" placeholder="Contraseña" />
						</div>
						<div className="btns d-flex content-column mt-30">
							<a
							onClick={(e)=>{handlesubmit(e)}}
							className="btn-submit relative">Crear</a>
							<small className="text-center mt-20">Tienes ya una cuenta?</small>
							<hr className="w-40p"/>
							<a
							onClick={(e)=>{switchForm(e)}}
							className="text-center btn-minimalist-invers"
							data-form="signup"
							>Iniciar</a>
						</div>
					</form> 
					<Login props={state} switchForm={switchForm}/>
				</div>
	    	</div>
    	</div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', function () {
	
	const focusoutevent = (e) => {
		var value = e.target.value
		var target = e.target
		if(value==''){
			target.style.borderColor = "white";
		} else {
			target.style.borderColor = "#dadadab5";
		}
	}

    const handleeventsfields = () => {
		var inputs = document.getElementsByClassName('form-control')
		for(let i = 0; i < inputs.length; i++){
			inputs[i].addEventListener('focusout', focusoutevent)
		}
	}

	handleeventsfields()
});


const template = {
	Signup : signup,
}

export default template;
