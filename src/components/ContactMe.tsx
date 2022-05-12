const ContactMe: React.FC = () => {
    return (
        <section id="contact" className="pt-24">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto mb-12 text-center">
                        <h4 className="text-lg font-semibold uppercase text-primary">contact</h4>
                        <h2 className="mb-3 text-3xl font-bold capitalize text-dark lg:text-4xl">Message me</h2>
                        <p className="font-medium text-secondary">for collaboration / hiring / saying hi to me!</p>
                    </div>
                </div>
                <form>
                    <div className="w-full lg:w-1/2 lg:mx-auto">
                        <div className="px-4 my-4 ">
                            <label htmlFor="name" className="font-bold text-primary">Name</label>
                            <input id='name' type="text" className="w-full p-3 mt-1 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring focus:ring-primary focus:border-primary"  />
                        </div>
                        <div className="px-4 my-4">
                            <label htmlFor="email" className="font-bold text-primary">Email</label>
                            <input id='email' type="text" className="w-full p-3 mt-1 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring focus:ring-primary focus:border-primary"  />
                        </div>
                        <div className="px-4 my-4">
                            <label htmlFor="message" className="font-bold text-primary">Message</label>
                            <textarea id='message' rows={4} className="w-full p-3 mt-1 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring focus:ring-primary focus:border-primary"  />
                        </div>
                        <div className="px-4 my-4">
                            <button className="w-full px-8 py-3 text-base font-semibold text-white transition duration-500 rounded-full lg:rounded-md hover:opacity-70 hover:shadow-lg bg-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactMe;