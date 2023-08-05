import React from 'react';
import Movie from './Movie';

const Movies = () => {
	return (
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8 lg:gap-8 xl:gap-8'>
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
		</div>
	);
};

export default Movies;
