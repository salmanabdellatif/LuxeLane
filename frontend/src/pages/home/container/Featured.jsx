import React from 'react'
import images from '../../../constants/images'

const Featured = () => {
  const newArrival = [
    {
      img: images.Playstation,
      name: 'PlayStation 5',
      desc: 'Black and White version of the PS5 coming out on sale.',
    },
    {
      img: images.WomensCollections,
      name: 'Women’s Collections',
      desc: 'Featured woman collections that give you another vibe.',
    },
    {
      img: images.Speakers,
      name: 'Speakers',
      desc: 'Amazon wireless speakers',
    },
    {
      img: images.Perfume,
      name: 'Perfume',
      desc: 'GUCCI INTENSE OUD EDP',
    },
  ]
  const Card = ({ item }) => {
    return (
      <div className='relative bg-black bg-opacity-95 overflow-hidden group'>
        <div className='w-full'>
          <img
            src={item.img}
            alt={item.name}
            className='object-cover w-2/3 mx-auto max-w-fit mt-6 group-hover:scale-105 transition duration-300 transform'
          />
        </div>
        <div className='absolute text-white bottom-5 left-5'>
          <h2 className='font-semibold'>{item.name}</h2>
          <p className='w-2/3 py-2 text-xs'>{item.desc}</p>
          <a className='underline text-xs' href='/'>
            Shop Now
          </a>
        </div>
      </div>
    )
  }
  return (
    <div className='container mx-auto px-3 md:px-8 py-16'>
      <div className='flex items-center justify-start gap-3 py-4 my-6'>
        <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
        <div className='font-semibold text-mainRed'>Featured</div>
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-lg md:text-3xl whitespace-nowrap'>
          New Arrival
        </h2>
        <button className='text-white bg-mainRed rounded-md whitespace-nowrap md:px-4 md:py-2 px-3 py-2 text-xs md:text-sm'>
          View All
        </button>
      </div>
      <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8'>
        {newArrival.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Featured
