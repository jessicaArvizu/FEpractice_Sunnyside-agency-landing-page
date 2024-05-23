import './App.css'
import '@fontsource/barlow';
import '@fontsource-variable/fraunces';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import imgTransformDesktop from '../src/images/desktop/image-transform.jpg'
import imgTransformMobile from '../src/images/mobile/image-transform.jpg'
import imgStandOutDesktop from '../src/images/desktop/image-stand-out.jpg'
import imgStandOutMobile from '../src/images/mobile/image-stand-out.jpg'
import imgGraphicDesignDesktop from '../src/images/desktop/image-graphic-design.jpg'
import imgGraphicDesignMobile from '../src/images/mobile/image-graphic-design.jpg'
import imgPhotographyDesktop from '../src/images/desktop/image-photography.jpg'
import imgPhotographyMobile from '../src/images/mobile/image-photography.jpg'
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  return (
    <div>
      <Hero />

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center text-center p-16 space-y-10 lg:pl-40 lg:order-2 order-2'>
          <h2 className='text-[40px] font-black leading-[50px] lg:pr-40 lg:pt-2'>
            Transform your brand
          </h2>

          <p className='text-[18px] font-semibold lg:pr-28 leading-relaxed'>
            We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>

          <h3>
          <a className='hover:cursor-pointer learn-more uppercase font-black'>
              Learn more
            </a>
          </h3>
        </div>
        <div className='lg:order-2 order-1'>
          <img src={imgTransformDesktop} alt='Egg on a yellow background.' className='hidden lg:block' />
          <img src={imgTransformMobile} alt='Egg on a yellow background.' className='block lg:hidden' />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='order-2 lg:order-1'>
          <img src={imgStandOutDesktop} alt='Coralish Pink glass cup on a darker coral background.' className='hidden lg:block' />
          <img src={imgStandOutMobile} alt='Coralish Pink glass cup on a darker coral background.' className='block lg:hidden' />
        </div>
        <div className='flex flex-col justify-center text-center space-y-10 p-20 lg:pl-28 lg:order-1 order-2'>

          <h2 className='text-[40px] font-black leading-[50px] lg:pr-40 pt-2'>
            Stand out to the right audience
          </h2>

          <p className='text-[18px] font-semibold lg:pr-36 leading-relaxed'>
            Using a collaborative formula of designers, researchers, photographers,
            videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>

          <h3>
          <a className='hover:cursor-pointer learn-more-2 uppercase font-black'>
              Learn more
            </a>
          </h3>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='relative'>
          <img src={imgGraphicDesignDesktop} alt='Cherries on a green background.' className='hidden lg:block' />
          <img src={imgGraphicDesignMobile} alt='Cherries on a green background.' className='block lg:hidden' />


          <div className="absolute top-80 left-0 right-0 bottom-0 flex flex-col justify-center items-center lg:p-36">
            <h2 className="text-3xl font-bold mb-4 mt-4 font-black text-ss_dark-des-cyan">
              Graphic Design
            </h2>
            <p className="lg:text-[18px] font-bold px-12 mt-4 text-center leading-relaxed text-ss_dark-des-cyan">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className='relative'>
          <img src={imgPhotographyDesktop} alt='Tangerine on a teal background.' className='hidden lg:block' />
          <img src={imgPhotographyMobile} alt='Tangerine on a teal background.' className='block lg:hidden' />

          <div className="absolute top-80 left-0 right-0 bottom-0 flex flex-col justify-center items-center lg:p-36">
            <h2 className="text-3xl font-bold mb-4 mt-4 font-black text-ss_dark-blue">
              Photography
            </h2>
            <p className="lg:text-[16px] font-bold px-12 mt-4 text-center leading-relaxed text-ss_dark-blue">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>

      <Testimonials />

      <Gallery />

      <Footer />
    </div>
  )
}

export default App
