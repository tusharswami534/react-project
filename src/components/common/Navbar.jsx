import React from 'react'
import { Navbar_Data } from './Helper'

const Navbar = () => {
    const [ open , setOpen ] = React.useState(false);
    const toggleNavBar = () => setOpen(!open) 
  return (
    <div className=''>
        <div className='flex justify-between items-center py-5 px-10'>
            <div className='text-4xl inter-font'>Logo</div>
            <button onClick={toggleNavBar} className={`${open ? ' lg:hidden text-white bg-blue-500 py-2 px-3 fixed top-[2.7%] right-[4.5%] rounded-md z-[52]' : 'top-3 lg:hidden left-3 text-black bg-green-500 py-2 px-3 rounded-md z-10'}`} >menu</button>
    <div className={`flex items-center gap-5 max-lg:fixed justify-center max-lg:top-0 max-lg:flex-col max-lg:w-full max-lg:h-full max-lg:bg-white max-lg-top-0 max-lg:z-40 transition-all duration-300  ${open ? "left-0" : "max-lg:left-full "}`}>
        {Navbar_Data.map((data , i ) => (
            <div className='' key={i}>
                <a className='text-2xl inter-font' href={data.NavLink}>
                    {data.NavName}
                </a>
            </div>
        ))}
        <button className='inter-font bg-black text-white py-2 px-4 rounded border border-black border-solid hover:bg-white hover:text-black transition duration-300'>Login</button>

    </div>
     </div>
    </div>
  )
}

export default Navbar