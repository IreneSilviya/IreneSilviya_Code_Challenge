import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerForm from "../components/PlayerForm"
import * as playerService from "../services/playerService";

function AddPlayer() {

    const navigate = useNavigate();

    const [player, setPlayer] = useState({
        playerId: "",
        playerName: "",
        jerseyNumber: "",
        role: "",
        teamName: ""
    });

    const handleChange = (e) => {
        setPlayer ({
            ...player, [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        playerService.createPlayer(player).then(() => {
            navigate("/");
        })
        .catch((error) => {
            console.error(error);
            alert("Unable to add Player");
        });
    };

    return (
        <PlayerForm player={player} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
}

export default AddPlayer;