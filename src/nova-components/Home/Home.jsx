import "./Home.scss";
import React from "react";
import Movements from '../Movements/Movements'
import QuickTasks from '../QuickTasks/QuickTasks'


function template(nview) {
  return (
  	<div className="h-100p">
	    <div className="container bg-user px-0 mw-100p h-30p">
		  <div className="row h-100p">
		    <div className="column overlay d-flex items-align-center p-40">
		    	<p className="fw-500">Briandev</p>
		    </div>
		  </div>
		</div>
		<div className="container h-10p px-0 mx-0 mw-100p">
			<div className="row h-100p">
				<div className="column column-33">
					<div className="col-movements-head h-100p"></div>
				</div>
				<div className="column column-67 nova-apps">
					<div className="row">
						<div className="column column-50">
						</div>
						<div className="column column-50 d-flex items-justify-end">
							<div onClick={(e) => {nview(e)}} className="icon-hover-1">
								<img className="small-icon" src="images/icons/notes-icon.png" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container px-0 mw-100p h-60p">
			<div className="row h-100p">
				<div className="column">
					<Movements/>
				</div>
				<div className="column">
					Nova
				</div>
				<div className="column">
					<QuickTasks />
				</div>
			</div>
		</div>
	</div>
  );
};

export default template;
