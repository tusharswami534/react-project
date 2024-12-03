import React, { useState } from 'react';
import UpArrow from '../../assets/svg/up-arrow.svg';
import { ACCORDION_DATA } from '../common/Helper';

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? false : index);
  };

  return (
    <div>
      <div className='max-w-[590px] mx-auto'>
        <div className='flex flex-col gap-2'>
        {ACCORDION_DATA.map((data, i) => (
            <div key={i} className='overflow-hidden min-h-[20px]'>
            <button
              onClick={() => toggleAccordion(i)}
              className='w-full p-2 bg-red-200 opacity-100 justify-between items-center flex font-bold text-3xl'>
              {data.ButtonName}
              <img
                width={'30px'}
                className={`${openIndex === i ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"}`}
                src={UpArrow}
                alt="uparrow"
              />
            </button>
            <p className={`${openIndex === i ? 'max-h-full duration-300 ease-linear p-2 bg-black' : 'h-0 duration-300 ease-linear p-0'} overflow-hidden text-white`}>
              {data.Content}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
