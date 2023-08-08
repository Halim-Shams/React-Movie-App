import React from 'react';
import tw from 'tailwind-styled-components';

const Movie = ({type, year, title, poster}) => {
	return (
		<MovieCard>
			<MovieDetail>
				<div className='flex justify-between items-center'>
					<p className='font-medium text-sm font-serif text-yellow-500'>
						{type}
					</p>
					<p className='font-light text-xs font-mono text-yellow-300'>{year}</p>
				</div>
				<p className='font-semibold capitalize text-gray-50'>{title}</p>
			</MovieDetail>
			<img className='w-full h-full object-cover' src={poster} />
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
md:group-hover:-translate-y-20
md:transition
md:delay-75
md:-bottom-20
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
