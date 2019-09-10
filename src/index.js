import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import SuperShelf from './components/SuperShelf';

ReactDOM.render(
    <Router>
        <SuperShelf />
    </Router>
    , document.getElementById('root'));