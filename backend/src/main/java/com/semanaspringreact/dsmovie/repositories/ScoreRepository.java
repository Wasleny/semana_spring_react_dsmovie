package com.semanaspringreact.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.semanaspringreact.dsmovie.entities.Score;
import com.semanaspringreact.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
		
}
