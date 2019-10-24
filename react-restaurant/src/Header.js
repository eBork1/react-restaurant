import React from 'react';
import Nav from './Nav';
import './DiningRoom.jpg';
import './Header.css';



class Header extends React.Component {
    render() {
        return (
            <header className="header1">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 p-0">
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;