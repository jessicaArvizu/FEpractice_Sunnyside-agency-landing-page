import './App.css'
import '@fontsource/barlow';
import '@fontsource-variable/fraunces';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import imgTransform from '../src/images/desktop/image-transform.jpg'
import imgStandOut from '../src/images/desktop/image-stand-out.jpg'
import imgGraphicDesign from '../src/images/desktop/image-graphic-design.jpg'
import imgPhotography from '../src/images/desktop/image-photography.jpg'
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  return (
    <div>

      <Hero />

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center space-y-10 pl-40'>
          <h2 className='text-[40px] font-black leading-[50px] pr-40'>
            Transform your brand
          </h2>

          <p className='text-[18px] font-semibold'>
            We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>

          <h3>
            <a className='hover:underline uppercase font-black'>
              Learn more
            </a>
          </h3>
        </div>
        <div>
          <img src={imgTransform} alt='Egg on a yellow background.' />
        </div>
      </div>

      <div className='grid grid-cols-1	lg:grid-cols-2'>
        <div>
          <img src={imgStandOut} alt='Coralish Pink glass cup on a darker coral background.' />
        </div>
        <div className='flex flex-col justify-center items-center'>

        <h2 className='text-4xl font-black'>
            Stand out to the right audience
          </h2>

          <p>
            Using a collaborative formula of designers, researchers, photographers,
            videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>

          <h3>
            <a>
              Learn more
            </a>
          </h3>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='relative'>
          <img src={imgGraphicDesign} alt='Cherries on a green background.' />

          <div className="absolute top-80 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-36">
            <h2 className="text-3xl font-bold mb-4 font-black text-ss_dark-des-cyan">
              Graphic Design
            </h2>
            <p className="font-bold px-12 mt-4 text-center leading-relaxed text-ss_dark-des-cyan">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className='relative'>
          <img src={imgPhotography} alt='Tangerine on a teal background.' />

          <div className="absolute top-80 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-36">
            <h2 className="text-3xl font-bold mb-4 font-black text-ss_dark-blue">
              Photography
            </h2>
            <p className="font-bold px-12 mt-4 text-center leading-relaxed text-ss_dark-blue">
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
