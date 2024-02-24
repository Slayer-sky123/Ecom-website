import { Link } from "react-router-dom"
import Banner from "../Components/Banner/Banner"
import Counter from "../Components/Counter"

const Cart = () => {
    return (
        <>
            <Banner
                title="Cart"
                currentPage="Cart"
            />
            <section className="grid md:grid-cols-12 gap-3 px-2 md:px-16 py-2 md:py-16">
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
                </div>
                <div className="md:col-span-4 bg-[#f9f1e7] py-4 px-4 md:px-16 flex flex-col items-center gap-6">
                    <h5 className="font-bold text-[20px]">Cart Totals</h5>
                    <div className="flex justify-start gap-10 items-center">
                        <p className="text-black text-[14px]">Subtotal</p>
                        <p className="text-[#898989] text-[14px]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-start gap-10 items-center">
                        <p className="text-black text-[14px] flex-none">Total</p>
                        <p className="text-[#B88E2F] text-[16px] flex-none">Rs. 250,000.00</p>
                    </div>
                    <Link to='/checkout' className="border border-1 border-black rounded-sm py-2 px-6">Check Out</Link>
                </div>
            </section>
            <Counter />
        </>
    )
}

export default Cart
