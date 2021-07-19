import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    
  }

  
  body {
    background-color: #f1f1f1;
    color: #707070;
    font-style: italic;
    background-color: #F7F7F7;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
      background-color: #b5c401;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
      background-color: red;
  }


`;
