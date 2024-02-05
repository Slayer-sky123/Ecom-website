import { Link } from 'react-router-dom';
const Banner = (pages) => {
    return (
        <section className="bannerBg pt-[150px] pb-[100px] flex justify-center items-center flex-col gap-4">
            <h2 className="font-semibold">{pages.title}</h2>
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <Link to='/' class="inline-flex items-center text-sm font-bold text-black">
                            Home
                        </Link>

                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-black">{pages.currentPage}</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </section>
    )
}

export default Banner
