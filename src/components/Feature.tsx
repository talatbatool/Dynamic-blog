import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-4'>
        <h2 className='text-center text 3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover: text-black text-red-600'>
            Talat batool : my blog!
        </h2>
        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up  delay-100'>join Talat batool as she delves into the dynamic world of web development . my blog is packed with the project i made like a portfolio. a todolist, a furniture web site and there is one blog is about travling.

        </p>
        <div className='mx-auto max-w-7xl px-5'>
            <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring our categories</h1>
            <div className='grid grid-cols-2 gap-6 sm :grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'></div>
            {[
              "Technology",
              "Artifical- Inteligent",
              "HTML",
              "Next.js",
              "web Development",
              "travel"

            ].map((category,index)=>(
              <div key={index}
              className='relative group p-6 bg-white rounded-lg shadow-lg  hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
               <p className='text -center text-lg font-semibold '>{category}</p>
               <div className=' absolute inset-o border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out '></div>
                </div>
            ))
            }
        </div>
      </section>
      <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>dive into our diverse range of category,where you will discover next.js based projects</p>
    </div>
  );
}

export default Feature
