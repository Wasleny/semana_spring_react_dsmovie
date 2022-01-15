package com.semanaspringreact.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.semanaspringreact.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}
