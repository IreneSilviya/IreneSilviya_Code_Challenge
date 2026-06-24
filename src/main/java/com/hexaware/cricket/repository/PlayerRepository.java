package com.hexaware.cricket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hexaware.cricket.entity.Player;
import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

	List<Player> findByTeamName(String teamName);
}