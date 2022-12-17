import { FC, useState } from 'react';

import CustomLink from '../CustomLink';

import logo from '../../assets/logo.png';

import 'primeicons/primeicons.css';

const Header: FC = () => {
  const [collapse, setCollapse] = useState<boolean>(true);

  const handleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  // TODO: refactor burger menu
  return (
    <header className="w-full p-4 mb-5 border-gray-200 bg-gray-50 dark:bg-gray-800 md:px-6 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between min-w-full">
        <CustomLink
          href="https://github.com/artemshchirov/web-starter"
          className="flex items-center"
        >
          <img
            src={logo}
            className="h-6 mr-3 sm:h-10"
            alt="DevRel Hackathon Logo"
          />
          <span className="self-center text-xl font-semibold text-transparent text-white whitespace-nowrap bg-clip-text bg-gradient-to-r">
            HackWagon
          </span>
        </CustomLink>

        <button
          onClick={handleCollapse}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <i className="pi pi-bars"></i>
        </button>

        <div
          className={`${collapse ? 'hidden' : ''} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <CustomLink
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="dark:text-white underline"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="dark:text-white underline"
              >
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="dark:text-white underline"
              >
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
