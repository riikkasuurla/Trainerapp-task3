import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Style.css';

const Navigator = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light" fixed="top">
        <Link class="navbar-brand" to="/">Personal Trainer App</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/Customerlist">Customers</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Trainingslist">Trainings</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navigator;