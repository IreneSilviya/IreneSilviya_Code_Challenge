package com.hexaware.cricket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.hexaware.cricket.entity.Player;
import java.util.List;
import java.util.Map;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

	List<Player> findByTeamName(String teamName);
}