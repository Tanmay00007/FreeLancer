
import React from 'react'

const Card = (props) => {
  return (
    <div>
        

<div class="max-w-sm bg-white  rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">{props.para}</p>
    
    </div>
</div>

    </div>
  )
}

export default Card