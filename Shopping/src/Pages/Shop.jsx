import { Link } from "react-router-dom"
import Banner from "../Components/Banner/Banner"
const Shop = () => {
  const items = [
    {
      id: 1,
      imageSrc: 'https://unsplash.com/photos/X5BWooeO4Cw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZGlubmluZyUyMGZ1cm5pdHVyZSUyMGFzdGhldGljfGVufDB8fHx8MTcwNzAzNTMwMXww&force=true&w=640',
      imageAlt: '#',
      title: 'Syltherine',
      description: 'Stylish cafe chair',
      currentPrice: '2,500',
      oldPrice: '4,120'
    },
    {
      id: 2,
      imageSrc: 'https://unsplash.com/photos/9v7UJS92HYc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZSUyMGFzdGhldGljfGVufDB8fHx8MTcwNzAzNTMwMnww&force=true&w=640',
      imageAlt: '#',
      title: 'Wooden Dining Table',
      description: 'Stylish cafe chair',
      currentPrice: '2,599',
      oldPrice: '3,500'
    },
    {
      id: 3,
      imageSrc: 'https://unsplash.com/photos/7tFlUFGa7Dk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZGlubmluZyUyMGZ1cm5pdHVyZSUyMGFzdGhldGljfGVufDB8fHx8MTcwNzAzNTMwMnww&force=true&w=640',
      imageAlt: '#',
      title: 'White Chair',
      description: 'Stylish cafe chair',
      currentPrice: '4,500',
      oldPrice: '5,500'
    },
    {
      id: 4,
      imageSrc: 'https://unsplash.com/photos/zXFtsdi9dIc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGRpbm5pbmclMjBmdXJuaXR1cmUlMjBhc3RoZXRpY3xlbnwwfHx8fDE3MDcwMzUzMDJ8MA&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 5,
      imageSrc: 'https://unsplash.com/photos/YI2YkyaREHk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fHx8MTcwNzA2NzczNHww&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 6,
      imageSrc: 'https://unsplash.com/photos/OtXADkUh3-I/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fHx8MTcwNzA2NzczNHww&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 7,
      imageSrc: 'https://unsplash.com/photos/KSfe2Z4REEM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNjc3MzR8MA&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 8,
      imageSrc: 'https://unsplash.com/photos/TWOnvtstmeU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNjc3MzR8MA&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 9,
      imageSrc: 'https://unsplash.com/photos/X5BWooeO4Cw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZGlubmluZyUyMGZ1cm5pdHVyZSUyMGFzdGhldGljfGVufDB8fHx8MTcwNzAzNTMwMXww&force=true&w=640',
      imageAlt: '#',
      title: 'Syltherine',
      description: 'Stylish cafe chair',
      currentPrice: '2,500',
      oldPrice: '4,120'
    },
    {
      id: 10,
      imageSrc: 'https://unsplash.com/photos/9v7UJS92HYc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZSUyMGFzdGhldGljfGVufDB8fHx8MTcwNzAzNTMwMnww&force=true&w=640',
      imageAlt: '#',
      title: 'Wooden Dining Table',
      description: 'Stylish cafe chair',
      currentPrice: '2,599',
      oldPrice: '3,500'
    },
    {
      id: 11,
      imageSrc: 'https://unsplash.com/photos/7tFlUFGa7Dk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZGlubmluZyUyMGZ1cm5pdHVyZSUyMGFzdGhldGljfGVufDB8fHx8MTcwNzAzNTMwMnww&force=true&w=640',
      imageAlt: '#',
      title: 'White Chair',
      description: 'Stylish cafe chair',
      currentPrice: '4,500',
      oldPrice: '5,500'
    },
    {
      id: 12,
      imageSrc: 'https://unsplash.com/photos/zXFtsdi9dIc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGRpbm5pbmclMjBmdXJuaXR1cmUlMjBhc3RoZXRpY3xlbnwwfHx8fDE3MDcwMzUzMDJ8MA&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 13,
      imageSrc: 'https://unsplash.com/photos/YI2YkyaREHk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fHx8MTcwNzA2NzczNHww&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 14,
      imageSrc: 'https://unsplash.com/photos/OtXADkUh3-I/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fHx8MTcwNzA2NzczNHww&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 15,
      imageSrc: 'https://unsplash.com/photos/KSfe2Z4REEM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNjc3MzR8MA&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    },
    {
      id: 16,
      imageSrc: 'https://unsplash.com/photos/TWOnvtstmeU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNjc3MzR8MA&force=true&w=640',
      imageAlt: '#',
      title: 'Cushion Stuffed Chair',
      description: 'Stylish cafe chair',
      currentPrice: '1,500',
      oldPrice: '3,000'
    }
  ]
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
      <section className="bg-[#f9f1e7]">
        <div className="grid grid-cols-1 md:grid-cols-12 px-2 py-20 md:px-6 gap-10">
          <div className="md:col-span-3 flex gap-2 flex-col md:flex-row justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.3546 3.51562C48.0743 3.51562 46.8741 3.86121 45.8389 4.46156V1.75781C45.8389 0.787031 45.0519 0 44.0811 0H15.9561C14.9852 0 14.1982 0.787031 14.1982 1.75781V4.48301C13.1549 3.8693 11.9409 3.51562 10.6454 3.51562C6.7684 3.51562 3.61418 6.66984 3.61418 10.5469C3.61418 13.5041 4.49051 16.3615 6.14836 18.8102C8.97071 22.9789 12.4511 24.0607 15.3309 25.2127C16.9915 29.348 20.3495 32.6252 24.5384 34.1769L23.2421 42.4219H22.9874C20.0796 42.4219 17.7139 44.7875 17.7139 47.6953V56.4844H15.9561C14.9854 56.4844 14.1983 57.2714 14.1983 58.2422C14.1983 59.213 14.9854 60 15.9561 60H44.0811C45.0519 60 45.8389 59.213 45.8389 58.2422C45.8389 57.2714 45.0519 56.4844 44.0811 56.4844H42.3233V47.6953C42.3233 44.7875 39.9577 42.4219 37.0499 42.4219H36.7951L35.499 34.177C39.694 32.623 43.0557 29.3386 44.7138 25.1948C47.4343 24.1066 51.0005 23.0217 53.8518 18.8102C55.5096 16.3615 56.3859 13.504 56.3859 10.5469C56.3858 6.66984 53.2316 3.51562 49.3546 3.51562ZM14.1852 20.968C9.89918 19.2536 7.12981 15.1631 7.12981 10.5469C7.12981 8.60836 8.70692 7.03125 10.6454 7.03125C12.5839 7.03125 14.1611 8.60836 14.1611 10.5469C14.1611 10.6705 14.1741 10.791 14.1983 10.9073V19.3359C14.1983 19.9009 14.2287 20.4588 14.2868 21.0087L14.1852 20.968ZM38.8077 56.4844H21.2296V52.9688H38.8077V56.4844ZM37.0499 45.9375C38.0191 45.9375 38.8077 46.7261 38.8077 47.6953V49.4531H21.2296V47.6953C21.2296 46.7261 22.0181 45.9375 22.9874 45.9375C23.9411 45.9375 34.8134 45.9375 37.0499 45.9375ZM26.8009 42.4219L27.9641 35.023C28.6368 35.1107 29.3224 35.1562 30.0186 35.1562C30.7148 35.1562 31.4005 35.1105 32.0732 35.023L33.2364 42.4219H26.8009ZM42.3233 19.3359C42.3233 26.1207 36.8034 31.6406 30.0186 31.6406C23.2338 31.6406 17.7139 26.1207 17.7139 19.3359V10.5469H42.3233V19.3359ZM42.3233 7.03125H17.7139V3.51562H42.3233V7.03125ZM45.8147 20.968L45.7522 20.993C45.8092 20.4483 45.8388 19.8955 45.8388 19.3359V10.5469C45.8389 8.60836 47.4161 7.03125 49.3546 7.03125C51.2931 7.03125 52.8702 8.60836 52.8702 10.5469C52.8702 15.1631 50.1008 19.2537 45.8147 20.968Z" fill="#242424" />
            </svg>
            <div className="flex items-center md:items-start flex-col gap-2">
              <h5 className="font-bold">High Quality</h5>
              <p className="text-gray-500 text-sm">crafted from top materials</p>
            </div>
          </div>
          <div className="md:col-span-3 flex gap-2 flex-col md:flex-row justify-center items-center">
            <svg width="41" height="40" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_117_621)">
                <path d="M57.1194 21.2612C56.3276 18.8097 56.6651 15.1296 54.6073 12.2882C52.5333 9.42438 48.9262 8.61039 46.8894 7.1207C44.874 5.64672 42.999 2.43918 39.6089 1.33293C36.3144 0.257852 32.9455 1.71672 30.3333 1.71672C27.7216 1.71672 24.3529 0.2575 21.0578 1.33281C17.6683 2.43883 15.7918 5.64707 13.7777 7.12035C11.7431 8.60828 8.13323 9.42449 6.05959 12.2879C4.00354 15.127 4.33764 18.8154 3.54733 21.2611C2.79522 23.5888 0.333344 26.3825 0.333344 30.0003C0.333344 33.6203 2.79241 36.4032 3.54733 38.7393C4.33905 41.1909 4.00155 44.8709 6.05936 47.7123C8.13323 50.5763 11.7403 51.3902 13.7773 52.88C15.7924 54.3537 17.6677 57.5615 21.0578 58.6676C24.3501 59.742 27.7243 58.2838 30.3333 58.2838C32.9388 58.2838 36.3208 59.7405 39.6089 58.6677C42.9985 57.5617 44.8739 54.3542 46.889 52.8802C48.9236 51.3923 52.5335 50.5761 54.6071 47.7127C56.6633 44.8735 56.3289 41.1854 57.1194 38.7394C57.8715 36.4116 60.3333 33.618 60.3333 30.0003C60.3333 26.3805 57.8749 23.5984 57.1194 21.2612ZM52.6591 37.298C51.7362 40.1545 51.978 43.3512 50.8108 44.963C49.6279 46.5962 46.5202 47.3423 44.1222 49.0963C41.7505 50.8308 40.0882 53.5804 38.1548 54.2112C36.3257 54.8082 33.3449 53.5961 30.3335 53.5961C27.2999 53.5961 24.3499 54.8107 22.512 54.2112C20.5789 53.5804 18.9189 50.8327 16.5446 49.0962C14.1608 47.3528 11.0354 46.5914 9.85588 44.9628C8.69245 43.3564 8.92506 40.1375 8.00784 37.2981C7.10877 34.5162 5.02084 32.1074 5.02084 30.0003C5.02084 27.891 7.1069 25.4905 8.0076 22.7025C8.93045 19.8462 8.68869 16.6492 9.85588 15.0375C11.0381 13.4054 14.1481 12.6569 16.5446 10.9042C18.9239 9.1641 20.5757 6.42109 22.5118 5.78934C24.3393 5.19309 27.3298 6.40445 30.3332 6.40445C33.3722 6.40445 36.3149 5.18898 38.1547 5.78934C40.0876 6.42004 41.7489 9.16879 44.1222 10.9043C46.5057 12.6477 49.6313 13.4091 50.8108 15.0377C51.9745 16.6444 51.7406 19.86 52.6589 22.7023V22.7024C53.5579 25.4843 55.6458 27.8931 55.6458 30.0003C55.6458 32.1095 53.5598 34.51 52.6591 37.298ZM41.1314 22.4774C42.0467 23.3928 42.0467 24.8767 41.1314 25.792L29.4002 37.5231C28.4848 38.4385 27.0008 38.4384 26.0855 37.5231L19.5355 30.973C18.6201 30.0577 18.62 28.5737 19.5353 27.6585C20.4507 26.7433 21.9349 26.7432 22.8499 27.6585L27.7428 32.5513L37.8166 22.4775C38.7319 21.5622 40.216 21.5622 41.1314 22.4774Z" fill="#242424" />
              </g>
              <defs>
                <clipPath id="clip0_117_621">
                  <rect width="60" height="60" fill="white" transform="translate(0.333344)" />
                </clipPath>
              </defs>
            </svg>

            <div className="flex items-center md:items-start flex-col gap-2">
              <h5 className="font-bold">Warranty Protection</h5>
              <p className="text-gray-500 text-sm">Over 2 years</p>
            </div>
          </div>
          <div className="md:col-span-3 flex gap-2 flex-col md:flex-row justify-center items-center">
            <svg width="41" height="40" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_117_629)">
                <path d="M56.0146 31.1019V3.77964C56.0146 2.80489 55.2243 2.01465 54.2496 2.01465H6.96174C5.98699 2.01465 5.19675 2.80489 5.19675 3.77964V33.28C4.34531 33.404 3.51295 33.7346 2.77659 34.2812C0.455278 35.9273 -0.0937517 39.6109 1.85068 41.8827L9.80055 51.5204C14.7216 57.2798 19.9491 57.9854 27.7205 57.9854C34.3894 57.9854 37.371 58.0148 43.1831 56.6905L48.8426 55.3369C49.7603 56.6184 51.2171 57.4485 52.8549 57.4485H55.6429C58.4129 57.4485 60.6666 55.0744 60.6666 52.1561V36.3784C60.6667 33.592 58.6116 31.3031 56.0146 31.1019ZM48.0813 34.7326L45.7296 33.5382C41.863 31.5865 37.3925 31.5142 33.4648 33.3403C32.3932 33.7618 30.056 35.1759 28.8437 35.1286H20.6834C17.9766 35.1286 15.7743 37.3307 15.7743 40.0376V41.3247C15.7591 41.3087 15.7433 41.2936 15.7283 41.2773L9.90091 34.9519C9.54827 34.5692 9.15209 34.2489 8.72684 33.9919V16.481H23.1707V22.951C23.1707 23.9257 23.9609 24.7159 24.9357 24.7159H36.0729C37.0476 24.7159 37.8379 23.9257 37.8379 22.951V16.481H52.4847V31.1018C50.4225 31.2611 48.7029 32.7364 48.0813 34.7326ZM26.7006 16.481H34.3078V21.186H26.7006V16.481ZM52.4846 12.951H37.8379V5.54463H52.4847V12.951H52.4846ZM34.3079 5.54463V12.9511H26.7007V5.54463H34.3079ZM23.1706 5.54463V12.9511H8.72673V5.54463H23.1706ZM42.3639 53.2568C36.9948 54.4865 33.7612 54.4367 27.7838 54.4367C20.4885 54.4367 16.9636 54.3188 12.5238 49.274L4.57394 39.6363C3.19113 37.8357 5.69577 35.7101 7.30473 37.3435L13.1321 43.669C14.6723 45.2941 16.6103 46.1885 18.9991 46.2411H35.1556C36.1303 46.2411 36.9206 45.4508 36.9206 44.4761C36.9206 43.5013 36.1303 42.7111 35.1556 42.7111H19.3042V40.0373C19.3042 39.277 19.9228 38.6583 20.6832 38.6583H28.8436C30.682 38.79 33.3355 37.2549 34.9529 36.541C37.8946 35.1733 41.2429 35.2274 44.135 36.6872L47.8314 38.5646V51.9489L42.3639 53.2568ZM57.1367 52.156C57.1367 53.1278 56.4666 53.9184 55.643 53.9184H52.855C52.0313 53.9184 51.3613 53.1278 51.3613 52.156V36.3784C51.3613 35.4066 52.0315 34.6159 52.855 34.6159H55.643C56.4666 34.6159 57.1367 35.4065 57.1367 36.3784V52.156Z" fill="#242424" />
              </g>
              <defs>
                <clipPath id="clip0_117_629">
                  <rect width="60" height="60" fill="white" transform="translate(0.666687)" />
                </clipPath>
              </defs>
            </svg>

            <div className="flex items-center md:items-start flex-col gap-2">
              <h5 className="font-bold">Free Shipping</h5>
              <p className="text-gray-500 text-sm">Order over 150 $</p>
            </div>
          </div>
          <div className="md:col-span-3 flex gap-2 flex-col md:flex-row justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_117_635)">
                <path d="M54.6936 23.9628C54.2992 10.6825 43.3742 0 29.9999 0C16.6257 0 5.70065 10.6825 5.30618 23.9628L3.52936 25.7396V37.7898L5.29406 39.5545V47.7647C5.29406 52.5652 9.19948 56.4706 13.9999 56.4706H16.1858C16.9143 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7987 56.4681 29.8997 56.4706 29.9999 56.4706C38.5221 56.4706 45.6527 50.3981 47.2922 42.3529H51.9074L56.4705 37.7898V25.7396L54.6936 23.9628ZM29.9999 3.52941C40.4742 3.52941 49.1954 11.174 50.8807 21.1765H47.2922C45.6527 13.1313 38.5221 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11924C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6709 21.1765C37.9663 21.1594 33.9369 21.5068 30.6148 16.6506L29.0016 14.2926L27.6152 16.7907C25.5952 20.4306 22.8749 21.1765 19.4117 21.1765H16.329C17.9002 15.0944 23.4337 10.5882 29.9999 10.5882C36.5662 10.5882 42.0997 15.0944 43.6709 21.1765ZM12.3529 38.8235H9.55442L7.05877 36.3279V27.2015L9.55442 24.7059H12.3529V38.8235ZM8.82348 47.7647V42.3529H12.7043C13.3687 45.6441 14.9582 48.6652 17.313 51.0916C16.8194 51.6191 16.4322 52.2467 16.1858 52.9412H13.9999C11.1456 52.9412 8.82348 50.6191 8.82348 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6789 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6789 56.4706 24.7058 56.4706ZM44.1176 38.8235C44.1176 46.608 37.7844 52.9412 29.9999 52.9412C29.8988 52.9412 29.7968 52.9392 29.6949 52.9368C28.9652 50.8851 27.0048 49.4118 24.7058 49.4118C21.0823 49.4198 21.1401 49.3936 20.6884 49.4352C17.6247 46.7498 15.8823 42.9248 15.8823 38.8235V24.7059H19.4117C22.5349 24.7059 26.3384 24.1909 29.2827 20.6076C33.1674 24.6786 37.9147 24.7059 42.1762 24.7059H44.1176V38.8235ZM52.9411 36.3279L50.4455 38.8235H47.647V24.7059H50.4455L52.9411 27.2015V36.3279Z" fill="#242424" />
              </g>
              <defs>
                <clipPath id="clip0_117_635">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="flex items-center md:items-start flex-col gap-2">
              <h5 className="font-bold">24 / 7 Support</h5>
              <p className="text-gray-500 text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
