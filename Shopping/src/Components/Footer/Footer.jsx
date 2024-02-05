import { Link } from 'react-router-dom'
import footerLogo from '../Assets/Images/Logo.png'
const Footer = () => {
    return (
        <section className="bg-white border-t border-gray-300">
            <div className="grid grid-cols-12 md:grid-cols-12 gap-5 px-2 py-8 md:py-16 md:px-16">
                <div className='col-span-12 md:col-span-4 flex flex-col justify-start gap-5 items-start'>
                    <img className='w-32 h-6' src={footerLogo} alt="" />
                    <p className='text-[#9f9f9f]'>400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</p>
                    <p></p>
                </div>
                <div className='col-span-6 md:col-span-2 flex flex-col justify-start gap-5 items-start md:items-center'>
                    <h6 className='text-[#9f9f9f] font-semibold'>Links</h6>
                    <ul className='flex flex-col justify-start gap-5 items-start md:items-center'>
                        <li><Link to="/" className='text-black'>Home</Link></li>
                        <li><Link to="shop" className='text-black'>Shop</Link></li>
                        <li><Link to="about" className='text-black'>About</Link></li>
                        <li><Link to="contact" className='text-black'>Contact</Link></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-2 flex flex-col justify-start gap-5 items-start md:items-center'>
                    <h6 className='text-[#9f9f9f] font-semibold'>Help</h6>
                    <ul className='flex flex-col justify-start gap-5 items-start md:items-center'>
                        <li><Link className='text-black'>Payment Options</Link></li>
                        <li><Link className='text-black'>Returns</Link></li>
                        <li><Link className='text-black'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-4 flex flex-col justify-start gap-5 items-center'>
                    <h6 className='text-[#9f9f9f] font-semibold'>Newsletter</h6>
                    <form action="" className='flex justify-start gap-4 items-center'>
                        <input type="email" placeholder='Enter Your Email Address' />
                        <button type='submit' className='uppercase font-semibold underline'>Subscribe</button>
                    </form>
                </div>

            </div>
            <div className='px-2 md:px-16 border-t border-gray-300 py-4'>
                <p className='text-sm'>2023 furino. All rights reverved</p>
            </div>
        </section>
    )
}

export default Footer
