import profile from '../dist/img/profile.png';
import blob from '../dist/icons/blob.svg';

const Hero: React.FC = () => {
	return (
		<section id='home' className='pt-24'>
			<div className='container'>
				<div className='flex flex-wrap'>
					<div className='self-center w-full px-4 lg:w-1/2'>
						<h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>
							Hello everyone !!👋, My name is
							<span className='block pt-1 pb-2 text-4xl font-bold text-dark lg:text-5xl'>
							    Fajrianwar Fachrul
							</span>
						</h1>
						<h2 className='mb-5 text-lg font-medium text-secondary lg:text-2xl'>
							I am <span className='text-dark'>Web developer</span>
						</h2>
						<p className='mb-10 font-medium leading-relaxed text-secondary'>
							Passionate in programming, particulary focusing on web development especially at front-end. Using MERN stack as my fullstack development, and TailwindCSS as my favorite 3rd-UI. Nice to meet you !!
						</p>
						<a href='#contact' className='block px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out rounded-full max-w-max bg-primary hover:shadow-lg hover:opacity-80'>
							Contact me
						</a>
					</div>
					<div className='self-end w-full px-4 pt-10 lg:pt-0 lg:w-1/2'>
						<div className='relative lg:mt-0 lg:float-right'>
							<img src={profile} alt='profile' className='mx-auto' />
							<img
								src={blob}
								alt='blob'
								className='absolute bottom-0 left-0 right-0 justify-center mx-auto -z-10'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
