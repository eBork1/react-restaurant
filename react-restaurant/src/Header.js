import React from 'react';
import './DiningRoom.jpg';
import './Header.css';



class Header extends React.Component {
    render() {
        return (
            <header className="header1">
                <div className="parallax">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-12 p-0">
                                <div className="jumbotron" id="jumbo">
                                    <p className="p-5 text-light">Bootstrap Bistro</p>
                                </div>
                                <a href="#nav">
                                    <p className="display-3 text-light mt-5">↓</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;