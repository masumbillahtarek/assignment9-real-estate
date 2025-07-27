import bg1 from '../assets/bg-1.jpg'
import bg2 from '../assets/bg-2.jpg'
import bg3 from '../assets/bg-3.jpg'
import bg4 from '../assets/bg-4.jpg'

const Banner = () => {
    return (
  <div className='relative my-12'>
        <div className="carousel w-full h-[550px] rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={bg2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={bg1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={bg3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={bg4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
 
    <div className='absolute left-36 top-0 bg-[#06060654] w-3/4 px-4 h-[550px] '>
 <h2 className='text-6xl text-[#fff] font-bold text-center my-4 mt-48'>Find your dream home</h2>
 <p className='text-2xl text-[#fff] text-center mx-auto w-3/4'>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
    </div>
  </div>
    );
};

export default Banner;
{/* 
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
    */}