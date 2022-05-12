// import Dropdown from './Dropdown';

const Navbar: React.FC = () => {
	return (
		<header className='sticky top-0 left-0 z-10 flex items-center w-full bg-transparent border-b backdrop-filter backdrop-blur-sm'>
			<div className='container'>
				<div className='relative flex items-center justify-between'>
					<div className='px-4'>
						<a
							href='#home'
							className='block py-4 text-lg font-bold lg:text-xl text-primary'
						>
							<span className='p-1 bg-white rounded-md bg-opacity-70'>fajrianwar f.</span>
						</a>
					</div>
					<div className='flex items-center px-4 gap-x-6'>
						{/* <Dropdown /> */}
                        <a href="#home" className='px-4 py-1 bg-white rounded-md bg-opacity-70'>Home</a>
                        <a href="#about" className='px-4 py-1 bg-white rounded-md bg-opacity-70'>About</a>
                        <a href="#portfolio" className='px-4 py-1 bg-white rounded-md bg-opacity-70'>Portfolio</a>
                        <a href="#contact" className='px-4 py-1 bg-white rounded-md bg-opacity-70'>Contact</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
