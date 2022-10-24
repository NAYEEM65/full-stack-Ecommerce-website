import React, { useState } from 'react';
import Card from '../../Card/Card';
import { storage } from '../../../firebase/config';
import { ref, uploadBytesResumable } from 'firebase/storage';

const categories = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Fashion' },
    { id: 4, name: 'Phone' },
];

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        imageUrl: '',
        price: '',
        category: '',
        brand: '',
        desc: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const storageRef = ref(storage, `products/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    };
    const productSubmit = (e) => {
        e.preventDefault();
        console.log(product);
    };
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={productSubmit}>
                <Card cardClass={'w-full max-w-[500px] p-4'}>
                    <div className="flex flex-col gap-2 mb-2 items-start justify-start">
                        <label> Product Name:</label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            required
                            name="name"
                            value={product.name}
                            className="rounded w-full bg-gray-200"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-2 border-[1px] border-gray-300 rounded p-2 items-start justify-start w-full">
                        <label> Product Image:</label>
                        <div className={'p-4 w-full'}>
                            <div className="text-white animate-pulse w-full bg-gray-300 rounded-full">
                                <div
                                    className="bg-blue-500 rounded-full text-white px-4 mb-3"
                                    style={{ width: '50%' }}
                                >
                                    Uploading 50%
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    placeholder="Product Image"
                                    required
                                    name="image"
                                    className="rounded w-full bg-gray-200"
                                    onChange={(e) => handleImageChange(e)}
                                />
                                <input
                                    type="text"
                                    placeholder="image url"
                                    value={product.imageUrl}
                                    name="imageUrl"
                                    disabled
                                    className="rounded w-full bg-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-2 items-start justify-start">
                        <label> Product Price:</label>
                        <input
                            type="number"
                            placeholder="Product Price"
                            required
                            name="price"
                            value={product.price}
                            className="rounded w-full bg-gray-200"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-2 items-start justify-start">
                        <label> Product Category:</label>
                        <select
                            name="category"
                            value={product.category}
                            required
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="" disabled>
                                -- choose product category --
                            </option>
                            {categories.map((cat) => {
                                return (
                                    <option key={cat.id} value={cat.name}>
                                        {cat.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 mb-2 items-start justify-start">
                        <label>Product Company/Brand:</label>
                        <input
                            type="text"
                            placeholder="Product Brand"
                            required
                            name="brand"
                            value={product.brand}
                            className="rounded w-full bg-gray-200"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-2 items-start justify-start">
                        <label>Product Description: </label>
                        <textarea
                            cols="30"
                            rows="10"
                            required
                            name="desc"
                            value={product.desc}
                            className="rounded w-full bg-gray-200"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded hover:bg-7lue-600"
                    >
                        Save Product
                    </button>
                </Card>
            </form>
        </div>
    );
};

export default AddProduct;
