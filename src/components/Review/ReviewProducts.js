import StarsRating from 'react-star-rate';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDocument from '../../hooks/useFetchDocument';
import { useSelector } from 'react-redux';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { toast } from 'react-toastify';

import loadingImage from '../../assets/loading-animation-blue.json';

const ReviewProducts = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { document } = useFetchDocument('products', id);
    const { userId, userName } = useSelector((state) => state.auth);

    useEffect(() => {
        setProduct(document);
    }, [document]);
    const submitReview = (e) => {
        e.preventDefault();

        const today = new Date();
        const date = today.toDateString();
        const reviewConfig = {
            userId,
            userName,
            productID: id,
            rating,
            review,
            reviewDate: date,
            createdAt: Timestamp.now().toDate(),
        };
        try {
            addDoc(collection(db, 'reviews'), reviewConfig);
            toast.success('Review submitted successfully');
            setRating(0);
            setReview('');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="w-1/2 mx-auto">
            <div>
                <h2>Review Products</h2>
                {product === null ? (
                    <Lottie animationData={loadingImage} className="h-[100px]" loop={false} />
                ) : (
                    <div className="flex justify-start flex-col gap-5 py-10">
                        <p>
                            <b>Product name:</b> {product.name}
                        </p>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                    </div>
                )}

                <div>
                    <form onSubmit={(e) => submitReview(e)}>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="flex justify-between flex-col px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <div>
                                    <label>Rating:</label>
                                    <StarsRating
                                        value={rating}
                                        onChange={(rate) => {
                                            setRating(rate);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label for="comment" class="sr-only">
                                        Review
                                    </label>
                                    <textarea
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        id="comment"
                                        cols="30"
                                        classname="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                        placeholder="Write a comment..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    class="inline-flex w-fit items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ReviewProducts;
