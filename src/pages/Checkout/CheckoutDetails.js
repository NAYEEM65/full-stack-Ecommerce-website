import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { useDispatch } from 'react-redux';
import PageHeading from '../../components/common/PageHeading';
import { saveBillingAddress, saveShippingAddress } from '../../redux/checkoutSlice/checkoutSlice';
import CheckoutSummary from './CheckoutSummary';
const initialAddressState = {
    name: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    phone: '',
};

const CheckoutDetails = () => {
    const dispatch = useDispatch();
    const [shippingAddress, setShippingAddress] = useState({
        ...initialAddressState,
    });
    const [billingAddress, setBillingAddress] = useState({
        ...initialAddressState,
    });
    const handleShipping = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newShipping = { ...shippingAddress };
        newShipping[field] = value;
        setShippingAddress(newShipping);
    };

    const handleBilling = (e) => {
        const { name, value } = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress(shippingAddress));
        dispatch(saveBillingAddress(billingAddress));
    };
    return (
        <section className="">
            <div>
                <PageHeading>Checkout Details</PageHeading>

                <form onSubmit={handleSubmit}>
                    <div className="flex md:flex-row flex-col justify-around gap-10 px-20">
                        <div className="w-full my-10 py-5">
                            <div>
                                <h3 className="mb-5">Shipping Address</h3>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_name"
                                        id="floating_name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.name}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Recipient Name
                                    </label>
                                </div>

                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_1"
                                        id="floating_address_1"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.line1}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_address_1"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 1
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_2"
                                        id="floating_address_2"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.line2}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_address_2"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 2
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_city"
                                        id="floating_city"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.city}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_city"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        City
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_state"
                                        id="floating_state"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.state}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_state"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        State
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_postal"
                                        id="floating_postal"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.postal_code}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_postal"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Postal code
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_phone"
                                        id="floating_phone"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.phone}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        htmlFor="floating_phone"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Phone
                                    </label>
                                </div>

                                {/* COUNTRY INPUT */}
                                <CountryDropdown
                                    className="w-full"
                                    valueType="short"
                                    value={shippingAddress.country}
                                    onChange={(val) =>
                                        handleShipping({
                                            target: {
                                                name: 'country',
                                                value: val,
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <h3 className="mb-5">Billing Address</h3>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_name"
                                        id="floating_name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.name}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Recipient Name
                                    </label>
                                </div>

                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_1"
                                        id="floating_address_1"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.line1}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_address_1"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 1
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_2"
                                        id="floating_address_2"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.line2}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_address_2"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 2
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_city"
                                        id="floating_city"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.city}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_city"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        City
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_state"
                                        id="floating_state"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.state}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_state"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        State
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_postal"
                                        id="floating_postal"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.postal_code}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_postal"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Postal code
                                    </label>
                                </div>
                                <div className="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_phone"
                                        id="floating_phone"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.phone}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        htmlFor="floating_phone"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Phone
                                    </label>
                                </div>

                                {/* COUNTRY INPUT */}
                                <CountryDropdown
                                    className="w-full"
                                    valueType="short"
                                    value={billingAddress.country}
                                    onChange={(val) =>
                                        handleBilling({
                                            target: {
                                                name: 'country',
                                                value: val,
                                            },
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <CheckoutSummary />
                            <div className="py-5">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-500 px-3 py-2 rounded hover:bg-blue-600"
                                >
                                    Procced Checkout
                                </button>
                            </div>
                        </div>
                    </div>{' '}
                </form>
            </div>
        </section>
    );
};

export default CheckoutDetails;
