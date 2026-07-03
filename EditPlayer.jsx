import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlayerForm from "../components/PlayerForm";
import * as playerService from "../services/playerService";

function EditPlayer() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [player, setPlayer] = useState({
        playerId: "",
        playerName: "",
        jerseyNumber: "",
        role: "",
        teamName: ""
    });

    useEffect(() => {
        playerService.getPlayerById(id).then((response) => {
            setPlayer(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    const handleChange=(e) => {
        setPlayer({
            ...player,[e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        playerService.updatePlayer(id, player)
        .then(() => {
            navigate("/");
        }).catch((error) => {
            console.error(error);
            alert("Unable to update player");
        });
    };

    return (
        <PlayerForm player={player} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
}

export default EditPlayer;