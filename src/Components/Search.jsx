import {BsSearch} from 'react-icons/bs';

const Search = () => {
	return (
		<form className='w-[15rem] xs:w-[17rem] sm:w-[31rem] md:w-[44rem]'>
			<div className='flex relative'>
				<input
					type='search'
					placeholder='Search...'
					className='group w-full border rounded-md py-2 pl-5 pr-10 text-lg outline-none focus:border-yellow-500 hover:shadow-lg focus:shadow-xl transition'
				/>
				<button
					className='text-xl absolute right-3 inset-y-0 hidden sm:block'
					type='submit'>
					<BsSearch className='text-gray-400 hover:text-yellow-500 active:scale-110 transition' />
				</button>
			</div>
		</form>
	);
};

export default Search;
