import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <p className="display-4 mt-5">
                    Welcome
                </p>
                <p className='font-weight-bold'>━━━━━━━━</p>
                <p className="font-weight-light  mt-4">
                    Make a reservation today!
                </p>
                <form className="mt-4">
                    <label className="font-weight-light">
                        Phone:
                        <input type="text" />
                    </label>
                    <input type="submit" value="Submit" placeholder="email" />
                </form>
                <p className="font-weight-light mt-5">
                    or call 859 • 123 • 4567
                </p>
            </div>
        )
    }

}

export default About;