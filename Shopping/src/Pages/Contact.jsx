import { Link } from "react-router-dom"
import Banner from "../Components/Banner/Banner"
import Counter from "../Components/Counter"
const Contact = () => {
    return (
        <>
            <Banner
                title="Contact"
                currentPage="Contact"
            />
            <section className="py-4 md:py-10 px-2 md:px-40">
                <h2 className="text-center">Get In Touch With Us</h2>
                <p className="text-[#898989] text-[14px] text-center mt-5">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br></br>Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="grid md:grid-cols-12 gap-4 mt-5 md:mt-16">
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
                    <div className="md:col-span-2"></div>
                    <div className="md:col-span-6">
                        <form action="" className="flex justify-start gap-4 items-start flex-col">
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Your name</label>
                                <input className="w-full rounded-sm" placeholder="Abc" type="text" name="" id="" required />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Email address</label>
                                <input className="w-full rounded-sm" placeholder="Abc@def.com" type="email" name="" id="" required />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Subject</label>
                                <input className="w-full rounded-sm" placeholder="This is an optional" type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3 w-full">
                                <label>Message</label>
                                <textarea className="w-full rounded-sm" placeholder="Hi! i’d like to ask about" type="text" name="" id="" />
                            </div>
                            <button className="bg-[#b88e2f] text-white py-2 px-8 rounded-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            <Counter />
        </>
    )
}

export default Contact

