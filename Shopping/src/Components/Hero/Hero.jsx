import './Hero.css'
const Hero = () => {
    return (
        <>
            <section className='heroBg pt-[130px] pb-[50px] md:pt-[150px] md:pb-[100px] flex justify-center items-center'>
                <div className='px-2 md:px-12 grid grid-cols-1 md:grid-cols-12'>
                    <div className='md:col-span-6'></div>
                    <div className='md:col-span-6'>
                        <div className='bg-[#fff3e3] p-5 md:p-8 flex flex-col items-start gap-4'>
                            <h5 className='whitespace-nowrap'>New Arrival</h5>
                            <h1>Discover Our New Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <a href="#" className='buyBtn mt-3'>Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
