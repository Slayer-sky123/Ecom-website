import { Link } from "react-router-dom"
import Banner from "../Components/Banner/Banner"
import Counter from "../Components/Counter"
const Checkout = () => {
    return (
        <>
            <Banner
                title="Checkout"
                currentPage="Checkout"
            />
            <section className="py-4 md:py-10 px-2 md:px-40">
                <div className="grid md:grid-cols-12 gap-4 mt-5 md:mt-16">
                    <div className="md:col-span-6">
                        <h2 className="text-start mb-5">Billing Details</h2>
                        <form action="" className="flex justify-start gap-4 items-start flex-col">
                            <div className="flex items-start justify-start gap-3 w-full">
                                <div>
                                    <label>First name</label>
                                    <input className="w-full rounded-sm" type="text" name="" id="" required />
                                </div>
                                <div>
                                    <label>Last name</label>
                                    <input className="w-full rounded-sm" type="text" name="" id="" required />
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Company Name (Optional)</label>
                                <input className="w-full rounded-sm" type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Country / Region</label>
                                <input className="w-full rounded-sm" type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Street Address</label>
                                <input className="w-full rounded-sm" type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Town / City</label>
                                <input className="w-full rounded-sm" type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>ZIP Code</label>
                                <input className="w-full rounded-sm" type="number" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Phone</label>
                                <input className="w-full rounded-sm" type="number" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Email Address</label>
                                <input className="w-full rounded-sm" type="email" name="" id="" />
                            </div>
                            <button className="bg-[#b88e2f] text-white py-2 px-8 rounded-sm">Submit</button>
                        </form>
                    </div>
                    <div className="md:col-span-2"></div>
                    <div className="md:col-span-4 flex justify-start gap-4 items-start flex-col">
                        <div>
                            <h6 className="font-semibold text-[20px]">Address</h6>
                            <p className="text-[14px] mt-2">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-[20px]">Phone</h6>
                            <p className="text-[14px] mt-2">Mobile: +(84) 546-6789</p>
                            <p className="text-[14px] mt-2"> Hotline: +(84) 456-6789</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-[20px]">Working Time</h6>
                            <p className="text-[14px] mt-2">Monday-Friday: 9:00 - 22:00</p>
                            <p className="text-[14px] mt-2">Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </section>
            <Counter />
        </>
    )
}

export default Checkout

