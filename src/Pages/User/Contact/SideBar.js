import React from 'react'

const SideBar = () => {
  return (
    <aside id="sidebar" className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
    <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          <ul className="pb-2 space-y-2">
            <li>
              <form  className="lg:hidden">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  </div>
                  <input type="text" name="email" id="mobile-search" 
                  className="bg-gray-50 border border-gray-300 text-gray-900
                   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10
                   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"/>
                </div>
              </form>
            </li>
            <li>
              <a href="https://flowbite-admin-dashboard.vercel.app/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                  <span className="ml-3" sidebar-toggle-item>Dashboard</span>
              </a>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts">
                 
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Layouts</span>
              </button>
              <ul id="dropdown-layouts" className="hidden py-2 space-y-2">
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/layouts/stacked/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Stacked</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/layouts/sidebar/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sidebar</a>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-crud" data-collapse-toggle="dropdown-crud">
                 
              </button>
              <ul id="dropdown-crud" className="space-y-2 py-2 hidden ">
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/crud/products/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Products</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/crud/users/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Users</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://flowbite-admin-dashboard.vercel.app/settings/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 ">
                  
                  <span className="ml-3" sidebar-toggle-item>Settings</span>
              </a>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Pages</span>
              </button>
              <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/pages/pricing/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Pricing</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/pages/maintenance/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Maintenance</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/pages/404/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">404 not found</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/pages/500/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">500 server error</a>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-auth" data-collapse-toggle="dropdown-auth">
                  
              </button>
              <ul id="dropdown-auth" className="hidden py-2 space-y-2">
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/authentication/sign-in/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign in</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/authentication/sign-up/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign up</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/authentication/forgot-password/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Forgot password</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/authentication/reset-password/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Reset password</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/authentication/profile-lock/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Profile lock</a>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-playground" data-collapse-toggle="dropdown-playground">
                 
              </button>
              <ul id="dropdown-playground" className="space-y-2 py-2 hidden ">
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/playground/stacked/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Stacked</a>
                </li>
                <li>
                  <a href="https://flowbite-admin-dashboard.vercel.app/playground/sidebar/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Sidebar</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="pt-2 space-y-2">
            <a href="https://github.com/themesberg/flowbite-admin-dashboard" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
              <span className="ml-3" sidebar-toggle-item>GitHub Repository</span>
            </a>
            <a href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
              <span className="ml-3" sidebar-toggle-item>Flowbite Docs</span>
            </a>
            <a href="https://flowbite.com/docs/components/alerts/" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
              <span className="ml-3" sidebar-toggle-item>Components</span>
            </a>
            <a href="https://github.com/themesberg/flowbite-admin-dashboard/issues" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
              <span className="ml-3" sidebar-toggle-item>Support</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800" sidebar-bottom-menu>
        <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        </a>
        <a  data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        </a>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Settings page
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button type="button" data-dropdown-toggle="language-dropdown" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        </button>
        
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700" id="language-dropdown">
          <ul className="py-1" role="none">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                 
                  English (US)
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                 
                  Deutsch
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                  
                  Italiano
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                 
                 
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
  )
}

export default SideBar