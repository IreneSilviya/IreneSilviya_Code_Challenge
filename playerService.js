import axios from "axios";

const API_URL = "http://localhost:8080/api/players";

export const createPlayer = (player) => {
    return axios.post(API_URL, player);
};

export const getPlayers = () => {
    return axios.get(API_URL);
};

export const getPlayerById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const updatePlayer = (id, player) => {
    return axios.put(`${API_URL}/${id}`,player);
};

export const deletePlayer = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const getPlayersByTeam = (teamName) => {
    return axios.get(`${API_URL}/team/${teamName}`);
};

export const searchPlayersByTeam = (teamName) => {
    return axios.get(`${API_URL}/team/${teamName}`
    );
};

//Reset button
export const loadPlayers = () => {
    playerService.getPlayers().then((response) => {
        setPlayers(response.data);
    });
};

// export default {
//     createPlayer, getPlayers, getPlayerById, updatePlayer, deletePlayer, getPlayersByTeam,
// };