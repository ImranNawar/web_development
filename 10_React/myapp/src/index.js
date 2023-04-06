import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Home from './Home'
import Card from './components/Card';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card
      image="https://randomuser.me/portraits/men/51.jpg"
      name="Jan"
      joined="Joined in 2021"
      desc="He is a student"
      noOfFriends="4"
    />
    <Card
      image="https://randomuser.me/portraits/men/52.jpg"
      name="Khan"
      joined="Joined in 2022"
      desc="He is an aritist"
      noOfFriends="1"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
