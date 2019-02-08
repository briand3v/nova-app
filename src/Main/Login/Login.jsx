import "./Login.scss";

import React from "react";

function template(signinProps, submit) {
  return (
    <form id="login-form" className="auth-card">

		<h2>Iniciar sessión</h2>

		<div className="d-flex content-column">
			<input 
			
			id="name2" className="form-control" type="text" placeholder="Nombre de usuario" />
		</div>
		<div className="d-flex content-column">
			<input

			id="email2" className="form-control"  type="text" placeholder="Correo" />
		</div>
		<div className="d-flex content-column">
			<input

			id="password2" className="form-control"  type="password" placeholder="Contraseña" />
		</div>
		<div className="btns d-flex content-column mt-30">
			<a 
			className="btn-submit relative" 
			onClick={(e) => {submit(e)}}>Iniciar</a>
			<small className="text-center mt-20">No tienes cuenta?</small>
			<hr className="w-40p"/>
			<a
			onClick={(e) => signinProps.switchForm(e)}
			className="text-center btn-minimalist-invers"
			data-form="login"
			>Crear</a>
		</div>
	</form> 
  );
};

export default template;
