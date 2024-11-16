import React, { useState } from 'react';
import { DashBoard_Icon, SIDE_BAR_DATA, TAB_Link } from '../common/Helper';
import Zareh from '../../assets/images/zareh-geertjes.png';

// Import content components
import EventContent from './EventContent';
import ProgrammesContent from './ProgrammesContent';
import DashboardContent from './DashboardContent';
import OndemandCntent from './OndemandCntent'

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab-one'); // Active tab state
  
  const toggleSidebar = () => setOpen(!open);

  // Handle tab click
  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex w-full relative lg:pl-[220px] pt-[150px]">
      <div
        onClick={toggleSidebar}
        className={`h-full w-full fixed bg-black top-0 right-0 bg-layer transition-opacity duration-300 ${
          open ? 'opacity-50 z-50' : 'opacity-0 hidden'
        }`}
      ></div>
      <button
        onClick={toggleSidebar}
        className={`${
          open
            ? 'fixed top-3 left-3 lg:hidden text-white bg-blue-500 py-2 px-3 rounded-md z-[52]'
            : 'fixed top-3 lg:hidden left-3 text-black bg-blue-500 py-2 px-3 rounded-md z-10'
        }`}
      >
        menu
      </button>
      <div className='fixed left-0 top-0 z-50'>
      <div
        className={`max-w-[240px] px-5 flex-col justify-between flex min-h-screen sticky max-lg:fixed top-0 z-[51] bg-black transition duration-300 ${
          open ? 'translate-x-0' : 'max-lg:-translate-x-full'
        }`}>
        <div>
          {DashBoard_Icon.map((logo, l) => (
            <div className="pt-11" key={l}>
              <a href={logo.logoLink}>{logo.logoIcon}</a>
            </div>
          ))}
          {SIDE_BAR_DATA.map((data, i) => (
            <div
              key={i}
              id={data.id}
              className={`flex gap-x-4 pt-8 items-center cursor-pointer text-white ${
                activeTab === data.id ? 'text-yellow-500  ' : ''
              }`}
              onClick={() => handleClick(data.id)} // Set the active tab
            >
              {data.tabIcon}
              <p>{data.tabName}</p>
            </div>
          ))}
        </div>
        <div>
          {TAB_Link.map((name, index) => (
            <div className="text-[#808080] pt-[17px]" key={index}>
              <a href={name.tabLink}>{name.tabName}</a>
            </div>
          ))}
          <div className="pt-11 pb-10">
            <a className="text-white flex gap-3.5 items-center" href="#profile">
              <img className="size-8" src={Zareh} alt="Zareh Geertij" />
              Zareh Geertjes
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className='w-full'>
        <div className='min-h-[150px] fixed top-0 w-full bg-yellow-500'>
          <div className='pt-10 pl-9'>
          <h1 className='text-4xl text-black font-bold inter-font'>Welcome back, Zareh 👋🏻</h1>
          <p className='text-lg text-gray-600 inter-font pt-5'>Below you find your upcoming events, enrolled programmes and progress</p>
          </div>
        </div>
      <div className="w-full">
        <div className="max-lg:flex-wrap w-full gap-4">
          {activeTab === 'tab-one' && <DashboardContent />}
          {activeTab === 'tab-two' && <EventContent />}
          {activeTab === 'tab-three' && <OndemandCntent />}
          {activeTab === 'tab-four' && <ProgrammesContent />}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
