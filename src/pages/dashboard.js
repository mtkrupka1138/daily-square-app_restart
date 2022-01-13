import React from 'react';
import SquaresTimeline from '../components/squares-timeline';


function Dashboard () {

  return (
    <SquaresTimeline />
  )
//     return (
//         <div>
// <nav class="bg-white shadow">
//   <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//     <div class="relative flex justify-between h-16">
//       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

//  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> 
// <span class="sr-only">Open main menu</span> 
   
//        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg> 

//         <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//           </svg> 
//          </button> 
//       </div>
//       <div class="flex-1 flex items-center justify-start sm:items-stretch">
//         <div class="flex-shrink-0 flex items-center">
//           <img class="lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
//         </div>
//         <div class="sm:ml-6 sm:flex sm:space-x-8"></div>
//       </div>
//       <div class="absolute z-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <h3 class="text-gray-400">Hi, Shane</h3>

//         <div class="ml-3  relative">
//           <div class="py-3">
//             <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//               <span class="sr-only">Open user menu</span>
//               <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//             </button>
//           </div>


//           <div class="origin-top-right absolute -right-2.5 mt-2 w-48 rounded-3xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

//             <button type="button" class="bg-white rounded-full items-center px-14 justify-center text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//               <img class="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//             </button>
//             <a href="#" class="block border-b px-4 py-2 text-sm text-gray-700 text-center" role="menuitem" tabindex="-1" id="user-menu-item-0">Hi, Shane</a>
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700 text-center" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>


// <div class=" md:flex md:flex-shrink-0 ">
//   <div class="flex flex-col w-64">

//     <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
//       <div class="mt-5 flex-grow flex flex-col">
//         <div class="flex-1 px-2 bg-white space-y-1">
        
//           <a href="#" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
//             <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//             </svg>
//             Dashboard
//           </a>

//           <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
       
//             <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//             </svg>
//             Team
//           </a>

//           <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
         
//             <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
//             </svg>
//             Projects
//           </a>

//           <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
       
//             <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//             Calendar
//           </a>

//           <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          
//             <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//             </svg>
//             Documents
//           </a>

//           <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
           
//             <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//             Reports
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="flex flex-col w-0 flex-1 overflow-hidden">
//     <div class="flex  flex-shrink-0 ">

//       <div class="flex flex-col w-0 flex-1 overflow-hidden">
//         <div class="flex-1 relative flex-shrink-0 overflow-y-auto focus:outline-none">
//           <div class="py-6">

//             <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//               <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
//               <div class=" flex-1 grid relative overflow-y-auto focus:outline-none">
//                 <div class="py-6">
//                   <div class="px-4 sm:px-6 md:px-0">
//                     <h4 class="text-xl font-semibold text-gray-900">What do you want to learn about?</h4>
//                     <div class="px-4 sm:px-6 md:px-0">
//                       <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
//                         <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
//                           <div class="w-full">
//                             <label for="search" class="sr-only">Search</label>
//                             <div class="relative">
//                               <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    
//                                 <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                   <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
//                                 </svg>
//                               </div>
//                               <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <h4 class="text-lg font-semibold text-gray-900 py-2">Here are the key subtopics for "Crypto" </h4>
//                       <div class=" border-2 rounded-xl text-lg p-3 max-w-md ">
//                         <ol class=" list-inside  list-decimal ">
//                           <li class=" text-lg font-semibold">
//                             Bitcoin
//                           </li>
//                           <li class=" text-lg font-semibold">
//                             Blockchain
//                           </li>
//                           <li class=" text-lg font-semibold">
//                             Ethereum
//                           </li>
//                           <li class=" text-lg font-semibold">
//                             Cryptocurrency
//                           </li>
//                           <li class=" text-lg font-semibold">
//                             Non-fungible tokens
//                           </li>
//                         </ol>
//                       </div>
//                       <div class=" py-3">
//                         <button class=" bg-black text-white rounded-xl text-center w-1/3 p-3 text-lg font-semibold font-sans "> Create Playlist
//                         </button>
//                       </div>
                  
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
       
//     )
}

export default Dashboard;