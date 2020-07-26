import React, { Component } from 'react'

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 1};
        this.random = this.random.bind(this);
    }

    random() {
        let new_rand = Math.floor(Math.random() * 10) + 1;
        this.setState({
            number: new_rand
        });
    }
    
    render() {
        return(
            <div>
                <h1>Number is: {this.state.number}</h1>
                {this.state.number === 7 ? <h2>You Win</h2> : <button onClick = {this.random}>Click Me</button>}
            </div>
        )
    }
}

export default Number;