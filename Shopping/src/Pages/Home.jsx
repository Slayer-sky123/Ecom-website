import Hero from "../Components/Hero/Hero"
import showImg1 from '../Components/Assets/Images/show1.webp'
import showImg2 from '../Components/Assets/Images/show2.webp'
import showImg3 from '../Components/Assets/Images/show3.webp'
import ShowMore from "../Components/Buttons/ShowMore"
import galleryImg from '../Components/Assets/Images/gallery.webp'
import { items } from "../Data/productData"
import { Link } from "react-router-dom"
import { useState } from "react"
const Home = () => {
  const [showProducts, setShowProducts] = useState(items.slice(0, 8));
  return (
    <div>
      <Hero />
      <section className="flex justify-center gap-3 items-center flex-col py-8">
        <h2>Browse The Range</h2>
        <p className="text-[#666666] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 md:px-16">
          <div>
            <img className="aspect-square" src={showImg1} alt="" />
            <p className="text-center py-4">Dining</p>
          </div>
          <div>
            <img className="aspect-square" src={showImg2} alt="" />
            <p className="text-center py-4">Living</p>
          </div>
          <div>
            <img className="aspect-square" src={showImg3} alt="" />
            <p className="text-center py-4">Bedroom</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-8 items-center flex-col py-8">
        <h2>Our Products</h2>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2 md:px-16">
          {showProducts.map((item) => (
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
        </section>
        <ShowMore />
      </section>
      <section className="bg-[#FCF8F3]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 py-8 md:py-16 md:px-16">
          <div className="flex flex-col justify-center items-start gap-3">
            <h2>50+ Beautiful rooms
              inspiration</h2>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <a href="#" className='buyBtn mt-3'>Explore More</a>
          </div>
          <div className="flex justify-between items-center flex-col gap-5">
            <img className="aspect-video rounded-md" src="https://unsplash.com/photos/9rYfG8sWRVo/download?force=true&w=640" alt="" />
            <img className="aspect-video rounded-md" src="https://unsplash.com/photos/85pCvDWDMmI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8aG9tZSUyMGRlY29yfGVufDB8fHx8MTcwNzEzMDU1M3ww&force=true&w=640" alt="" />
          </div>
          <div className="flex justify-between items-center flex-col gap-5">
            <img className="aspect-video rounded-md" src="https://unsplash.com/photos/9rYfG8sWRVo/download?force=true&w=640" alt="" />
            <img className="aspect-video rounded-md" src="https://unsplash.com/photos/85pCvDWDMmI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8aG9tZSUyMGRlY29yfGVufDB8fHx8MTcwNzEzMDU1M3ww&force=true&w=640" alt="" />
          </div>
        </div>
      </section>
      <section className="py-10">
        <p className="text-center">Share your setup with</p>
        <h2 className="text-center">#FuniroFurniture</h2>
        <img className="aspect-video" src={galleryImg} alt="" />
      </section>
    </div>
  )
}

export default Home
