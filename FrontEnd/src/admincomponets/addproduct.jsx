import React, { useState } from 'react';
const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    status: 'available',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Here you can handle the form submission, e.g., send the data to a server
  };

  return (
    <div className="absolute top-130 left-1/2 transform -translate-x-1/2 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-white ">Product Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4 " >
            <div>
              <label htmlFor="name" className="block text-gray-700 text-2xl">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className=" mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-700 text-2xl">Product Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="new-name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-2xl">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              autoComplete="off"
            ></textarea>
          </div>

          <div className="mb-4 ">
            <label htmlFor="status" className="block text-gray-700 text-2xl">Product Status</label>
            <select
              id="status"
              name="status"
              value={product.status}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              autoComplete="off"
              required
            >
             <option value="">Status of product</option>
              <option value="active" className="text-green-700 bg-green-100">Active</option>
              <option value="inactive" className="text-red-700 bg-red-100">Inactive</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-2xl">Product Image</label>
            <input
              type="file"
              id="image"
              autoComplete="off"
              name="image"
              onChange={handleImageChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProductForm;
