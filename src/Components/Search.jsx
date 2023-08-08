import {BsSearch} from 'react-icons/bs';

const Search = () => {
	return (
		<form className='w-[15rem] xs:w-[17rem] sm:w-[31rem] md:w-[44rem]'>
			<div className='flex relative'>
				<input
					type='search'
					placeholder='Search...'
					className='peer/search w-full border border-gray-300 rounded-md py-2 pl-5 pr-10 text-lg outline-none focus:border-yellow-500 hover:shadow-lg focus:shadow-xl transition'
				/>
				<button
					className='text-xl text-gray-300 peer-focus/search:text-gray-400 absolute right-3 inset-y-0 hidden sm:block'
					type='submit'>
					<BsSearch className='hover:text-yellow-500 active:scale-110 transition' />
				</button>
			</div>
		</form>
	);
};

export default Search;
