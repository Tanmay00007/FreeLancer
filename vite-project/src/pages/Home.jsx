import React from 'react'
import Card from '../components/Card'
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import SmallCards from '../components/SmallCards'
import Navbar from '../components/Navbar'
function Home() {
    const cards = [
        {
            id:1,
            img:"",
            title:" Shifting Threats",
            para:" Risk evolves. New threats emerge every day. What worked yesterday might not be effective tomorrow."
        },
        {
            id:2,
            img:"",
            title:" Confusing Processes",
            para:" A lot of time and effort goes into manual tasks. Yet there is no clear way to tell what is and isn't working."
            
        },
        {
            id:3,
            img:"",
            title:" Financial Loss",
            para:" Margins are tight. You can't afford to lose money — yet revenue slips away with every new threat you face."
            
        }
    ]
    const cards2 = [
        {
            id:1,
            img:"",
            title:"Complete Strategy"
        },
        {
            id:2,
            img:"",
            title:"Robust Data"
        },
        {
            id:3,
            img:"",
            title:"User DashBoard"
        },
        {
            
            id:3,
            img:"",
            title:"Machine Learning"
        },
        {
            
            id:3,
            img:"",
            title:"Business Policies"
        },
        {
            
            id:3,
            img:"",
            title:"Flexible Automation"
        } 
    ]
  return (
    <>
    <Navbar />
<div class="flex flex-col items-center w-50% bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-16 w-30% p-4">
    <div class="flex flex-col  leading-normal w-50%">
    <h2 className='text-white text-xl mt-12 ml-12'>WHY KOUNT</h2>
        <h5 class=" text-5xl p-4 ml-8 font-bold tracking-tight text-gray-900 dark:text-white mt-4">Noteworthy technology acquisitions 2021</h5>
        <p class=" font-normal text-gray-700 dark:text-gray-400 text-2xl p-12">Are you looking for an industry leader to protect your growing business with the most efficient yet accurate strategy? You’ve found it. Learn more about why Kount is right for you. </p>
        <button className='bg-blue-600 text-white w-36 ml-12 rounded-full p-3 mb-4'>Request a demo</button>
    </div>
    <img class=" w-6/12 rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=""/>
</div>
<section class="bg-white ">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className='text-blue-600 font-bold mb-2'>THE PROBLEM</h2>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed for business teams like yours</h2>
          <p class="mb-5 font-bold text-gray-900 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {cards.map((item)=>{
        return <Card {...item} />
      })}
         

      </div>
  </div>
</section>
<div class="flex flex-col items-center w-50% bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-16 w-30% p-4">
    <div class="flex flex-col  leading-normal w-50%">
    <h2 className='text-white text-xl mt-12 ml-12'>WHY KOUNT</h2>
        <h5 class=" text-5xl p-4 ml-8 font-bold tracking-tight text-gray-900 dark:text-white mt-4"> Introducing trust and safety technology</h5>
        <p class=" font-normal text-gray-700 dark:text-gray-400 text-2xl p-12">We believe the solution to evolving threats, labor-intensive processes, and costly risks is trust and safety technology.

We use data-driven decisions, advanced machine learning, and decades of experience to overcome the challenges that commonly plague today's growing businesses. The result is greater confidence in every interaction.</p>
        <button className='bg-blue-600 text-white w-36 ml-12 rounded-full p-3 mb-4'>Request a demo</button>
    </div>
    <img class=" w-6/12 rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src={img} alt=""/>
</div>
 <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className='text-blue-600 font-bold mb-2 mt-24'>OUR SECRET SAUCE</h2>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 "> What makes Kount different</h2>
          <p class="mb-5 font-bold text-gray-900 sm:text-xl "> There are three things that define Kount. And we believe Kount is the only company that has this unique combination of strengths.</p>
      </div>
      <div className='flex'>
      <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg   l:p-8 ml-8">
              <h3 class="mb-4 text-2xl font-bold">Complete Strategy</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400">You need protection against any threat that could come your way. And we have everything you could possibly need — all in one easy-to-use platform.</p>
          
           
              <ul role="list" class="mb-8 space-y-4 text-left mt-12">
                  <li class="flex items-center space-x-3">
             
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Pick the solutions that are relevant to your business</span>
                  </li>
                  <li class="flex items-center space-x-3">
      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Adjust processes as your business grows and needs change</span>
                  </li>
                  <li class="flex items-center space-x-3">
               
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><span class="font-semibold">Simplify budgeting with just one expense</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
            
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Monitor outcomes with greater accuracy and transparency</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
          
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Reduce operational costs and boost your bottom line</span></span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          <img src={img2} className='mr-24 w-4/12'></img>
</div>
      <div className='flex mt-24 ml-12 mb-8'>
      <img src={img2} className='mr-4 w-4/12 ml-12'></img>
      <div class="flex flex-col p-6  text-center text-gray-900 bg-white rounded-lg   l:p-8 ml-16">
              <h3 class="mb-4 text-2xl font-bold ml-48">Complete Strategy</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400 pl-64">You need protection against any threat that could come your way. And we have everything you could possibly need — all in one easy-to-use platform.</p>
          
           
              <ul role="list" class="mb-8 space-y-4  mt-12 ml-64">
                  <li class="flex items-center space-x-3">
             
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Pick the solutions that are relevant to your business</span>
                  </li>
                  <li class="flex items-center space-x-3">
      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Adjust processes as your business grows and needs change</span>
                  </li>
                  <li class="flex items-center space-x-3">
               
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><span class="font-semibold">Simplify budgeting with just one expense</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
            
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Monitor outcomes with greater accuracy and transparency</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
          
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Reduce operational costs and boost your bottom line</span></span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
</div>
      <div className='flex mt-24'>
      <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg   l:p-8 ml-8">
              <h3 class="mb-4 text-2xl font-bold">Complete Strategy</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400">You need protection against any threat that could come your way. And we have everything you could possibly need — all in one easy-to-use platform.</p>
          
           
              <ul role="list" class="mb-8 space-y-4 text-left mt-12">
                  <li class="flex items-center space-x-3">
             
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Pick the solutions that are relevant to your business</span>
                  </li>
                  <li class="flex items-center space-x-3">
      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Adjust processes as your business grows and needs change</span>
                  </li>
                  <li class="flex items-center space-x-3">
               
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><span class="font-semibold">Simplify budgeting with just one expense</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
            
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Monitor outcomes with greater accuracy and transparency</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
          
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Reduce operational costs and boost your bottom line</span></span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          <img src={img2} className='mr-24 w-4/12'></img>
</div>
<section class="bg-black mt-12">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className='text-green-600 font-bold mb-2'>THE PROBLEM</h2>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white ">Designed for business teams like yours</h2>
          <p class="mb-5 font-bold text-white sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {cards.map((item)=>{
        return <Card {...item} />
      })}
         

      </div>
  </div>
</section>
 <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 mt-36">
      <h2 className='text-blue-600 font-bold mb-2'>WHAT'S INCLUDED</h2>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black ">Designed for business teams like yours</h2>
          <p class="mb-5 font-bold text-black sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-6 sm:gap-6 xl:gap-10 lg:space-y-0 mb-12 ">
      {cards2.map((item)=>{
        return <SmallCards {...item} />
      })}
      </div>



      <div className='flex mt-24 pl-12 mb-8 bg-slate-100'>
      <div class="flex flex-col  leading-normal w-9/12">
    <h2 className='text-xl mt-12 ml-8 text-blue-600'>pricing</h2>
        <h5 class=" text-5xl ml-4 font-bold tracking-tight text-gray-900 p-2">How much kount costs</h5>
        <p class=" font-normal text-gray-700 dark:text-gray-400 text-2xl p-4">How much does trust and safety cost? Kount offers a la carte pricing so you only pay for the services you need —  and nothing you don't. That means your cost depends on the solutions you use.</p>
        <button className='bg-blue-600 text-white w-36 ml-6 rounded-full p-2 mb-4 mt-8'>visit pricing page</button>
    </div>
      <div class="flex flex-col p-6  text-center text-gray-900 rounded-lg   l:p-8 ml-16">
              <h3 class="mb-4 text-2xl font-bold ml-48">Complete Strategy</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400 pl-64">You need protection against any threat that could come your way. And we have everything you could possibly need — all in one easy-to-use platform.</p>
          
           
              <ul role="list" class="mb-8 space-y-4  mt-12 ml-64">
                  <li class="flex items-center space-x-3">
             
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Pick the solutions that are relevant to your business</span>
                  </li>
                  <li class="flex items-center space-x-3">
      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Adjust processes as your business grows and needs change</span>
                  </li>
                  <li class="flex items-center space-x-3">
               
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span><span class="font-semibold">Simplify budgeting with just one expense</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
            
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Monitor outcomes with greater accuracy and transparency</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
          
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span class="font-semibold">Reduce operational costs and boost your bottom line</span></span>
                  </li>
              </ul>
            </div>
</div>



<div className='mb-5'>
<h5 class="font-semibold text-blue-600 ml-32 text-xl mb-8">TESTIMONIALS</h5>
<h5 class="font-bold text-gray-900 ml-32 text-5xl">What our clients are saying</h5>
<div class="md:gap-8 md:grid md:grid-cols-3 mt-16">
    <div>
        <div class="flex items-center mb-6">
            <img class="w-48 h-48 rounded-full ml-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEh0JwuEX7Kjnwr-OpDb6YaLExJFYs1VVL8-sQ1pwmN1PZxxurBxzBPS6BFxyzNXiROk&usqp=CAU" alt=""/>
        </div>
    </div>
    <div class="col-span-2 mt-6 md:mt-0">
        <p class="mb-2 text-gray-900 dark:text-gray-900 mr-48 p-4 text-xl">"When we began to see that our internal fraud detection rules were not sophisticated enough to keep pace with sophisticated criminal and fraudulent activity, we turned to Kount. With Kount's pre-built integrations, we were able to quickly get up and running — Kount's implementation team helped us configure, test, and validate our environment in a matter of days. With Kount reporting and data interfaces, we are able to easily monitor the effectiveness of the technology. Immediately, we saw the fraud stop. To say that Kount has saved us from considerable loss due to fraud would be an understatement."</p>
        <div class="flex">
            <div class="flex flex-col">
            <h5 class="ml-32 font-bold mb-4 text-3xl">Matt Hulett</h5>
            <div class="flex items-center ml-32">
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            </div>
            <div>
                <img src={img3} class="ml-8"/>
            </div>
        </div>
    </div>

</div>
</div>
    </>
  )
}

export default Home