import tw from 'tailwind-styled-components';
import Movies from './Components/Movies';
import Search from './Components/Search';

function App() {
	return (
		<div className='flex flex-col items-center justify-center gap-24 pt-10'>
			<div className='flex flex-col items-center justify-center gap-2'>
				<Brand>Mvee</Brand>
				<Search />
			</div>
			<Movies />
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
