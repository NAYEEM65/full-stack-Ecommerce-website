import React, { useState } from 'react';
import Card from '../../Card/Card';
import { db, storage } from '../../../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const categories = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Fashion' },
    { id: 4, name: 'Phone' },
];

const AddProduct = () => {
    const initialState = {
        name: '',
        imageUrl: '',
        price: '',
        stock: '',
        category: '',
        brand: '',
        desc: '',
    };
    const [product, setProduct] = useState({ ...initialState });
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
                // switch (snapshot.state) {
                //     case 'paused':
                //         console.log('Upload is paused');
                //         break;
                //     case 'running':
                //         console.log('Upload is running');
                //         break;
                // }
            },
            (error) => {
                // Handle unsuccessful uploads
                toast.error(error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setProduct({ ...product, imageUrl: downloadURL });
                    toast.success('Image successfully Uploaded');
                });
            },
        );
    };
    const productSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const docRef = addDoc(collection(db, 'products'), {
                name: product.name,
                imageUrl: product.imageUrl,
                price: Number(product.price),
                stock: Number(product.stock),
                category: product.category,
                brand: product.brand,
                desc: product.desc,
                createdAt: Timestamp.now().toDate(),
            });
            setIsLoading(false);
            toast.success('Product Added successfully');
            setUploadProgress(0);
            setProduct({ ...initialState });
            navigate('/admin/all-products');
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
        }
    };
    return (
        <>
            {isLoading && <Loader />}
            <div>
                <h1 className="text-4xl w-fit font-bold text-slate-800 border-b-2 border-gray-400 ">
                    Add Product
                </h1>
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
                                {uploadProgress === 0 ? null : (
                                    <div className="text-white animate-pulse w-full bg-gray-300 rounded-full">
                                        <div
                                            className={`bg-blue-500 rounded-full text-white px-4 mb-3 w-[${uploadProgress}%]`}
                                        >
                                            {uploadProgress < 100
                                                ? `Uploading ${uploadProgress}%`
                                                : `Upload progress ${uploadProgress}%`}
                                        </div>
                                    </div>
                                )}

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
                                    {product.imageUrl && (
                                        <span className="relative">
                                            <input
                                                type="text"
                                                placeholder="image url"
                                                value={product.imageUrl}
                                                name="imageUrl"
                                                disabled
                                                className="rounded w-full bg-gray-200"
                                            />
                                        </span>
                                    )}
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
                            <label> Stock:</label>
                            <input
                                type="number"
                                placeholder="Product stock"
                                required
                                name="stock"
                                value={product.stock}
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
        </>
    );
};

export default AddProduct;
