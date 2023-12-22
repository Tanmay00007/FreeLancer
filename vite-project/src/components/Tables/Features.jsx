
import React from 'react'
import Card from '../Card'

const Features = () => {
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
    <div>
         <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {cards.map((item)=>{
        return <Card {...item} />
      })}
         

      </div>
    </div>
  )
}

export default Features