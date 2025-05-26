'use client';

import React, { use } from 'react'
import Navbar from './Navbar'
import Billboard from './Billboard';
import MovieList from './MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';

const HomeContent = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
}

export default HomeContent