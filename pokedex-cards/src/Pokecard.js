import React, {Component} from 'react';
import './Pokecard.css'
const POKE_BASE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let pad = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
    render() {
        let image_src = `${POKE_BASE_API}${pad(this.props.id)}.png`
        return (
            <div className = "Pokecard">
                <h1 className = "Pokecard-title">{this.props.name}</h1>
                <img src = {image_src} alt = {this.props.name}/>
                <div className = "Pokecard-data">
                    Type: {this.props.type}
                </div>
                <div className = "Pokecard-data">
                    Experience: {this.props.experience}
                </div>
            </div>
        )
    }
}

export default Pokecard;