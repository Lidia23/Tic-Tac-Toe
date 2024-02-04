import { useState } from "react";
export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing,setIsEdititing] =useState(false);
    const handleEditClick = () =>{
        setIsEdititing ( editing => !editing ); //immediately
    }
    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';
    if(isEditing){
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />
        // btnCaption="Save"
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit' }</button>
        </li>
    )
}