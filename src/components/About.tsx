import Contact from './Contact';

const About: React.FC = () => {
	return (
		<section id='about' className='pt-24'>
			<div className='container'>
				<div className='flex flex-wrap'>
					<div className='w-full px-4 mb-10 lg:w-1/2'>
						<h4 className='mb-2 text-lg font-bold uppercase text-primary'>
							About me
						</h4>
						<h2 className='mb-4 text-3xl font-bold lg:text-4xl text-dark'>
							My story
						</h2>
						<p className='max-w-xl text-base font-medium lg:text-lg text-secondary'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt dolorum odit magnam esse vel, officia corporis iusto, adipisci consequuntur exercitationem, at quod. Culpa quod ipsam ad ipsum voluptates beatae?
						</p>
					</div>
					<div className='w-full px-4 lg:w-1/2'>
						<h3 className='mb-4 text-2xl font-semibold lg:text-3xl lg:pt-10 text-dark'>
							Let's be friend
						</h3>
						<p className='mb-6 text-base font-medium lg:text-lg text-secondary'>
							Do you want to get to know me better ? Let's be friends then!! you can reach me with my social media's account below.
						</p>
						<Contact />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
