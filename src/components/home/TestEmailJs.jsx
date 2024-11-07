import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const TestEmailJs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_heubbtl', 'template_y17w3bh', form.current, {
        publicKey: 'aKxsD9MpKuUVpMSgP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='py-12'>
           <h1 className='text-5xl text-black font-bold pb-6 text-center'>Email JS  </h1>
    <form className='flex flex-col max-w-96 mx-auto' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input placeholder='Your Name' type="text" name="name" className='border border-solid border-black rounded px-2 outline-none my-2 py-2' />
      <label>Email</label>
      <input placeholder='Your Email' type="email" name="email" className='border border-solid border-black rounded px-2 outline-none my-2 py-2' />
      <label>Message</label>
      <textarea placeholder='Your Message' name="message" className='border border-solid border-black rounded px-2 outline-none my-2 py-2' />
      <input type="submit" className='bg-black text-white py-2 px-4 rounded hover:text-black border-black border border-solid mt-3 hover:bg-white  transition duration-300 cursor-pointer' value="Send" />
    </form>
    </div>  
  );
};
