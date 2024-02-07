import { Link } from 'react-router-dom'
const Products = () => {
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
        }
    ]
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2 md:px-16">
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

            </section>
        </>
    )
}

export default Products
