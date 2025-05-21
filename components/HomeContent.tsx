'use client';

import React, { use } from 'react'
import Navbar from './Navbar'
import Billboard from './Billboard';
import MovieList from './MovieList';
import useMovieList from '@/hooks/useMovieList';

const HomeContent = () => {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  )
}

export default HomeContent