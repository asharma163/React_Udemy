import React, { Component } from 'react'
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {dice1 : 'one', dice2: 'one', isRolling: false}
        this.roll = this.roll.bind(this);
    }

    roll() {
        const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({dice1: newDice1, dice2: newDice2, isRolling: true});

        setTimeout(() => this.setState ({isRolling: false}),500);
    }
    render() {
        return(
            <div className = "RollDice">
                <div className = "RollDice-container">
                    <Dice face = {this.state.dice1} shaking = {this.state.isRolling}/>
                    <Dice face = {this.state.dice2} shaking = {this.state.isRolling}/>
                </div>
                
                <button onClick = {this.roll} disabled = {this.state.isRolling}> {this.state.isRolling ? 'Rolling' : 'RollDice'}</button>
            </div>
        )
    }
}

export default RollDice;