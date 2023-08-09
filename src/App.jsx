import tw from 'tailwind-styled-components';
import Movies from './Components/Movies';
import Search from './Components/Search';
import {useEffect, useState} from 'react';

function App() {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('Creed');
	const [loading, setLoading] = useState(false);

	const url = 'http://www.omdbapi.com?apikey=2d86c6da';
	const fetchData = async (search) => {
		setLoading(true);
		try {
			const response = await fetch(`${url}&s=${search}`);
			const result = await response.json();
			setData(result.Search);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(search);
	}, [search]);

	return (
		<div className='flex flex-col items-center justify-center gap-24 py-10'>
			<div className='flex flex-col items-center justify-center gap-3'>
				<Brand>Mvee</Brand>
				<Search searchInput={setSearch} />
			</div>
			{loading ? (
				<div className='w-12 h-12 rounded-full border-2 border-yellow-500 animate-pulse'></div>
			) : (
				<Movies data={data} />
			)}
		</div>
	);
}

const Brand = tw.p`
font-black
text-transparent
bg-clip-text
bg-gradient-to-br
from-yellow-600
to-yellow-200/30

text-5xl
sm:text-6xl
`;

export default App;
