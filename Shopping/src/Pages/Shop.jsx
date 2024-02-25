import { Link } from "react-router-dom"
import Banner from "../Components/Banner/Banner"
import Counter from "../Components/Counter"
import { items } from "../Data/shopProduct"
const Shop = () => {
  return (
    <>
      <Banner
        title="Shop"
        currentPage="Shop"
      />
      <section className="bg-[#f9f1e7] px-2 py-4 md:px-16 flex justify-between flex-col md:flex-row items-center gap-5">
        <div className="flex gap-6 items-center">
          <button className="flex gap-4 items-center">
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.0238 3.14285H6.92857M4.54762 3.14285H0.976191M20.0238 15.0476H6.92857M4.54762 15.0476H0.976191M14.0714 9.09524H0.976191M20.0238 9.09524H16.4524M5.7381 0.761902C6.05383 0.761902 6.35663 0.887327 6.57989 1.11058C6.80315 1.33384 6.92857 1.63664 6.92857 1.95238V4.33333C6.92857 4.64906 6.80315 4.95187 6.57989 5.17512C6.35663 5.39838 6.05383 5.52381 5.7381 5.52381C5.42236 5.52381 5.11956 5.39838 4.8963 5.17512C4.67304 4.95187 4.54762 4.64906 4.54762 4.33333V1.95238C4.54762 1.63664 4.67304 1.33384 4.8963 1.11058C5.11956 0.887327 5.42236 0.761902 5.7381 0.761902V0.761902ZM5.7381 12.6667C6.05383 12.6667 6.35663 12.7921 6.57989 13.0153C6.80315 13.2386 6.92857 13.5414 6.92857 13.8571V16.2381C6.92857 16.5538 6.80315 16.8566 6.57989 17.0799C6.35663 17.3031 6.05383 17.4286 5.7381 17.4286C5.42236 17.4286 5.11956 17.3031 4.8963 17.0799C4.67304 16.8566 4.54762 16.5538 4.54762 16.2381V13.8571C4.54762 13.5414 4.67304 13.2386 4.8963 13.0153C5.11956 12.7921 5.42236 12.6667 5.7381 12.6667ZM15.2619 6.71428C15.5776 6.71428 15.8804 6.83971 16.1037 7.06297C16.327 7.28622 16.4524 7.58903 16.4524 7.90476V10.2857C16.4524 10.6014 16.327 10.9042 16.1037 11.1275C15.8804 11.3508 15.5776 11.4762 15.2619 11.4762C14.9462 11.4762 14.6434 11.3508 14.4201 11.1275C14.1969 10.9042 14.0714 10.6014 14.0714 10.2857V7.90476C14.0714 7.58903 14.1969 7.28622 14.4201 7.06297C14.6434 6.83971 14.9462 6.71428 15.2619 6.71428V6.71428Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Filter</p>
          </button>
          <div className="flex gap-4 items-center">
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6667 17.1667C12.7384 17.1667 11.8482 16.7979 11.1918 16.1416C10.5354 15.4852 10.1667 14.5949 10.1667 13.6667C10.1667 12.7384 10.5354 11.8482 11.1918 11.1918C11.8482 10.5354 12.7384 10.1667 13.6667 10.1667C14.5949 10.1667 15.4852 10.5354 16.1415 11.1918C16.7979 11.8482 17.1667 12.7384 17.1667 13.6667C17.1667 14.5949 16.7979 15.4852 16.1415 16.1416C15.4852 16.7979 14.5949 17.1667 13.6667 17.1667ZM4.33334 17.1667C3.40508 17.1667 2.51484 16.7979 1.85846 16.1416C1.20208 15.4852 0.833336 14.5949 0.833336 13.6667C0.833336 12.7384 1.20208 11.8482 1.85846 11.1918C2.51484 10.5354 3.40508 10.1667 4.33334 10.1667C5.26159 10.1667 6.15183 10.5354 6.80821 11.1918C7.46459 11.8482 7.83334 12.7384 7.83334 13.6667C7.83334 14.5949 7.46459 15.4852 6.80821 16.1416C6.15183 16.7979 5.26159 17.1667 4.33334 17.1667ZM13.6667 7.83334C12.7384 7.83334 11.8482 7.4646 11.1918 6.80822C10.5354 6.15184 10.1667 5.2616 10.1667 4.33334C10.1667 3.40509 10.5354 2.51485 11.1918 1.85847C11.8482 1.20209 12.7384 0.833344 13.6667 0.833344C14.5949 0.833344 15.4852 1.20209 16.1415 1.85847C16.7979 2.51485 17.1667 3.40509 17.1667 4.33334C17.1667 5.2616 16.7979 6.15184 16.1415 6.80822C15.4852 7.4646 14.5949 7.83334 13.6667 7.83334ZM4.33334 7.83334C3.40508 7.83334 2.51484 7.4646 1.85846 6.80822C1.20208 6.15184 0.833336 5.2616 0.833336 4.33334C0.833336 3.40509 1.20208 2.51485 1.85846 1.85847C2.51484 1.20209 3.40508 0.833344 4.33334 0.833344C5.26159 0.833344 6.15183 1.20209 6.80821 1.85847C7.46459 2.51485 7.83334 3.40509 7.83334 4.33334C7.83334 5.2616 7.46459 6.15184 6.80821 6.80822C6.15183 7.4646 5.26159 7.83334 4.33334 7.83334Z" fill="black" />
              </svg>
            </button>
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="border-s-2 border-black ps-6">
            <p className="text-sm font-normal">Showing 1–16 of 32 results</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 items-center">
            <p className="text-sm">Show</p>
            <div className="flex items-center justify-center bg-white py-2 px-4 text-gray-500">
              3
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-sm">Short by</p>
            <select id="cars" name="cars" className="flex items-center justify-center bg-white text-gray-500 py-2 px-4 border-none focus:ring-0">
              <option value="default">Default</option>
              <option value="saab">Name</option>
              <option value="opel">Latest</option>
              <option value="audi">Popular</option>
            </select>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-2 md:px-16">
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
                      <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="white" stroke-width="1.8" />
                    </svg>

                    Like
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="gap-4 flex justify-center items-center mt-10">
          <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">1</button>
          <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">2</button>
          <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">3</button>
          <button className="bg-[#f9f1e7] rounded-md py-2 px-4 hover:text-white hover:bg-[#b88e2f] active:text-white active:bg-[#b88e2f]">Next</button>
        </div>
      </section>
      <Counter />
    </>
  )
}

export default Shop
