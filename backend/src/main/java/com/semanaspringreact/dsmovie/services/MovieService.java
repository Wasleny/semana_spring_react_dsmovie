package com.semanaspringreact.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.semanaspringreact.dsmovie.dto.MovieDTO;
import com.semanaspringreact.dsmovie.entities.Movie;
import com.semanaspringreact.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(movie -> new MovieDTO(movie));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie result = repository.findById(id).get();
		MovieDTO movie = new MovieDTO(result);
		return movie;
	}
}
