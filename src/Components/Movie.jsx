import React from 'react';
import tw from 'tailwind-styled-components';

const Movie = () => {
	return (
		<MovieCard>
			<MovieDetail>
				<div className='flex justify-between items-center'>
					<p className='font-medium text-sm font-serif text-yellow-500'>
						Movie
					</p>
					<p className='font-light text-xs font-mono text-yellow-300'>2023</p>
				</div>
				<p className='font-semibold capitalize text-gray-50'>Oppenheimer</p>
			</MovieDetail>
			<img
				className='w-full h-full object-cover'
				src='https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900'
			/>
		</MovieCard>
	);
};

const MovieCard = tw.div`
group
md:hover:scale-105
md:transition

h-[24rem]
w-[15rem]
xs:h-[26rem]
xs:w-[17rem]
sm:h-[23rem]
sm:w-[14rem]
md:h-[20rem]
md:w-[13rem]
xl:h-[19rem]
xl:w-[12rem]
overflow-hidden
rounded-md
relative
`;

const MovieDetail = tw.div`
md:group-hover:-translate-y-14
md:transition
md:delay-75
md:-bottom-14
bg-gray-700/60
backdrop-blur-sm
absolute
w-full
bottom-0
pt-1
pb-2
px-2
`;

export default Movie;
