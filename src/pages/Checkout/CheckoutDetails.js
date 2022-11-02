import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import PageHeading from '../../components/common/PageHeading';
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
    const [shippingAddress, setShippingAddress] = useState({
        ...initialAddressState,
    });
    const [billingAddress, setBillingAddress] = useState({
        ...initialAddressState,
    });
    const handleShipping = (e) => {
        const { name, value } = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value,
        });
    };

    const handleBilling = (e) => {
        const { name, value } = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value,
        });
    };
    return (
        <section className="">
            <div>
                <PageHeading>Checkout Details</PageHeading>

                <form>
                    <div className="flex md:flex-row flex-col justify-around gap-10 px-20">
                        <div className="w-full my-10 py-5">
                            <div>
                                <h3 className="mb-5">Shipping Address</h3>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_name"
                                        id="floating_name"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.name}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_name"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Recipient Name
                                    </label>
                                </div>

                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_1"
                                        id="floating_address_1"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.line1}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_address_1"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 1
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_2"
                                        id="floating_address_2"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.line2}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_address_2"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 2
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_city"
                                        id="floating_city"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.city}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_city"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        City
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_state"
                                        id="floating_state"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.state}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_state"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        State
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_postal"
                                        id="floating_postal"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.postal_code}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_postal"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Postal code
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_phone"
                                        id="floating_phone"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={shippingAddress.phone}
                                        onChange={(e) => handleShipping(e)}
                                    />
                                    <label
                                        for="floating_phone"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_name"
                                        id="floating_name"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.name}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_name"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Recipient Name
                                    </label>
                                </div>

                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_1"
                                        id="floating_address_1"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.line1}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_address_1"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 1
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_address_2"
                                        id="floating_address_2"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.line2}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_address_2"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Address line 2
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_city"
                                        id="floating_city"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.city}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_city"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        City
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_state"
                                        id="floating_state"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.state}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_state"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        State
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_postal"
                                        id="floating_postal"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.postal_code}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_postal"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Postal code
                                    </label>
                                </div>
                                <div class="relative z-0  mb-6 w-full group">
                                    <input
                                        type="text"
                                        name="floating_phone"
                                        id="floating_phone"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={billingAddress.phone}
                                        onChange={(e) => handleBilling(e)}
                                    />
                                    <label
                                        for="floating_phone"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
