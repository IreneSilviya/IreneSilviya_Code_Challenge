package com.hexaware.cricket.service;

import java.util.List;
import com.hexaware.cricket.entity.Player;

public interface IPlayerService {

    List<Player> getAllPlayers();

    Player getPlayerById(int id);

    Player addPlayer(Player player);

    Player updatePlayer(int id, Player player);

    void deletePlayer(int id);
}