import { useState } from 'react'
import logoImg from '../Assets/Images/Logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const setToggle = () => {
        setVisible(!visible);
    }
    return (
        <>
            <nav className="bg-[#1f2937] fixed top-0 z-[999] w-full">
                <div className="px-4">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center w-full justify-between">
                            <Link to="/" className="flex-shrink-0 flex items-end gap-2">
                                <img className="w-12 h-12" src={logoImg} alt="Workflow" />
                                <p className='text-[white] font-semibold text text-lg'>ShopEazee</p>
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-6">
                                    <Link to="/" className="text-white border-b-2 border-transparent focus:border-b-2 focus:border-[#F7B030] px-3 py-2 text-sm font-medium" >
                                        Shop
                                    </Link>
                                    <Link to="/mens" className="text-white border-b-2 border-transparent focus:border-b-2 focus:border-[#F7B030] px-3 py-2 text-sm font-medium" >
                                        Mens
                                    </Link>
                                    <Link to="/womens" className="text-white border-b-2 border-transparent focus:border-b-2 focus:border-[#F7B030] px-3 py-2 text-sm font-medium" >
                                        Womens
                                    </Link>
                                    <Link to="/kids" className="text-white border-b-2 border-transparent focus:border-b-2 focus:border-[#F7B030] px-3 py-2 text-sm font-medium" >
                                        Kids
                                    </Link>
                                    <Link to="/login" className='bg-[#F7B030] px-6 py-[10px] rounded-full text-sm font-medium text-white'>Login</Link>
                                    <Link to="/cart" className='relative'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                    </svg>
                                        <div className='bg-[#EB423F] py-[2px] px-[6px] rounded-full absolute top-[-10px] right-[-10px] text-white text-[9px] flex items-center justify-center'>1</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6 md:hidden">
                            <div>
                                <Link to="/cart" className='relative'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                </svg>
                                    <div className='bg-[#EB423F] py-[2px] px-[6px] rounded-full absolute top-[-10px] right-[-10px] text-white text-[9px] flex items-center justify-center'>1</div>
                                </Link>
                            </div>
                            <button onClick={setToggle} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <=========Mobile Nav===========> */}
                <div className="md:hidden">
                    <div className={`${visible ? '' : 'hidden'} px-2 pt-2 pb-3 space-y-8 sm:px-3`}>
                        <Link to="/" className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                            Shop
                        </Link>
                        <Link to="/mens" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" >
                            Mens
                        </Link>
                        <Link to="/womens" className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                            Womens
                        </Link>
                        <Link to="/kids" className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                            Kids
                        </Link>
                        <div className='flex justify-center items-center'>
                            <Link to="/login" className='bg-[#EB423F] px-6 py-[10px] rounded-full text-sm font-medium text-white'>Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </ >
    )
}
export default Navbar