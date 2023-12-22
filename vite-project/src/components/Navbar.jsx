import React from 'react'
import { FaSearch } from "react-icons/fa";
import {NavLink,Link} from 'react-router-dom'
import {count1,features,Industries} from '../components/Data'
import '../App.css'

function Navbar() {
  return (
    <>
    <nav class="grad fixed w-full z-20 top-0 start-0  dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">KOUNT</span>
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a demo</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border text-white rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
        <li className='group relative w-full'>
            <NavLink to="/" class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 menu-hover w-full"  onClick="">Why Kount
            <div className='invisible absolute flex bg-gray-900 text-white py-1 px-4 group-hover:visible  grad' onClick="" style={{left:-490,width:'100vw'}}>
                {/* <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a> */}
               
{count1.map((item)=>{
    return  <div class="w-6/12 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 ">
    <div class="p-8 m-8">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal">{item.para}</p>

    </div>
</div>
})}
 </div> </NavLink>
</li>
        <li className='group relative'>
            <NavLink to="/features" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " >Features
            {/* <div className='invisible absolute z-50 flex w-full flex-col bg-gray-900 py-1 px-4 text-white group-hover:visible' onClick="">
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a>
            </div> */}
            <div className='invisible absolute flex bg-gray-900 text-white py-1 px-4 group-hover:visible  ' onClick="" style={{left:-600,width:'100vw'}}>
                {/* <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a> */}
               
{count1.map((item)=>{
    return  <div class="w-6/12 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 ">
    <div class="p-8 m-8">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.para}</p>

    </div>
</div>
})}
 </div>
            </NavLink>
        </li>
        <li className='group relative'>
            <NavLink to="/industries" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " >Industries
            {/* <div className='invisible absolute z-50 flex w-full flex-col bg-gray-900 py-1 px-4 text-white group-hover:visible' onClick="">
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a>
            </div> */}
            <div className='invisible absolute flex bg-gray-900 text-white py-1 px-4 group-hover:visible  ' onClick="" style={{left:-700,width:'100vw'}}>
                {/* <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a> */}
               
{count1.map((item)=>{
    return  <div class="w-6/12 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 ">
    <div class="p-8 m-8">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.para}</p>

    </div>
</div>
})}
 </div>
            </NavLink>
        </li> 
        <li className='group relative'>
            <NavLink to="/resources" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " >Resources
            {/* <div className='invisible absolute z-50 flex w-full flex-col bg-gray-900 py-1 px-4 text-white group-hover:visible' onClick="">
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a>
            </div> */}
            <div className='invisible absolute flex bg-gray-900 text-white py-1 px-4 group-hover:visible  ' onClick="" style={{left:-800,width:'100vw'}}>
                {/* <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a> */}
               
{count1.map((item)=>{
    return  <div class="w-6/12 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 ">
    <div class="p-8 m-8">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.para}</p>

    </div>
</div>
})}
 </div>
            </NavLink>
        </li>
        <li className='group relative'>
            <NavLink to="/pricing" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " >Pricing
            {/* <div className='invisible absolute z-50  w-full  bg-gray-900 py-1 px-4 text-white group-hover:visible res' onClick="">
                <div className='my-2 block border-b border-gray-100  text-white w-8/12  m-4'>
                <h2 className='font-semibold'>Strategy </h2>
                <p className='font-light'>Protection Against Data</p>
                 </div>
             <div className='my-2 block border-b border-gray-100  text-white w-8/12  m-4 mt-4'>
                <h2 className='font-semibold'>Strategy </h2>
                <p className='font-light'>Protection Against Data</p>
                 </div>
             <div className='my-2 block border-b border-gray-100  text-white w-8/12  m-4 mt-4 mb-4'>
                <h2 className='font-semibold'>Strategy </h2>
                <p className='font-light'>Protection Against Data</p>
             </div>
            </div> */}
            <div className='invisible absolute flex bg-gray-900 text-white py-1 px-4 group-hover:visible ' onClick="" style={{left:-900,width:'100vw'}}>
                {/* <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P1 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P2 </a>
                <a className='my-2 block border-b border-gray-100 font-semibold text-white hover:text-gray-900'>P3 </a> */}
               
{count1.map((item)=>{
    return  <div class=" w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 ">
    <div class="p-8 m-8">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.para}</p>

    </div>
</div>
})}
 </div>
            </NavLink>
        </li>
        <li>
            <div class="pt-1"><a href="#" ><FaSearch /></a></div>
        </li>
        </ul>
    </div>
    </div>
    </nav>

    </>
  )
}

export default Navbar