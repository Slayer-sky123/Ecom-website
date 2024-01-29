import mainImg from '../Assets/Images/heroImg.webp'
import decorRight from '../Assets/Images/decore-1.webp'
import decorLeft from '../Assets/Images/decore-2.webp'
import './Hero.css'
const Hero = () => {
    return (
        <section className="bg-[#E5E5E5] w-full py-20 px-2 md:px-4 md:pt-28 md:pb-16 lg:px-24 relative">
            <img className='absolute end-0 bottom-[150px] w-36' src={decorRight} alt="" />
            <img className='absolute start-0 bottom-[50px] w-24' src={decorLeft} alt="" />
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center gap-5 items-start'>
                    <h1 className='text-[74px]'>Collections</h1>
                    <p className='capitalize text-[30px]'>you can explore ans shop many differnt collections from various barands here.</p>
                    <a className='shopBtn mt-4'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    </span>Shop Now</a>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[424px] h-[542px]' src={mainImg} alt="" />
                </div>
            </div>
        </section>

    )
}

export default Hero
