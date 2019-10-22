import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <p className="display-4 mt-5">
                    Welcome
                </p>
                <p>━━━━━━━━</p>
                <p className="font-weight-light  mt-4">
                    Make a reservation today!
                </p>
                <form className="mt-4">
                    <label className="font-weight-light">
                        Phone: &nbsp;
                        <input type="text" />
                    </label>
                    <input type="submit" value="Submit" placeholder="email" />
                </form>
                <p className="font-weight-light mt-4">
                    or call 859 • 123 • 4567
                </p>
                <p>━━━━━━━━</p>
                
            </div>
        )
    }

}

export default About;