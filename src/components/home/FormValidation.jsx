import React, { useState } from 'react'
import swal from 'sweetalert';

const FormValidation = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);

  const formData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    select: "Red",
    checkBox: false
  };
  
  const [error, setError] = useState(false);
  const [value, setValue] = useState(formData);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      value.name !== '' &&
      value.email !== '' &&
      value.password !== '' &&
      value.confirmPassword !== '' &&
      value.select !== '' &&
      value.checkBox // Check if the checkbox is checked
    ) {
      setValue(formData);
      setError(false);
      console.log(value);
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to leave this page?",
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  return (
    <div>
      <div className='max-w-[900px] mx-auto border border-black p-2 rounded-md'>
        <form className='flex flex-wrap gap-4' onSubmit={submitHandler}>
          <div className='flex flex-col w-full'>
            <input
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              className='w-full border-solid border-black border rounded-md border-opacity-30 placeholder-black placeholder-opacity-60 outline-none h-10 px-2'
              placeholder='name'
              type="text"
            />
            <p>{error && !value.name && 'Name is required'}</p>
          </div>
          <div className='w-full flex flex-col'>
            <input
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              className='w-full border-solid border-black border rounded-md border-opacity-30 placeholder-black placeholder-opacity-60 outline-none h-10 px-2'
              placeholder='email'
              type="email"
            />
            <p>{error && !value.email && 'Email is required'}</p>
          </div>
          <div className='w-[49%] flex flex-col relative'>
            <input
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              className='w-full border-solid border-black border rounded-md border-opacity-30 placeholder-black placeholder-opacity-60 outline-none h-10 pl-2 pr-12'
              placeholder='password'
              type={passwordShown ? 'text' : 'password'}
            />
            <p
              className='text-right cursor-pointer absolute top-1/2 right-[2%] translate-y-[-50%]'
              onClick={() => setPasswordShown(!passwordShown)}
            >
              {passwordShown ? 'Hide' : 'Show'}
            </p>
            <p>{error && !value.password && 'Password is required'}</p>
          </div>
          <div className='w-[49%] flex flex-col relative'>
            <input
              value={value.confirmPassword}
              onChange={(e) => setValue({ ...value, confirmPassword: e.target.value })}
              className='w-full border-solid border-black border rounded-md border-opacity-30 placeholder-black placeholder-opacity-60 outline-none h-10 px-2'
              placeholder='confirm password'
              type={confirmPasswordShown ? 'text' : 'password'}
            />
            <p
              className='text-right cursor-pointer absolute top-1/2 right-[2%] translate-y-[-50%]'
              onClick={() => setconfirmPasswordShown(!confirmPasswordShown)}
            >
              {confirmPasswordShown ? 'Hide' : 'Show'}
            </p>
            <p>{error && !value.confirmPassword && 'Confirm Password is required'}</p>
          </div>
          <div className='w-full flex flex-col'>
            <select
              value={value.select}
              onChange={(e) => setValue({ ...value, select: e.target.value })}
              className='py-1 px-2 w-3/12 bg-black text-white rounded-md'
            >
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select>
            <p>{error && !value.select && 'Select is required'}</p>
          </div>
          <div className='w-full flex flex-col'>
            <div className='flex gap-2 items-center'>
              <input
                type="checkbox"
                checked={value.checkBox}
                onChange={(e) => setValue({ ...value, checkBox: e.target.checked })} 
                id="connect"
              />
              <label htmlFor="connect">I agree</label>
            </div>
            <p>{error && !value.checkBox && 'Checkbox is required'}</p>
          </div>
          <div className='w-full justify-center flex'>
            <button
              type="submit"
              className='bg-black text-white py-2 max-h-[42px] max-w-[154px] px-4 rounded hover:text-black border-black border border-solid hover:bg-white transition duration-300'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
