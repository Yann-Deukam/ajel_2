import React from 'react'

const Form = () => {
  return (
    <div className="max-w-xl mt-5 flex w-full flex-col bg-white p-8">
    {/* <h2 className="title-font mb-3 text-lg font-bold text-gray-900">Create new blog</h2> */}
    {/* <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
        with us!
    </p> */}
    <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600">Blog Title</label>
        <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
     <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600">Content</label>
        <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
    
    <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600">blog content</label>
        <textarea id="message" name="message" className="h-60 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
    </div>
    <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none">Send</button>
    {/* <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p> */}
</div>
  )
}

export default Form