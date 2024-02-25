import { Link } from "react-router-dom"
import Banner from "../Components/Banner/Banner"
import Counter from "../Components/Counter"
import productImg from '../Components/Assets/Images/product1.webp'
const Cart = () => {
    return (
        <>
            <Banner
                title="Cart"
                currentPage="Cart"
            />
            <section className="grid md:grid-cols-12 gap-4 px-2 md:px-16 py-2 md:py-16">
                <div className="md:col-span-8">
                    <div className="bg-[#f9f1e7] py-3 px-4 rounded-sm md:px-14 grid grid-cols-12 gap-3">
                        <div className="col-span-4 flex justify-center items-center">
                            <p>Product</p>
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <p>Price</p>
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <p>Quantity</p>
                        </div>
                        <div className="col-span-4 flex justify-center items-center">
                            <p>Subtotal</p>
                        </div>
                    </div>
                    <div className="mt-5 py-3 px-4 rounded-sm md:px-14 grid grid-cols-12 gap-3">
                        <div className="col-span-4 flex justify-start items-center gap-6">
                            <img width={60} src={productImg} alt="" />
                            <p className="text-[#898989] text-[14px]">Product</p>
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <p className="flex-none text-[#898989] text-[14px]">Rs. 250,000.00</p>
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <p className="text-[#898989] text-[14px]">1</p>
                        </div>
                        <div className="col-span-4 flex justify-around items-center">
                            <p className="flex-none text-[14px]">Rs. 250,000.00</p>
                            <button><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#B88E2F" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 bg-[#f9f1e7] pt-4 pb-12 px-4 md:px-10 flex flex-col items-center gap-10">
                    <h5 className="font-bold text-[20px]">Cart Totals</h5>
                    <div className="flex justify-start gap-10 items-center">
                        <p className="text-black text-[14px]">Subtotal</p>
                        <p className="text-[#898989] text-[14px]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-start gap-10 items-center">
                        <p className="text-black text-[14px] flex-none">Total</p>
                        <p className="text-[#B88E2F] text-[16px] flex-none">Rs. 250,000.00</p>
                    </div>
                    <Link to='/checkout' className="border border-1 border-black rounded-md py-2 px-6">Check Out</Link>
                </div>
            </section>
            <Counter />
        </>
    )
}

export default Cart
