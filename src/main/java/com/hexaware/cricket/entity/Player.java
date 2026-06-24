package com.hexaware.cricket.entity;

import jakarta.persistence.*;

@Entity
@Table(name="players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int playerId;

    private String playerName;

    private int jerseyNumber;

    private Role role;

    private int totalMatches;

    private String teamName;

    private String countryStateName;

    private String description;

    public Player() {
    }

	public int getPlayerId() {
		return playerId;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public int getJerseyNumber() {
		return jerseyNumber;
	}

	public void setJerseyNumber(int jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(int totalMatches) {
		this.totalMatches = totalMatches;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getCountryStateName() {
		return countryStateName;
	}

	public void setCountryStateName(String countryStateName) {
		this.countryStateName = countryStateName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    
}