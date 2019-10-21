import React from 'react';
import Nav from './Nav';
import About from './About';
import './DiningRoom.jpg';


class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="col-12 p-0">
                    <>
                        <Nav />
                        <img className="img-fluid" src='DiningRoom.jpg' alt="banner" />
                    </>
                </div>
            </div>


        )
    }
}

export default Header;