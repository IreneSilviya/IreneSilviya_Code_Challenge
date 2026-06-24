package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.exception.ResourceNotFoundException;
import com.hexaware.cricket.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements IPlayerService {

    @Autowired
    private PlayerRepository repo;

    @Override
    public List<Player> getAllPlayers() {
        return repo.findAll();
    }

    @Override
    public Player getPlayerById(int id) {

        return repo.findById(id)
                .orElseThrow(() ->
                new ResourceNotFoundException("Player not found"));
    }

    @Override
    public Player addPlayer(Player player) {
        return repo.save(player);
    }

    @Override
    public Player updatePlayer(int id, Player player) {

        Player existing = repo.findById(id)
                .orElseThrow(() ->
                new ResourceNotFoundException("Player not found"));

        existing.setPlayerName(player.getPlayerName());
        existing.setJerseyNumber(player.getJerseyNumber());
        existing.setRole(player.getRole());
        existing.setTotalMatches(player.getTotalMatches());
        existing.setTeamName(player.getTeamName());
        existing.setCountryStateName(player.getCountryStateName());
        existing.setDescription(player.getDescription());

        return repo.save(existing);
    }

    @Override
    public void deletePlayer(int id) {

        Player player = repo.findById(id)
                .orElseThrow(() ->
                new ResourceNotFoundException("Player not found"));

        repo.delete(player);
    }
    
    @Override
    public List<Player> getPlayersByTeamName(String teamName) {
    	return repo.findByTeamName(teamName);
    }
}