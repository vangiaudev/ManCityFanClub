import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import './Resources/css/normalize.css';
import './Resources/style_blog/css/lightbox.min.css';
import './Resources/style_blog/css/utilities.css';
import './Resources/style_blog/css/style.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { firebase, firebasePlayers, firebaseTeams } from './firebase';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})



