import { useState } from 'react'
import dummyProd from '../Components/Assets/Images/dummyProd.webp'
import { Link } from 'react-router-dom'
import { items } from '../Data/relatedProduct';
const ProductDetails = () => {
    const [addItem, setAddItem] = useState(0);
    const handleAdd = () => {
        setAddItem(addItem + 1);
    }
    const handleRemove = () => {
        addItem < 1 ? '' : setAddItem(addItem - 1);
    }
    return (
        <>
            <section className="bg-[#f9f1e7] mt-20">
                <div className="px-2 md:px-16 py-5 flex justify-start gap-4 items-center">
                    <a href="" className="text-[#9f9f9f] font-semibold flex items-center gap-3">Home
                        <svg width="8" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                        </svg>
                    </a>
                    <a href="" className="text-[#9f9f9f] font-semibold flex items-center gap-3">Shop
                        <svg width="8" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                        </svg>
                    </a>
                    <p className="fw-normal text-[16px]">Asgaard sofa</p>
                </div>
            </section>
            <section className="px-2 md:px-16 py-5">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-20 gap-y-5">
                    <div className='lg:col-span-5 bg-[#f9f1e7] rounded-md flex justify-center items-center'>
                        <img src={dummyProd} alt="" />
                    </div>
                    <div className='lg:col-span-7 flex flex-col items-start gap-3'>
                        <h2 className='font-normal'>Asgaard sofa</h2>
                        <p className='text-[#9f9f9f]'>Rs. 250,000.00</p>
                        <div className='flex justify-start items-center gap-5'>
                            <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                                <path d="M36 1L39 7L45 7.75L40.88 12.37L42 19L36 16L30 19L31.13 12.37L27 7.75L33 7L36 1Z" fill="#FFC700" />
                                <path d="M62 1L65 7L71 7.75L66.88 12.37L68 19L62 16L56 19L57.13 12.37L53 7.75L59 7L62 1Z" fill="#FFC700" />
                                <path d="M88 1L91 7L97 7.75L92.88 12.37L94 19L88 16L82 19L83.13 12.37L79 7.75L85 7L88 1Z" fill="#FFC700" />
                                <path d="M111.156 7.0125L104.8 7.9375L109.4 12.4188L108.313 18.75L114 15.7625V1.25L111.156 7.0125Z" fill="#FFC700" />
                            </svg>
                            <p className='text-[#9f9f9f] text-sm'>5 Customer Review</p>
                        </div>
                        <p className='lg:w-96 text-sm'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                        <p className='text-[#9f9f9f] text-sm'>Size</p>
                        <div className="gap-4 flex justify-center items-center">
                            <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">S</button>
                            <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">M</button>
                            <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">L</button>
                            <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">XL</button>
                        </div>
                        <p className='text-[#9f9f9f] text-sm'>Color</p>
                        <div className="gap-4 flex justify-center items-center">
                            <button className="bg-[#816dfa] p-4 rounded-full"></button>
                            <button className="bg-[#000000] p-4 rounded-full"></button>
                            <button className="bg-[#b88e2f] p-4 rounded-full"></button>
                        </div>
                        <div className='grid grid-cols-12 md:grid-cols-12 gap-4 mt-3'>
                            <div className='col-span-6 md:col-span-4'>
                                <div className='border-2 border-[#000000] rounded-lg px-5 py-2 flex justify-between items-center'>
                                    <button onClick={handleRemove}>-</button><span>{addItem}</span><button onClick={handleAdd}>+</button>
                                </div>
                            </div>
                            <div className='col-span-6 md:col-span-4'><button className='px-5 py-2 border-2 border-[#000000] rounded-lg'>Add To Cart</button></div>
                            <div className='col-span-12 md:col-span-4'><button className='px-5 py-2 border-2 border-[#000000] rounded-lg flex justify-center gap-2 items-center'>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.731 7.479H6.832V12.447H4.877V7.479H0.00100011V5.708H4.877V0.716999H6.832V5.708H11.731V7.479Z" fill="black" />
                                </svg>
                                Compare</button></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='border-y border-gray-300 mt-8'>
                <div className='px-2 md:px-16 py-10 flex justify-center items-center'>
                    <div className='flex gap-5 items-center flex-col'>
                        <p className='font-semibold text-[22px]'>Discription</p>
                        <p className='text-[#898989] font-normal text-justify'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p className='text-[#898989] font-normal text-justify'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                </div>
            </section>
            <section className='px-2 md:px-16 py-5'>
                <h2 className='text-center font-semibold pb-10'>Related Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {items.map((item) => (
                        <div key={item.id} className="productCard">
                            <img className='aspect-square' loading='lazy' src={item.imageSrc} alt={item.imageAlt} />
                            <div className='productBody p-2 md:p-4'>
                                <h5 className='font-bold textStyle'>{item.title}</h5>
                                <p className='text-[#898989] text-[14px] textStyle'>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='text-black text-[14px]'>₹ {item.currentPrice}</p>
                                    <p className='text-[#b0b0b0] text-[14px] line-through'>₹ {item.oldPrice}</p>
                                </div>
                            </div>
                            <div className='productOverly'>
                                <div className="flex gap-2 items-center">
                                    <a href="#" className='addCartBtn'>Add to Cart</a>
                                    <Link to="/details" className='addCartBtn'>View</Link>
                                </div>
                                <div className='flex justify-between items-center gap-5'>
                                    <a href="#" className='flex justify-start items-center gap-1 text-white font-semibold'>
                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.66671C9.47467 9.66671 9 9.87337 8.644 10.2047L3.94 7.46671C3.97333 7.31337 4 7.16004 4 7.00004C4 6.84004 3.97333 6.68671 3.94 6.53337L8.64 3.79337C9 4.12671 9.47333 4.33337 10 4.33337C11.1067 4.33337 12 3.44004 12 2.33337C12 1.22671 11.1067 0.333374 10 0.333374C8.89333 0.333374 8 1.22671 8 2.33337C8 2.49337 8.02667 2.64671 8.06 2.80004L3.36 5.54004C3 5.20671 2.52667 5.00004 2 5.00004C0.893333 5.00004 0 5.89337 0 7.00004C0 8.10671 0.893333 9.00004 2 9.00004C2.52667 9.00004 3 8.79337 3.36 8.46004L8.05867 11.2054C8.02112 11.3563 8.00143 11.5112 8 11.6667C8 12.0623 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5145C9.60009 13.6658 10.0022 13.7054 10.3902 13.6283C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0569C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5359 11.44 10.2235 11.1111 10.0038C10.7822 9.784 10.3956 9.66671 10 9.66671Z" fill="white" />
                                        </svg>
                                        Share
                                    </a>

                                    <a href="#" className='flex justify-start items-center gap-1 text-white font-semibold'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z" fill="white" />
                                        </svg>

                                        Compare
                                    </a>

                                    <a href="#" className='flex justify-start items-center gap-1 text-white font-semibold'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>

                                        Like
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductDetails
