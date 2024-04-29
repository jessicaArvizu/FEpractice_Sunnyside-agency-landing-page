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

function App() {

  return (
    <div>

      <Hero />

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-red-500'>
          Transform your brand

          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.

          Learn more
        </div>
        <div className='bg-blue-500'>
          <img src={imgTransform} alt='Egg on a yellow background.' />
        </div>
      </div>

      <div className='grid grid-cols-1	lg:grid-cols-2'>
        <div className='bg-purple-500'>
          <img src={imgStandOut} alt='Coralish Pink glass cup on a darker coral background.' />
        </div>
        <div className='bg-yellow-500'>

          Stand out to the right audience

          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.

          Learn more
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-orange-500'>
          <img src={imgGraphicDesign} alt='Cherries on a green background.' />

          Graphic design
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

        </div>
        <div className='bg-teal-500'>
          <img src={imgPhotography} alt='Tangerine on a teal background.' />

          Imagen mandarina

          Photography
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

        </div>
      </div>

      <div>
        Client testimonials

        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
        Emily R.
        Marketing Director

        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
        Thomas S.
        Chief Operating Officer

        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        Jennie F.
        Business Owner
      </div>

      <Gallery />

      <Footer />
    </div>
  )
}

export default App
