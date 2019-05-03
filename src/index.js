import React from 'react';
import ReactDOM from 'react-dom';
import 'milligram/dist/milligram.min.css';
import './index.css';
import './nova-advance.scss';
import './variables.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
LogRocket.init('wm2rjd/nova');

LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'brian marcalla conza',
  email: 'superplanetacero@gmail.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
