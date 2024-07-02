import React, { useState } from 'react';
import '../styles/tailwind.css'

const AddNotice=()=> {
  // State variables to store form input values
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [attachment, setAttachment] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { title, content, date, priority, attachment, expirationDate });
    // Reset form fields after submission
    setTitle('');
    setContent('');
    setDate('');
    setPriority('');
    setAttachment('');
    setExpirationDate('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" style={{ marginTop: '127px', minHeight: '80vh' }}> {/* Adjust form height */}
      <h2 className="text-3xl mb-4 text-indigo-700">Create Notice</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4"> {/* Two column layout */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="title" className="block text-blue-700 text-2xl" >Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full h-12 rounded-md border-black border-solid border focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-red-800" required
            placeholder='enter Tittle of notice'

          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="date" className="block text-pink-700 text-2xl">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full h-12 rounded-md border-black border-solid border focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="priority" className="block text-gray-700 text-2xl">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 block w-full h-12 rounded-md border-black border-solid border focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required
          >
            <option value="" className='text-2xl text-green-500'>Select Priority</option>
            <option value="low" className="text-green-700 bg-green-100">Low</option>
            <option value="medium" className="text-yellow-700 bg-yellow-100">Medium</option>
            <option value="high" className="text-red-700 bg-red-100">High</option>
          </select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="expirationDate" className="block text-gray-700 text-2xl">Expiration Date</label>
          <input
            type="date"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="mt-1 block w-full h-12 rounded-md border-black border-solid border focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="content" className="block text-gray-700 text-2xl">Content</label>
          <textarea
            id="content"
            placeholder='write the content of notice here'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full h-32 rounded-md border-black border-solid border focus:outline-none placeholder-red-800 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="attachment" className="block text-gray-700 text-2xl">Attachment</label>
          <input
            type="file"
            id="attachment"
            value={attachment}
            onChange={(e) => setAttachment(e.target.value)}
            className="mt-1 block w-full h-12 rounded-md border-black border-solid border focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="col-span-2">
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 w-1/4 text-2xl">Create </button>
        </div>
      </form>
    </div>
  );
}
export default AddNotice;
