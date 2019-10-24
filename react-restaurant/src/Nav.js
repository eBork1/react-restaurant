import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand font-weight-light pt-2 pb-2" href="#">Bootstrap Bistro</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#about">About</a>
                        <a className="nav-item nav-link" href="#menu">Menu</a>
                        <a className="nav-item nav-link" href="#footer">Contact</a>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Nav;