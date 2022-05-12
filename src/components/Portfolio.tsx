import ecommerce from '../dist/portfolio/ecommerce.png';
import jagoanFC from '../dist/portfolio/jagoanFC.jpeg';

const linkEcommerce = 'https://mern-ecommerce-app-fajri.herokuapp.com/';
const linkJagoanFC = 'https://github.com/fajrianwarf/react-test-widya';

const Portfolio: React.FC = () => {
	return (
		<section id='portfolio' className='pt-24'>
			<div className='container'>
				<div className='w-full px-4'>
					<div className='max-w-xl mx-auto mb-8 text-center'>
						<h4 className='mb-2 text-lg font-bold uppercase text-primary'>
							Portfolio
						</h4>
						<h2 className='mb-4 text-3xl font-bold text-dark '>My projects</h2>
						<p className='font-medium text-secondary'>
							These are my projects, feel free to check it out !!
						</p>
					</div>
				</div>
				<div className='flex flex-wrap justify-center w-full px-4 lg:w-10/12 lg:mx-auto gap-y-12'>
					<div className='p-4 md:w-1/2'>
						<div className='overflow-hidden rounded-md shadow-md'>
							<img src={ecommerce} alt='ecommerce' width={'full'} />
						</div>
						<a
							href={linkEcommerce}
                            target="_blank" rel="noopener noreferrer"
							className='block mt-5 mb-2 text-xl font-semibold hover:text-primary text-dark'
						>
							E-commerce App
						</a>
						<p className='text-base font-medium text-secondary'>
							An ecommerce app using MERN as the stack, where the customer can
							choose the products, add to the carts, and purchasing the products
							that the store already provide.
						</p>
					</div>
					<div className='p-4 md:w-1/2'>
						<div className='overflow-hidden rounded-md shadow-md'>
							<img src={jagoanFC} alt='jagoanFC' width={'full'} />
						</div>
						<a
							href={linkJagoanFC}
							target='_blank'
							rel='noopener noreferrer'
							className='block mt-5 mb-2 text-xl font-semibold hover:text-primary text-dark'
						>
							Jagoan FC App
						</a>
						<p className='text-base font-medium text-secondary'>
							An app for administration one football coach that can make the
							administration process easier. Using React-Typescript for the
							front-end and TailwindCSS for the 3rd-UI.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
