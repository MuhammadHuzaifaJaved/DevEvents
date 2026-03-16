import EventCard from '@/components/EventCard'
import Explorebtn from '@/components/Explorebtn'
import { title } from 'process'
import React from 'react'
const events = [
  {
    image: '/images/event1.png',
    title : 'Tech Conference 2024',
    slug : 'slug-1',
    date : 'Date-1',
    location : 'location-1',
    time : 'Time-1',
  },
  {
    image: '/images/event2.png',
    title : 'Tech Conference 2024',
    slug : 'slug-2',
    date : 'Date-2',
    location : 'location-2',
    time : 'Time-2',
  },
  {
    image: '/images/event3.png',
    title : 'Tech Conference 2024',
    slug : 'slug-3',
    date : 'Date-3',
    location : 'location-3',
    time : 'Time-3'
  },
  {
    image: '/images/event4.png',
    title : 'Tech Conference 2024',
    slug : 'slug-4',
    date : 'Date-4',
    location : 'location-4',
    time : 'Time-4'
  },
  {
    image: '/images/event5.png',
    title : 'Tech Conference 2024',
    slug : 'slug-5',
    date : 'Date-5',
    location : 'location-5',
    time : 'Time-5'
  }
]
const page = () => {
  return (
    <div>
     <section className='container mx-auto px-4 py-16 text-white relative z-10 items-center justify-center flex flex-col'>
      <h1 className='text-4xl font-bold text-center mt-8'>Welcome to DevEvent</h1>
      <p className='text-center mt-4 text-lg'>Discover and Share Tech Events with the Developer Community</p>
     <Explorebtn/>
     <div className='mt-20 space-y-7'>
      <h3>
        Featured Events
        <ul className='events' >
        {events.map((event) => (
          <li key={event.title}   >
           <EventCard {...event}/>
          </li>
        ))}
        </ul>
      </h3>
     </div>
     </section>

    
    </div>
)
}

export default page