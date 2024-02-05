import Hero from "../Components/Hero/Hero"
import showImg1 from '../Components/Assets/Images/show1.webp'
import showImg2 from '../Components/Assets/Images/show2.webp'
import showImg3 from '../Components/Assets/Images/show3.webp'
import Products from "../Components/Products/Products"
import ShowMore from "../Components/Buttons/ShowMore"
import galleryImg from '../Components/Assets/Images/gallery.webp'
const Shop = () => {
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
        <Products />
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
          <div className="flex justify-center items-center">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://unsplash.com/photos/AQl-J19ocWE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNzA1NTd8MA&force=true&w=640" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://unsplash.com/photos/cc0Gg3BegjE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJlYXV0aWZ1bCUyMGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNzA1Njl8MA&force=true&w=640" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://unsplash.com/photos/zzMb7jacyBc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzh8fGJlYXV0aWZ1bCUyMGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNzA1Njl8MA&force=true&w=640" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://unsplash.com/photos/aX1TTOuq83M/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGJlYXV0aWZ1bCUyMGhvbWUlMjBkZWNvcnxlbnwwfHx8fDE3MDcwNzA2NTl8MA&force=true&w=640" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://unsplash.com/photos/nk3mugk6qls/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTIzfHxiZWF1dGlmdWwlMjBob21lJTIwZGVjb3J8ZW58MHx8fHwxNzA3MDcwOTk4fDA&force=true&w=640" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
              </div>
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              </div>
            </div>

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

export default Shop
