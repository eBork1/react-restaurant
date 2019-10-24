import React from 'react';
import axios from 'axios';

class Food extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        if (localStorage.getItem(this.props.menuSection) === null) {
            axios.get(`https://entree-f18.herokuapp.com/v1/menu/12`)
                .then(response => {
                    this.setState({ content: response.data.menu_items });
                    
                    // SetItem(key(each menu section), value)
                    window.localStorage.setItem(this.props.menuSection, JSON.stringify(this.state.content));
                })
        }else{
            this.setState({ content: JSON.parse(localStorage.getItem(this.props.menuSection))})
        }
    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    {this.state.content.map((item, idx) =>
                        <>
                            <p key={idx} className='font-weight-bold'>{item.description.split(' ', 2).join(' ')}</p>
                            <p className='card-text'>{item.description}</p>
                            <p className='font-weight-light font-italic'>${Math.round(item.description.length/3)}</p>
                        </>
                    )}
                </div>
            </div>
        )
    }
}

export default Food;