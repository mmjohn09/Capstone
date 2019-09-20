import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
// import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComicNook from './components/ComicNook';
import './index.css';
ReactDOM.render(
    <Router>
        <ComicNook />
    </Router>
    , document.getElementById('root'));