import { Link } from 'react-router-dom'
import footerLogo from '../Assets/Images/Logo.png'
const Footer = () => {
    return (
        <section className="bg-[#1f2937]">
            <div className="p-8 flex flex-col items-center justify-center gap-7">
                <img className='w-14 h-14' src={footerLogo} alt="" />
                <ul className='flex justify-center gap-10 items-center'>
                    <li><Link to="/" className='text-white'>Shop</Link></li>
                    <li><Link to="mens" className='text-white'>Mens</Link></li>
                    <li><Link to="womens" className='text-white'>Womens</Link></li>
                    <li><Link to="kids" className='text-white'>Kids</Link></li>
                </ul>
            </div>
            <p className='border border-gray-600 w-full'></p>
            <p className='text-white text-center p-4'>All copyrights Reserved @2024</p>
        </section>
    )
}

export default Footer
