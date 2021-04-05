import Link from "next/link";
import React, { FC } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { SiCoderwall } from "react-icons/si";
import DarkModeBtn from '../dark-mode-button/dark-mode-button';
const Header: FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-nav-light font-display dark:bg-nav-dark rounded text-words-light dark:text-words-dark ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link href="/">
                  <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                  >
                    <SiCoderwall className="text-lg" />
                  </a>
                </Link>

                <button
                  className="cursor-pointer text-xl  px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none h-auto"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <GiHamburgerMenu />
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"

                      >
                        Home
                      </a>

                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link href="/blog">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"

                      >
                        Blog
                      </a>
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"

                      >
                        about
                      </a>
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"

                      >
                        Contact
                      </a>
                    </Link>

                  </li>
                  <li className="nav-item p-1">

                    <DarkModeBtn />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
