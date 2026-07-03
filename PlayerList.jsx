import {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as playerService from "../services/playerService";

function PlayerList({ players,setPlayers, loadPlayers, deletePlayer}) {
  const [teamName, setTeamName] = useState("");

  const navigate = useNavigate();
  const searchByTeam = () => {
    playerService.getPlayersByTeam(teamName).then((response) => {
      setPlayers(response.data);
    })
    .catch((error) => {
      console.error(error);
      alert("Team not found");
    });
  }

  if(!Array.isArray(players)) {
      return <p>Loading Players...</p>;
    }

  return (
    <>
    {/*SearchBox*/}
    <div className="row mb-4">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Search by Team Name" value={teamName}
          onChange={(e) => setTeamName(e.target.value)} />
      </div>
      <div className="col-md-6">
        <button className="btn btn-primary me-2" onClick={searchByTeam}>Search</button>
        <button className="btn btn-secondary" onClick={loadPlayers}>Reset</button>
      </div>
    </div>

    


    <div className="row">
      {(players || []).map((player) => (
        <div className="col-md-6 mb-4" key={player.playerId}>
          <div className="card shadow h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-centre mb-3">
                <div>
                  <h4>{player.playerName}</h4>
                  <span className="badge bg-primary">{player.role}</span>
                </div>
                <h2 className="text-primary">#{player.jerseyNumber}</h2>
              </div>
              <hr />
              <p>
                <strong>Player ID:</strong>{player.playerId}
              </p>
              <p><strong>Jersey Number:</strong>{player.jerseyNumber}</p>
              <p><strong>Role:</strong>{player.role}</p>
              <p><strong>Team:</strong>{player.teamName}</p>
              <div className="mt-4">
                <button className="btn btn-warning me-2" onClick={() => navigate(`/edit-player/${player.playerId}`)} >Edit</button>
                <button className="btn btn-danger" onClick={() => deletePlayer(player.playerId)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
    );
    
  
  }

export default PlayerList;