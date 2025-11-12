import React from 'react'

const Home = () => {

  const list = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      name: "Dogs",
      desc: "Just cute dog",
    }
  ];

  return (
    <>
      <div className='mt-5 p-5'>
        <h2 className='text-3xl font-bold text-center'>My Personal</h2>
        <hr className='border border-1 mt-5 mx-20' />
        {list.map((list) => (
          <div className='flex-grow flex mt-10 justify-center'>
            <div className='rounded-2xl bg-amber-200 shadow-lg overflow-hidden flex justify-between'>
              <img src={list.img} alt="" className='w-full h-80 object-cover rounded-2xl' />
              <div className='p-5 w-100'>
                <h2 className='text-lg font-semibold text-amber-700'>{list.name}</h2>
                <p className='text-sm text-amber-500 line-clamp-2'>{list.desc}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Home