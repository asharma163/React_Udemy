import React, {Component} from 'react';
import './Pokecard.css'
const POKE_BASE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
    render() {
        let image_src = `${POKE_BASE_API}${this.props.id}.png`
        return (
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img src = {image_src} alt = {this.props.name}/>
                <div>
                    Type: {this.props.type}
                </div>
                <div>
                    Experience: {this.props.experience}
                </div>
            </div>
        )
    }
}

export default Pokecard;