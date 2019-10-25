import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer1">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="jumbotron bg-secondary rounded-0 m-0">
                                <h2 className="text-light text-center">348 E MAIN</h2>
                                <h5 className="text-light text-center">Hours of operation:</h5>
                                <p className="text-light text-center mb-0">Mon-Thu: 11am-5pm</p>
                                <p className="text-light text-center mb-0">Fri-Sat: 11am-8pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;