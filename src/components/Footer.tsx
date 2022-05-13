import Contact from './Contact';

const Footer: React.FC = () => {
	return (
		<footer className='pt-16 mt-12 bg-dark'>
			<div className='container'>
				<div className='flex flex-wrap pb-6'>
					<div className='w-full px-4 font-medium text-slate-300 md:w-1/3'>
						<h2 className='mb-2 text-3xl font-bold text-white'>
							Fajrianwar fachrul
						</h2>
						<p>fajrianwarfachrul@gmail.com</p>
						<p>Jl. Manggis VI, Semarang City, 50249</p>
						<p className='mb-4'>Indonesia</p>
						<div className='px-2 py-1 bg-white rounded-md bg-opacity-90 max-w-max'>
							<Contact />
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center w-full py-2 text-white border-t-2 border-slate-700 '>
					<p className='py-2'>@2022 build with <a href='https://reactjs.org/' target={'_blank'} rel="noreferrer" className='text-blue-400'>reactJS</a></p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
