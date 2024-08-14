import React from 'react'
import Form from './Form'
import Blog from './Blog'

const Sidebar = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">

    <aside className="md:w-1/3 lg:w-1/4 py-4 md:block">
        <div className="sticky top-12 flex flex-col gap-2 p-2 rounded-xl">

            <a href="" className="px-3 py-3 font-semibold hover:bg-indigo-50 rounded-md">
                New blog
            </a>

            <a href="" className="px-3 py-3 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
                My Blogs
            </a>

            <a href="" className="px-3 py-3 font-semibold opacity-90 hover:bg-indigo-50 rounded-md">
                Settings
            </a>
{/* 
            <button type="submit"
                className="text-red-500 text-sm font-semibold hover:text-purple-600 mb-1 border bg-white px-3 py-2 hover:bg-violet-200 rounded-md">
                Log Out
            </button> */}
        </div>
    </aside>



    <main className="w-full py-1 min-h-screen">
        <div className="p-2 md:p-4">
            <h1 className="font-bold text-xl md:text-2xl my-4">New blog</h1>
            <Form/>
        </div>
         <div className="p-2 md:p-4">
            <h1 className="font-bold text-xl md:text-2xl my-4">blogs</h1>
            <Blog/>
        </div>
    </main>
</div>
  )
}

export default Sidebar