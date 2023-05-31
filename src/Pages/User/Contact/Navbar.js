import React from 'react'
import { AiOutlineUsergCiAlignToproupAdd } from "react-icons/fa";

import { InboxIcon,BeakerIcon } from '@heroicons/react/24/solid'
import { icons } from '../../../IconComponents';
const Navbar = ({click}) => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" 
          className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <icons.FaBeer/>
            user
          </button>
          <a href="#" className="flex ml-2 md:mr-24">
            <img src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
            className="h-8 mr-3" alt="FlowBite Logo" />

            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Chat</span>
          </a>
          <form  className="hidden lg:block lg:pl-3.5">
            {/* <label htmlFor="topbar-search" className="sr-only">Search</label>
            <div className="relative mt-1 lg:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              

              </div>
               <input type="text" name="email" id="topbar-search" className="bg-gray-50 border
               border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full 
               pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"/> 
            </div> */}
          </form>
        </div>
        <div className="flex items-center">
            <div className=" mr-3 -mb-1  ">
            
              <button className="github-button"
              onClick={()=>click()}
                data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" 
                data-size="large" data-show-count="true" aria-label="Star themesberg/flowbite-admin-dashboard on GitHub">
                 User List
                </button>
            </div>
            
            <button id="toggleSidebarMobileSearch" type="button" className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Search</span>
              
            </button>
            
            <button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
              <span className="sr-only">View notifications</span>
              
            </button>
            
            <div className="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700" id="notification-dropdown">
              <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  Notifications
              </div>
              <div>
                <a href="#" className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div className="flex-shrink-0">
                    <img className="rounded-full w-11 h-11" 
                    src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                     alt="Jese image"/>
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700">
                    </div>
                  </div>
                  <div className="w-full pl-3">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"</div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">a few moments ago</div>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div className="flex-shrink-0">
                    <img className="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png" 
                    alt="Jese image"/>
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700">
                    </div>
                  </div>
                  <div className="w-full pl-3">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">10 minutes ago</div>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div className="flex-shrink-0">
                    <img className="rounded-full w-11 h-11" 
                    src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="Joseph image"/>
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700">
                    </div>
                  </div>
                  <div className="w-full pl-3">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">44 minutes ago</div>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div className="flex-shrink-0">
                    <img className="rounded-full w-11 h-11" src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                     alt="Leslie image"/>
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700">
                    </div>
                  </div>
                  <div className="w-full pl-3">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span className="font-medium text-primary-700 dark:text-primary-500">@bonnie.green</span> what do you say?</div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">1 hour ago</div>
                  </div>
                </a>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex-shrink-0">
                    <img className="rounded-full w-11 h-11" 
                    src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="Robert image"/>
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700">
                    </div>
                  </div>
                  <div className="w-full pl-3">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">3 hours ago</div>
                  </div>
                </a>
              </div>
              <a href="#" className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
                  <div className="inline-flex items-center ">
                    View all
                  </div>
              </a>
            </div>
            
            <button type="button" data-dropdown-toggle="apps-dropdown" className="hidden p-2 text-gray-500 rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
              <span className="sr-only">View notifications</span>
              
            </button>
            
            <div className="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600" id="apps-dropdown">
              <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  Apps
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Sales</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Users</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Inbox</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Profile</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Settings</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Products</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Pricing</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Billing</div>
                </a>
                <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
                </a>
              </div>
            </div>
            <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
             
            </button>
            <div id="tooltip-toggle" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Toggle dark mode
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            
            <div className="flex items-center ml-3">
              <div>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user photo"/>
                </button>
              </div>
              
              <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-2">
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900 dark:text-white" role="none">
                    Neil Sims
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar