import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand font-weight-light" href="#">Bootstrap Bistro</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Menu</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Nav;