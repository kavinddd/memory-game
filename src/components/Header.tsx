import pokeballIcon from "../assets/pokeball-svgrepo-com.svg"
import "../styles/header.css"

export default function Header() {
    return (
        <div className="header">
            Memory Game
            <span>
                <img className="pokeball-icon" src={pokeballIcon} alt="pokeball-icon" />
            </span>
        </div>
    );
}