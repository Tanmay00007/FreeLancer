
import React from 'react'

const SmallCards = (props) => {
  return (
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="/mountain.jpg" alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-gray-900">{props.title}</div>

      </div>

    </div>

    </div>
    
  )
}

export default SmallCards