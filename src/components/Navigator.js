import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Style.css';

const Navigator = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">Personal Trainer App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Customerlist">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Trainingslist">Trainings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Calendar">Calendar</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navigator;