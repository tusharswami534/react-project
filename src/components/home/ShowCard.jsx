import React, { useState } from 'react'

const ShowCard = () => {
  const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore((ShowMore) => !ShowMore);
  return (
    <div className='flex flex-col py-12 '>
        {/* {Array.from(3).map((_, i) => (
                <div key={i} className='w-20 h-20 bg-black mx-3 my-5'></div>
            ))} */}
                <h1 className='text-5xl text-black font-bold text-center'>Shwo More , Less card </h1>
          <div className='flex flex-wrap flex-col items-center justify-center'>
            <div className='flex flex-wrap items-center justify-center'>
            {[...Array(showMore ? 6 : 3)].map((_, i) => (
              <div key={i} className='size-96 bg-black mx-3 my-3'></div>
            ))}
            </div>
            <button className='bg-black text-white py-2 max-h-[42px] max-w-[154px] px-4 rounded hover:text-black border-black border border-solid hover:bg-white  transition duration-300' onClick={toggleShowMore}>{(showMore ? "Less More" : "Show More")}</button>
            </div>
    </div>
  )
}

export default ShowCard