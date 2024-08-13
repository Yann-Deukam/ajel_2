import React from 'react'

const Filiale = () => {
  return (
<section id="filiale" className="py-8 bg-white sm:py-10 lg:py-16">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
       Nos différentes Filiale </h2>
      <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
    </div>
    <div
      className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
      <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
          <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Filiale 1</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia adipisci ab eos molestiae. Id, consequuntur dolorum.</p>
      </div>
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
          <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Filiale 2</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum, ratione commodi recusandae incidunt ipsa delectus atque molestiae.</p>
      </div>
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
          <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Filiale 3</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta, praesentium voluptas corporis eaque harum explicabo? Magnam, vero!</p>
      </div>
      <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
          <i className="fa-solid fa-cloud text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Filiale 4</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, repudiandae nulla. Non laboriosam alias at, nam commodi laborum?</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
          <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Filiale 5</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi minima, architecto harum quidem inventore est illum quibusdam necessitatibus?</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
          <i className="fa-solid fa-bolt text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Filiale 6</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, recusandae sequi adipisci eaque dolores iste dolorem odio sed.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Filiale