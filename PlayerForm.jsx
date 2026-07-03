function PlayerForm({player, handleChange, handleSubmit}) {
    return (
        <div className="container">
            <h2>Add Player</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" name="playerId" placeholder="Player ID" value={player.playerId} onChange={handleChange} className="form-control mb-3" />
                <input type="text" name="playerName" placeholder="Player Name" value={player.playerName} onChange={handleChange} className="form-control mb-3" />
                <input type="number" name="jerseyNumber" placeholder="Jersey Number" value={player.jerseyNumber} onChange={handleChange} className="form-control mb-3" />
                <input type="text" name="role" placeholder="Role" value={player.role} onChange={handleChange} className="form-control mb-3" />
                <input type="text" name="teamName" placeholder="Team Name" value={player.teamName} onChange={handleChange} className="form-control mb-3" />

                <button className="btn btn-primary" type="submit">Save Player</button>
            </form>
        </div>
    );
}

export default PlayerForm;