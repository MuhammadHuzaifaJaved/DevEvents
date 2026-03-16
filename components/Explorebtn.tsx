'use client';

const Explorebtn = () => {
  return (
    
      <button type='button' id='explore-btn' onClick={() => {
        console.log("Clicked")
      }} className='mt-7 mx-auto'>
        <a href='#events' >
         Explore Events
         <img src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
        </a>
       
      </button>
    
  )
}

export default Explorebtn
 