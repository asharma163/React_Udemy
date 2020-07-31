import React, { Component } from 'react'
import Ball from './Ball'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {number: Array.from({length: this.props.maxBalls})};
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(currectState => ({
            number: currectState.number.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
        
    }

    handleClick() {
        this.generate();
    }

    render() {
        return(
            <section className = "Lottery">
                <h1>{this.props.title}</h1>
                <div>{this.state.number.map(n => <Ball number = {n} />)}</div>
                <button onClick = {this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;