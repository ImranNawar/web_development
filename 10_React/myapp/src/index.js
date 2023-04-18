import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
// import App from './App';
// import Home from './Home'
// import Card from './components/Card';
// import Card1 from './components/Card1';
// import App from './components/nestedComponent/App';
// import Counter from './components/Counter';
// import ShowHide from './components/ShowHide'
// import Lists from './components/Lists'
// import LifeCycle from './components/LifeCycle';
// import Events from './components/Events';
// import Forms from './components/Forms'
// import OnewayTraffic from './components/onewaytraffic/OnewayTraffic';
// import App from './fcomponents/App'
// import App from './routes/App'
// import Login from './form/Login';
import FormikLogin from './form/FormikLogin';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Card
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
    /> */}

    {/* <Card1
      title="This is title form outside the class"
      buttonText="CLicked me"
    /> */}

    {/* <App /> */}
    {/* <Counter /> */}
    {/* <ShowHide /> */}
    {/* <Lists /> */}
    {/* <LifeCycle /> */}
    {/* <Events /> */}
    {/* <Forms /> */}
    {/* <OnewayTraffic /> */}
    {/* <App /> */}
    {/* <App /> */}
    {/* <Login /> */}
    <FormikLogin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
