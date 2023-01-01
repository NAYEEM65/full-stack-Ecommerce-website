import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import Notiflix from 'notiflix';
import React from 'react';
import { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, db, storage } from '../../../firebase/config';
import useFetchCollection from '../../../hooks/useFetchCollection';
import { fetchProducts } from '../../../redux/productSlice/productSlice';
import PageHeading from '../../common/PageHeading';
import Loader from '../../Loader/Loader';

const AllUsers = () => {
    const user = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const { data, isLoading } = useFetchCollection('products');
    // const listAllUsers = (nextPageToken) => {
    //     // List batch of users, 1000 at a time.
    //     auth()
    //         .listUsers(1000, nextPageToken)
    //         .then((listUsersResult) => {
    //             listUsersResult.users.forEach((userRecord) => {
    //                 console.log('user', userRecord.toJSON());
    //             });
    //             if (listUsersResult.pageToken) {
    //                 // List next batch of users.
    //                 listAllUsers(listUsersResult.pageToken);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('Error listing users:', error);
    //         });
    // };
    // // Start listing users from the beginning, 1000 at a time.
    // listAllUsers();
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
    }, [data, dispatch]);

    return (
        <>
            {isLoading && <Loader />}
            <div>
                <PageHeading>All Users</PageHeading>
                {/* {products.length === 0 ? (
                    <h2>No Product found</h2>
                ) : (
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                                {products.map((product, index) => (
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
                )} */}
            </div>
        </>
    );
};

export default AllUsers;
