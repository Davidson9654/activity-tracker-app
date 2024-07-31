import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the CSS for styling
import App from './App'; // Import the main App component
//import reportWebVitals from './reportWebVitals'; // For measuring performance (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//reportWebVitals();
