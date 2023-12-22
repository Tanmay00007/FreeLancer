import React from 'react'
import { FaInstagram,FaTwitter,FaFacebook,FaYoutube,FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
    
    <div class="flex flex-col items-center w-50% bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  mb-4 p-4">
    <div class="flex flex-col  leading-normal w-6/12 mt-32 ">
    <h2 className=' text-xl mt-12 ml-12 dark:text-green-600'>EXPLORE KOUNT</h2>
        <h5 class=" text-5xl p-4 ml-8 font-bold tracking-tight text-gray-900 dark:text-white mt-4">Unique Features.</h5>
        <p class=" font-normal text-gray-900 dark:text-white text-2xl p-12">Kount offers a complete set of cutting-edge features, creating unparalleled protection. Whether you need account protection, data insights, chargeback management, or help with compliance regulations, Kount has you covered. There are no limits to what we can help you accomplish. </p>
        <div className='border-b-4 border-green-600 w-48 m-12'></div>
    </div>
    

<form class=" mx-auto bg-white w-4/12 p-10 ">
    <h5 className='mx-auto font-bold text-4xl mb-5'>Schedule your demo</h5>
  <div class="mb-5">
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email Address" required />
  </div>
  <div class="mb-5">
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="First Name"  required />
  </div>
  <div class="mb-5">
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Last Name" required />
  </div>
  <div class="mb-5">
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Company"  required />
  </div>
  <div class="mb-5">
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Phone"  required />
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-48">Register demo</button>
</form>

</div>

<footer class="bg-white mt-32">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap">Kount</span>
              </a>
              <div className='w-6/12 mt-4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium quasi</p></div>
              <div className='flex mt-16'>
              <FaInstagram className='mr-4' size={30}/>
              <FaTwitter className='mr-4' size={30}/>
              <FaFacebook className='mr-4' size={30}/>
              <FaYoutube className='mr-4' size={30}/>
              <FaLinkedin size={30}/>
              </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-lg font-medium text-gray-900 uppercase dark:text-blue-500">Support</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-lg font-medium text-gray-900 uppercase dark:text-blue-500">Company</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-lg font-medium text-gray-900 uppercase dark:text-blue-500">Trending</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer