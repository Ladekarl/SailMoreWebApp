import React from "react";
import Routes from "../../routes/Routes";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import NavItem from "../../components/header/NavItem";
import DropDownItem from "../../components/header/DropDownItem";
import MobileNavItem from "../../components/header/MobileNavItem";
import { useLocation } from 'react-router-dom'
import MobileDropDownItem from "../../components/header/MobileDropDownItem";


type Route = {
  to: string,
  title: string
}

const HeaderRoutes: Route[] = [
  { title: "Alle Sejltogter", to: Routes.ALLE_SEJLTOGTER, },
  { title: "Opret Gasteprofil", to: Routes.OPRET_GASTEPROFIL, },
  { title: "Opret Skipperprofil", to: Routes.OPRET_SKIPPERPROFIL, },
  { title: "Værd at Vide", to: Routes.VÆRD_AT_VIDE, },
  { title: "Økonomi", to: Routes.ØKONOMI, },
  { title: "Login", to: Routes.LOGIN, },
];

const DropdownRoutes: Route[] = [
  { title: "Your Profile", to: "/" },
  { title: "Settings", to: "/" },
  { title: "Sign out", to: "/" },
];


function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div>
        <nav className="bg-white">
          <div className="w-full mx-auto shadow h-16">
            <div
              className="px-6 flex items-center justify-between h-full"
              onClickCapture={() => setIsOpen(false)}
            >
              <div className="flex items-center h-full">
                <a className="flex-shrink-0" href={Routes.FORSIDE}>
                  <img
                    className="h-8 w-32"
                    src={require("../../assets/images/sailmorelogo.jpg")}
                    alt="Workflow"
                  ></img>
                </a>
                <div className="hidden md:block h-full">
                  <div className="ml-10 flex items-center xl:flex h-full">
                    {HeaderRoutes.map(route => <NavItem to={route.to} active={location.pathname === route.to}>{route.title}</NavItem>)}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="ml-3 relative">
                    <div>
                      <button
                        type="button"
                        className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                        id="user-menu"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <svg className="h-10 w-10 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" opacity="0.7">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <Transition
                      show={isOpen}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        {DropdownRoutes.map(route => <DropDownItem to={route.to}>{route.title}</DropDownItem>)}
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Transition show={isOpen}>
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {HeaderRoutes.map(route => <MobileNavItem to={route.to} active={location.pathname === route.to}>{route.title}</MobileNavItem>)}
              </div>
              <div className="pb-3 border-t border-gray-700">
                <div className="mt-3 px-2 space-y-1">
                  {DropdownRoutes.map(route => <MobileDropDownItem to={route.to}>{route.title}</MobileDropDownItem>)}
                </div>
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </>
  );
}

export default Menu;
