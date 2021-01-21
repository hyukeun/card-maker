import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);

// const authService = new AuthService();
// // authservice는 new authservice를 만들어서 이것을 app에다가 전달해 줄 것이다. 
// // 밑에 전달하는 것을 만들어 주고 app.jsx에 들어가서 동일하게 받아주는 것을 만들어 준다. 



// ReactDOM.render(
//   <React.StrictMode>
//     <App authService={ authService } />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
