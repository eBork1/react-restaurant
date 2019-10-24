import React from 'react';
import './DiningRoom.jpg';
import './Header.css';



class Header extends React.Component {
    render() {
        return (
            <header className="header1">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="jumbotron bg-dark">
                                <p className="p-5 text-light display-3">Bootstrap Bistro</p> 
                            </div>
                            <p className="display-2 text-light mt-5">↓</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;