
import React from 'react'
import img2 from '../assets/img2.png'
import ResCards from '../components/ResCards'
import cards from '../assets/cards.jpg'
import Card from '../components/Card'
const Resources = () => {
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
  return (
    <>
    <div class="flex flex-col items-center w-50% bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-16 w-30% p-4">
    <div class="flex flex-col  leading-normal w-50%">
    <h2 className='text-white text-xl mt-12 ml-12'>Resources</h2>
        <h5 class=" text-5xl p-4 ml-8 font-bold tracking-tight text-gray-900 dark:text-white mt-4">Noteworthy technology acquisitions 2021</h5>
        <p class=" font-normal text-gray-700 dark:text-gray-400 text-2xl p-12">Are you looking for an industry leader to protect your growing business with the most efficient yet accurate strategy? You’ve found it. Learn more about why Kount is right for you. </p>
        <button className='bg-blue-600 text-white w-36 ml-12 rounded-full p-3 mb-4'>Request a demo</button>
    </div>
    <img class=" w-6/12 rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=""/>
</div>
  <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className='text-blue-600 font-bold mb-2 mt-24'>THE PROBLEM</h2>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed for business teams like yours</h2>
          <p class="mb-5 font-bold text-gray-900 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className='flex'>
      <div class="flex flex-col p-6  text-gray-900 bg-white rounded-lg   l:p-8 ml-8">
      <img src={img2} className='w-24 h-24 ml-20'></img>
              <h3 class="mb-4 text-2xl font-bold mt-12 ml-24">Blog</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400 pr-32">Read helpful tips, industry insights, and educational articles that can help you create the most effective risk management strategy. </p>
          
           

              <a href="#" class="text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xl px-5 py-2.5 ml-12 mt-8  dark:focus:ring-primary-900">Get started</a>
          </div>
          <img src={img2} className='mr-24 w-4/12 mb-8'></img>
</div>
  <div className='flex mt-16'>
  <img src={img2} className='ml-24 w-4/12 mb-8 '></img>
      <div class="flex flex-col p-6  text-gray-900 bg-white rounded-lg   l:p-8 ml-48">
      <img src={img2} className='w-24 h-24 ml-20'></img>
              <h3 class="mb-4 text-2xl font-bold mt-12 ml-24">Blog</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400 pr-32">Read helpful tips, industry insights, and educational articles that can help you create the most effective risk management strategy. </p>
          
           

              <a href="#" class="text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xl px-5 py-2.5 ml-12 mt-8  dark:focus:ring-primary-900">Get started</a>
          </div>
</div>
      <div className='flex mt-24'>
      <div class="flex flex-col p-6  text-gray-900 bg-white rounded-lg   l:p-8 ml-8">
      <img src={img2} className='w-24 h-24 ml-20'></img>
              <h3 class="mb-4 text-2xl font-bold mt-12 ml-24">Blog</h3>
              <p class="font-semibold text-gray-500 sm:text-lg dark:text-gray-400 pr-32">Read helpful tips, industry insights, and educational articles that can help you create the most effective risk management strategy. </p>
          
           

              <a href="#" class="text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xl px-5 py-2.5 ml-12 mt-8  dark:focus:ring-primary-900">Get started</a>
          </div>
          <img src={img2} className='mr-24 w-4/12 mb-8'></img>
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
         

{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-900 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}

      </div>
  </div>
</section>

    </>
  )
}

export default Resources