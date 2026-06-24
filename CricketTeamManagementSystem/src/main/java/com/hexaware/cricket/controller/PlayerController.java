package com.hexaware.cricket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.service.IPlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
@Validated
public class PlayerController {

    @Autowired
    private IPlayerService service;

    @GetMapping
    public List<Player> getAllPlayers() {
        return service.getAllPlayers();
    }

    @GetMapping("/{playerId}")
    public Player getPlayerById(@PathVariable int playerId) {
        return service.getPlayerById(playerId);
    }

    @PostMapping
    public Player addPlayer(@Valid @RequestBody Player player) {
        return service.addPlayer(player);
    }

    @PutMapping("/{playerId}")
    public Player updatePlayer(
            @PathVariable int playerId,
            @Valid @RequestBody Player player) {

        return service.updatePlayer(playerId, player);
    }

    @DeleteMapping("/{playerId}")
    public String deletePlayer(@PathVariable int playerId) {

        service.deletePlayer(playerId);

        return "Player deleted successfully";
    }
}