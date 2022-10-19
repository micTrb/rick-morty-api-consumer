import React, {useState} from "react";

import { Link } from "react-router-dom";
import classNames from 'classnames';

const navigation = [
	{ key: 1, name: 'Home', href: '/' },
	{ key: 2, name: 'Characters', href: '/characters' },
	{ key: 3, name: 'Locations', href: '/locations' },
  { key: 4, name: 'Episodes', href: '/episodes' },
]

const Navbar = ({ siteTitle }) => {



	const [isOpen, setIsOpen] = useState(true);

	const handleSetIsOpen = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className={classNames(`pt-12
			lg:flex lg:justify-center transition-all 
			duration-300 ease-in-out
			lg:items-center `,
			{
				'bg-slate-500': isOpen,
				'bg-slate-500': !isOpen
			}
		)}>


			<div className="flex items-center justify-between sm:ml-20 ml-12">

				{/* Mobile menu bitton */}
				<div className="sm:mr-20 mr-8 flex lg:hidden">
					<button onClick={handleSetIsOpen} type="button"
						className="text-gray-500 dark:text-gray-200 
            hover:text-gray-600 dark:hover:text-gray-400 
            focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
						{/* Close X */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={classNames(
								'w-6 h-6 text-white',
								{
									'flex': isOpen,
									'hidden': !isOpen
								}
							)}
							fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
						</svg>

						{/* Hamburger */}
						<svg xmlns="http://www.w3.org/2000/svg"
							className={classNames(
								'w-6 h-6 text-white',
								{
									'flex': !isOpen,
									'hidden': isOpen
								}
							)}
							fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>

					</button>
				</div>

			</div>

			<div className=
				{classNames(
					`absolute inset-x-0 z-20 sm:mr-20 mr-8
						w-full h-full px-6 py-4 transition-all 
						duration-300 ease-in-out
						shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none
						bg-slate-500 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto 
						lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`,
					{
						'opacity-100': !isOpen,
						'opacity-0 hidden': isOpen
					}
				)}>

				<div className="flex flex-col space-y-4 mt-4 lg:flex-row lg:-px-8 lg:space-y-0">
					{navigation.map(n =>
						<a key={n.key}
							className="text-white lg:text-2xl text-4xl
								lg:pt-0 pt-8
								transition-colors duration-300 
								transform lg:mx-8 mx-auto"
							href={n.href}>{n.name}</a>
					)}
				</div>

			</div>
		</nav>
	)
}

export default Navbar
