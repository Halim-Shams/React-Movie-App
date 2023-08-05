import React from 'react';

const Movie = () => {
	return (
		<div className='h-[16rem] w-[10rem] overflow-hidden rounded-md relative'>
			<div className='bg-gray-700/60 backdrop-blur-sm absolute w-full bottom-0 py-1'>
				<div className='flex justify-between px-1 items-center'>
					<p className='font-medium text-sm font-serif text-yellow-500'>
						Movie
					</p>
					<p className='font-light text-xs pr-1 font-mono text-yellow-300 pl-0.5'>
						2023
					</p>
				</div>
				<p className='font-semibold capitalize text-gray-50 px-1'>
					Oppenheimer
				</p>
			</div>
			<img
				className='w-full h-full object-cover'
				src='https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900'
			/>
		</div>
	);
};

export default Movie;
