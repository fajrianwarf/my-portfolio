import { Menu } from "@headlessui/react";
// import { Link } from "react-router-dom";
import hamburger from '../dist/icons/hamburger.svg'
// import x from '../dist/icons/x.svg'

const Dropdown: React.FC = () => {
	return (
		<Menu>
			<Menu.Button>
                <img src={hamburger} alt="hamburger" className="relative flex items-center justify-end w-10 px-2 py-1 capitalize rounded-lg hover:bg-blue-700/40 gap-x-3" />
                {/* <img src={x} alt="x" className="w-6 lg:hidden" /> */}
            </Menu.Button>
			<Menu.Items as="div" className='absolute items-center w-full mt-2 overflow-hidden text-gray-700 bg-white rounded-md'>
				<Menu.Item>
                    <div className="block w-full px-4 py-2 hover:text-black hover:bg-sky-100">
                        {/* <Link to={}></Link> */}
                        home
                    </div>
                </Menu.Item>
			</Menu.Items>
		</Menu>
	);
};

export default Dropdown;
