import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import ComicNook from './components/ComicNook';

ReactDOM.render(
    <Router>
        <ComicNook />
    </Router>
    , document.getElementById('root'));