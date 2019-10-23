import React from 'react';
import axios from 'axios';

class Food extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(`https://entree-f18.herokuapp.com/v1/menu/12`)
            .then(response => {
                console.log(response.data);
                console.log(response.data.menu_items);
                console.log(response.data.menu_items[0].description);
                this.setState({ content: response.data.menu_items });
                console.log(this.state.content)
            })
    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    {this.state.content.map(item =>
                        <>
                            <p className='font-weight-bold'>{item.description.split(' ', 2).join(' ')}</p>
                            <p className='card-text'>{item.description}</p>
                            <p className='font-weight-light font-italic'>{item.description.length}</p>
                        </>
                    )}
                </div>
            </div>
        )
    }
}

export default Food;