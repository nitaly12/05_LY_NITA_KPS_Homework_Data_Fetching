import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <div >
      <nav class="absolute z-[999] w-full">
        <div class="flex flex-wrap items-center justify-between mx-10">
          
          <Link href="/" class="flex items-center">
            <img src="/image/Legend-Cinema-600x600-removebg-preview.png" class=" h-32" alt="Flowbite Logo" />
          </Link>
        
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div class="flex md:order-2">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <input type="text" id="search-navbar" class="block w-full p-[10px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type to Search..."/>
            </div>
          </div>
            <div class="relative mt-3 md:hidden ">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" class="border border-gray-300 placeholder-current h-10 px-5 pr-16  rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200" placeholder="Type to Search..."/>
            </div>
          
            <ul
              class=" flex flex-col mr-10 p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-10 md:mt-0 md:border-0">
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-white hover:text-black dark:text-black md:dark:hover:text-black dark:hover:text-black">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black dark:text-white md:dark:hover:text-black dark:hover:bg-white-700 dark:hover:text-black">Popular</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black dark:text-white md:dark:hover:text-black dark:hover:bg-white-700 dark:hover:text-black">Romance</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black dark:text-white md:dark:hover:text-black dark:hover:bg-white-700 dark:hover:text-black">Anime</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
