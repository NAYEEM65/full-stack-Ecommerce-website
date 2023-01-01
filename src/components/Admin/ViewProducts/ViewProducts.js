import { deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { db, storage } from '../../../firebase/config';
import Loader from '../../Loader/Loader';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deleteObject, ref } from 'firebase/storage';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/productSlice/productSlice';
import useFetchCollection from '../../../hooks/useFetchCollection';
import PageHeading from '../../common/PageHeading';
import { useState } from 'react';
import Search from '../../Search/Search';
import { filterBySearch, filterBySort } from '../../../redux/filterSlice/filterSlice';
import Pagination from '../../Pagination/Pagination ';

const ViewProducts = () => {
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { data, isLoading } = useFetchCollection('products');
    const [search, setSearch] = useState('');
    const { filteredProducts } = useSelector((state) => state.filter);
    //pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [proudctPerPage, setProudctPerPage] = useState(3);

    //Get the current products list
    const indexOfLastProduct = currentPage * proudctPerPage;
    const indexOfFirstProduct = indexOfLastProduct - proudctPerPage;
    const currentProduct = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalProductCount = filteredProducts.length;
    const confirmDelete = (id, imageUrl) => {
        Notiflix.Confirm.show(
            'Delete Product!!',
            'Confirm to delete product',
            'Delete',
            'Cancel',
            function okCb() {
                deleteProduct(id, imageUrl);
            },
            function cancelCb() {
                toast.warning('Cancel deleted');
            },
            {
                width: '320px',
                borderRadius: '8px',
                titleColor: '#fb923c',
                okButtonBackground: '#fb923c',
                cssAnimationStyle: 'zoom',
            },
        );
    };
    const deleteProduct = async (id, imageUrl) => {
        try {
            await deleteDoc(doc(db, 'products', id));
            const storageRef = ref(storage, imageUrl);
            await deleteObject(storageRef).then(() => {
                toast.success('Product deleted successfully');
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
    useEffect(() => {
        dispatch(fetchProducts({ products: data }));
        dispatch(filterBySort(products));
        dispatch(
            filterBySearch({
                products,
                search,
            }),
        );
    }, [data, dispatch, products, search]);

    return (
        <>
            {isLoading && <Loader />}
            <div>
                <PageHeading>All Products</PageHeading>
                {products.length === 0 ? (
                    <h2>No Product found</h2>
                ) : (
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <div>
                            <h2 className="text-base">
                                {filteredProducts.length !== 0 && filteredProducts.length}{' '}
                                {filteredProducts.length === 1
                                    ? 'Product'
                                    : filteredProducts.length === 0
                                    ? 'No Product'
                                    : 'Products'}{' '}
                                Found
                            </h2>
                        </div>
                        <div>
                            <Search value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs border-b border-t  border-gray-400 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Serial
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Image
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Category
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Stock
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProduct.map((product, index) => (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 rounded even:bg-slate-200 transition duration-100 ease-in-out hover:bg-slate-300 "
                                        key={product.id}
                                    >
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">
                                            <img
                                                src={product.imageUrl}
                                                alt={product.id}
                                                className="h-[60px]"
                                            />
                                        </td>
                                        <td className="py-4 px-6">
                                            {product.name.slice(0, 30)}...
                                        </td>
                                        <td className="py-4 px-6">{product.category}</td>
                                        <td className="py-4 px-6">${product.price}</td>
                                        <td className="py-4 px-6">
                                            <span
                                                className={`px-3 py-1 rounded ${
                                                    product.stock > 0
                                                        ? 'bg-green-300'
                                                        : 'bg-orange-300'
                                                }`}
                                            >
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="flex justify-around items-center">
                                                <Link to={`/admin/add-product/${product.id}`}>
                                                    <AiOutlineEdit className="text-green-500 text-xl cursor-pointer" />
                                                </Link>
                                                <AiOutlineDelete
                                                    className="text-orange-500 text-xl cursor-pointer"
                                                    onClick={() =>
                                                        confirmDelete(product.id, product.imageUrl)
                                                    }
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    proudctPerPage={proudctPerPage}
                    setProudctPerPage={setProudctPerPage}
                    totalProductCount={totalProductCount}
                />
            </div>
        </>
    );
};

export default ViewProducts;
