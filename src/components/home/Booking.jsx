import React, { useState } from 'react'
import Swal from 'sweetalert2';
const Booking = () => {
    const showAlert = () => {
        Swal.fire({
            title: 'Thank You !',
            text: 'Your request is recieved',
            icon: 'success',
            confirmButtonText: 'ok',
            customClass: {
                confirmButton: 'confirm-button-class',
                title: 'swal-title',
                icon: 'swal-icon',
                text:'swal-text'
            },
        });
    };

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        lastName: '',
        phone: '',
        passport: '',
        address: '',
        request: '',
        airport: false,
        activity: false,
        spa: false,
    });

    const handleChange = (e) => {
        const { name, value, } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleClear = (e) => {
        e.preventDefault();
        setFormData({
            email: '',
            name: '',
            lastName: '',
            phone: '',
            passport: '',
            address: '',
            request: '',
            airport: false,
            activity: false,
            spa: false,
        });
    };
    const change = (e) => {
        e.preventDefault();
        showAlert();
        handleClear(e);
        handleSubmit(e);
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isChecked) {
            Swal.fire({
                title: 'Error',
                text: 'Please agree to the Terms and Conditions.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        } else if (formData.name === '' || formData.email === '') {
            Swal.fire({
                title: 'Error',
                text: 'Please fill in all required fields.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        } else {
            showAlert(); // Proceed with submission
            handleClear(e);
        }
    };


    return (
        <div className='pt-44 max-lg:pt-32 max-md:pt-20 max-sm:pt-12 flex items-center'>
            <div className='max-w-xxl mx-auto px-4 w-full'>
                <h2 id='home' className='font-lora px-3 font-bold text-xxxl text-dark-blue max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Booking Now</h2>
                <p className='font-mulish text-base px-3 leading-5 text-gray max-w-[608px] pt-6 max-lg:pt-4 max-md:pt-3 max-sm:pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet, </p>
                <div className='flex flex-wrap max-lg:flex-col-reverse w-full pt-14 pb-10 max-lg:pt-12 max-md:pt-10 max-sm:pt-8'>
                    <div className='w-full lg:w-2/3 px-3 max-lg:pt-4'>
                        <div className='rounded-lg border border-light p-10 max-md:p-7 max-sm:p-4'>
                            <p className='font-lora font-bold text-2xl text-dark-blue pb-8 max-md:pb-5 max-sm:pb-3 max-xmd:text-xl'>Billing Details</p>
                            <div className='flex gap-4 w-full pb-4 max-md:flex-col'>
                                <div className='w-full'>
                                    <label htmlFor="first name" className='font-mulish font-bold max-xmd:font-semibold text-base text-dark-blue cursor-pointer'>First Name</label> <br />
                                    <input id='first name' required name='name' value={formData.name} onChange={handleChange} type="text" placeholder='Input your First Name in Here' className='rounded-lg p-4 max-md:p-3 max-sm:p-2 max-md:mt-2 max-sm:mt-1 border border-light mt-4 w-full font-mulish text-base max-md:text-sm max-sm:text-xs text-black font-normal' />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="last name" className='font-mulish font-bold max-xmd:font-semibold text-base text-dark-blue cursor-pointer'>Last Name</label> <br />
                                    <input id='last name' name='lastName' value={formData.lastName} onChange={handleChange} type="text" placeholder='Input your Last Name in Here' className='rounded-lg p-4 border max-md:p-3 max-sm:p-2 max-md:mt-2 max-sm:mt-1 border-light mt-4 w-full font-mulish text-base max-md:text-sm max-sm:text-xs text-black font-normal' />

                                </div>
                            </div>
                            <label htmlFor="email" className='font-mulish font-bold max-xmd:font-semibold text-base text-dark-blue cursor-pointer'>Email Address</label><br />
                            <input id='email' name='email' required
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}" value={formData.email} onChange={handleChange} type="email" placeholder='Input your Email Address in Here' className='rounded-lg p-4 border border-light mt-4 max-md:p-3 max-sm:p-2 max-md:mt-2 max-sm:mt-1 w-full font-mulish text-base max-md:text-sm max-sm:text-xs text-black font-normal mb-4' />
                            <label htmlFor="phone" className='font-mulish font-bold max-xmd:font-semibold text-base text-dark-blue cursor-pointer'>Phone Number</label><br />
                            <div className='rounded-lg border border-light mt-4 max-md:mt-2 max-sm:mt-1 mb-4 flex overflow-hidden'>
                                <select name="select" id="select" className='selection text-base max-md:text-sm appearance-none bg-[#F2F2F2] border-r-[1px] border-light px-2 outline-none'>
                                    <option value="">+91</option>
                                    <option value="" >+1</option>
                                    <option value="" >+44</option>
                                    <option value="" >+63</option>
                                </select>
                                <input id='phone' required min="0" name='phone' value={formData.phone} onChange={handleChange} type="number" placeholder='Input your Phone Number in Here' className='rounded-lg p-4 max-md:p-3 max-sm:p-2 h-full w-full font-mulish text-base max-md:text-sm max-sm:text-xs text-black font-normal' />
                            </div>
                            <label htmlFor="passport" className='font-mulish font-bold max-xmd:font-semibold text-base text-dark-blue cursor-pointer'>Passport Number <span className='font-normal text-light-gray'>(optional)</span></label><br />
                            <input id='passport' name='passport' value={formData.passport} onChange={handleChange} type="text" placeholder='Input your Passport Number in Here' className='rounded-lg p-4 max-md:p-3 max-sm:p-2 max-md:mt-2 max-sm:mt-1 border border-light mt-4 w-full font-mulish text-base max-md:text-sm max-sm:text-xs text-black font-normal mb-4' />
                            <label htmlFor="address" className='font-mulish font-bold max-xmd:font-semibold text-base text-dark-blue cursor-pointer'>Address</label><br />
                            <input id='address' required name='address' value={formData.address} onChange={handleChange} type="address" placeholder='Input your Address in Here' className='rounded-lg p-4 max-md:p-3 max-sm:p-2 max-md:mt-2 max-sm:mt-1 border border-light mt-4 w-full font-mulish text-base max-md:text-sm max-sm:text-xs text-black font-normal' />
                        </div>
                    </div>
                    <div id='blog' className='w-full lg:w-1/3 px-3'>
                        <div id='room' className='rounded-lg overflow-hidden'>
                            <div className='max-xmd:overflow-y-scroll'>
                                <div className='border border-t-0 border-light rounded-b-lg p-4 pb-24 max-[1100px]:pb-16 max-[1065px]:pb-9 max-sm:p-4 max-xmd:pb-[70px] max-[801px]:pb-6'>
                                    <h2 className='font-lora font-bold text-2xl leading-7 text-dark-blue max-xmd:text-xl max-xmd:leading-6'>President Luxury Double Room View NY City</h2>
                                    <p className='font-mulish font-semibold text-base text-gray pt-4 pb-6 max-sm:pt-2 max-sm:pb-4'>29 October 2024</p>
                                    <div className='flex items-center gap-4 max-[1100px]:flex-wrap justify-between'>
                                        <div className='flex items-center gap-1'>
                                            <div className='h-8 w-8 flex justify-center items-center bg-light-gray'>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 3V18H0V16H2V0H11V1H16V16H18V18H14V3H11ZM7 8V10H9V8H7Z" fill="black" />
                                                </svg>
                                            </div>
                                            <p className='font-mulish text-base text-light-gray text-nowrap'>1 Room</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div className='h-8 w-8 flex justify-center items-center bg-light-gray'>
                                                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill="black" />
                                                </svg>
                                            </div>
                                            <p className='font-mulish text-base text-light-gray text-nowrap'>2 Guest</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div className='h-8 w-8 flex justify-center items-center bg-light-gray'>
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.00004 10.77C4.64671 10.77 5.23904 10.9447 5.77704 11.294C6.31571 11.644 6.71138 12.1173 6.96404 12.714L7.40604 13.769H8.55004C9.01938 13.769 9.41671 13.938 9.74204 14.276C10.0674 14.614 10.2304 15.022 10.231 15.5C10.231 15.982 10.063 16.391 9.72704 16.727C9.39104 17.063 8.98204 17.231 8.50004 17.231H4.00004C3.10538 17.231 2.34338 16.916 1.71404 16.286C1.08471 15.656 0.76971 14.894 0.769043 14C0.769043 13.0887 1.08404 12.3223 1.71404 11.701C2.34404 11.0797 3.10604 10.769 4.00004 10.769M8.11604 0.36499C8.04671 1.92499 8.28571 3.42532 8.83304 4.86599C9.37971 6.30666 10.2064 7.57999 11.313 8.68599C12.4197 9.79266 13.693 10.6197 15.133 11.167C16.573 11.7143 18.0737 11.9533 19.635 11.884C19.035 13.7127 17.9644 15.1797 16.423 16.285C14.8824 17.3917 13.1574 17.9633 11.248 18C11.5634 17.656 11.806 17.2697 11.976 16.841C12.146 16.4123 12.231 15.9653 12.231 15.5C12.231 14.4947 11.8927 13.634 11.216 12.918C10.5394 12.202 9.71538 11.8313 8.74404 11.806C8.31338 10.8813 7.67071 10.144 6.81604 9.59399C5.96138 9.04399 5.02271 8.76932 4.00004 8.76999C3.65871 8.76999 3.32071 8.80466 2.98604 8.87399C2.65071 8.94332 2.32204 9.04732 2.00004 9.18599V8.87799C2.00804 6.93532 2.57138 5.18532 3.69004 3.62799C4.80804 2.06999 6.28338 0.982991 8.11604 0.366991" fill="black" />
                                                </svg>
                                            </div>
                                            <p className='font-mulish text-base text-light-gray text-nowrap'>1 Night</p>
                                        </div>
                                    </div>
                                    <p className='font-mulish font-semibold text-sm text-gray pt-8 max-sm:pt-5'>Total Price</p>
                                    <p className='font-lora font-bold text-xxl text-dark-gray max-xmd:text-2xl'>$59</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='rounded-lg border border-light p-10 max-md:p-7 max-sm:p-4 lg:max-w-[727px] w-full'>
                        <p className='font-lora font-bold text-2xl text-dark-blue pb-8 max-md:pb-5 max-sm:pb-3 max-xmd:text-xl'>Extra Facilitation</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center '>
                                <input type="checkbox" name="airport" checked={formData.airport} onChange={handleCheckbox} id="airport"
                                    className='checkbox-input h-5 w-5 cursor-pointer transition-all'
                                />
                                <label htmlFor="airport" className='checkbox font-mulish font-semibold text-base max-md:text-sm max-sm:text-xs text-gray cursor-pointer'>Airport Pickup</label>
                            </div>
                            <p className='font-mulish font-bold text-base max-md:text-sm max-sm:text-xs text-dark-blue'>+ Rp. 230.000</p>
                        </div>
                        <div className='flex justify-between items-center my-6'>
                            <div className='flex items-center gap-4'>
                                <input
                                    type="checkbox"
                                    name="activity"
                                    id="activity"
                                    className='checkbox-input h-5 w-5 cursor-pointer transition-all '
                                    checked={formData.activity} onChange={handleCheckbox}
                                />
                                <label htmlFor="activity" className='checkbox font-mulish font-semibold text-base max-md:text-sm max-sm:text-xs text-gray cursor-pointer'>Activity</label>
                            </div>
                            <p className='font-mulish font-bold text-base max-md:text-sm max-sm:text-xs text-dark-blue'>+ Rp. 230.000</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <input
                                    type="checkbox"
                                    name="spa"
                                    id="spa"
                                    className='checkbox-input h-5 w-5 cursor-pointer transition-all '
                                    checked={formData.spa} onChange={handleCheckbox}
                                />
                                <label htmlFor="spa" className='checkbox font-mulish font-semibold text-base max-md:text-sm max-sm:text-xs text-gray cursor-pointer'>Massage and Spa</label>
                            </div>
                            <p className='font-mulish font-bold text-base max-md:text-sm max-sm:text-xs text-dark-blue'>+ Rp. 230.000</p>
                        </div>
                        <p className='font-mulish font-bold text-base text-dark-blue pt-8 pb-4 max-md:pt-7 max-md:pb-3 max-sm:pt-6 max-sm:pb-1'>Special Request</p>
                        <textarea name='request' value={formData.request} onChange={handleChange} id="#" placeholder='Input your Special Request in Here' className='font-mulish resize-none text-base max-md:text-sm max-sm:text-xs text-black w-full border border-light rounded-lg p-4 max-md:p-3 max-sm:p-2 h-44 outline-none'></textarea>
                    </div>
                </div>
                <div className='max-lg:flex max-sm:flex-col justify-between items-center pt-20 max-lg:pt-16 max-md:pt-12 max-sm:pt-8 pb-28 max-lg:pb-24 max-md:pb-16 max-sm:pb-12'>
                    <div className='flex px-3 items-center gap-4 lg:pb-11 max-sm:pb-4 max-sm:w-full'>
                        <input
                            type="checkbox"
                            id='condition'
                            className='checkbox-input h-6 w-6 cursor-pointer'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="condition" className='checkbox font-mulish font-semibold text-base max-md:text-sm max-sm:text-xs text-gray cursor-pointer'>I have agree to the rules, Terms and Conditions.</label>
                    </div>
                    <div className='lg:max-w-[724px] max-sm:w-full px-3'>
                        <button onClick={change} disabled={!isChecked} className={`text-nowrap rounded-lg text-base text-white font-semibold relative overflow-hidden font-mulish py-4 max-md:py-3 max-sm:py-2 max-sm:px-5 px-6 bg-mustard transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-300 hover:text-mustard hover:before:right-0 hover:before:w-full w-full `}><span className='text-nowrap relative z-20 w-full h-full'>Continue to Payment</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking