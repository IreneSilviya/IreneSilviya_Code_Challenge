import { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";
import * as playerService from "../services/playerService";

function Home() {
    const [players, setPlayers] = useState([]);

    const loadPlayers = async() => {
        playerService.getPlayers().then((response) => {
            setPlayers(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const deletePlayer = (id) => {
        playerService.deletePlayer(id).then(() => {
            loadPlayers();
        })
        .catch((error) => {
            console.error(error);
            alert("Unable to delete player");
        });
    }
      
    useEffect(() => {
        loadPlayers();

    }, []);

    return (
        <PlayerList players={players} setPlayers={setPlayers} loadPlayers={loadPlayers} deletePlayer={deletePlayer} />
    );
}

export default Home;