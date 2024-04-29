import Navigation from "../Navigation/Navigation";
import imgHero from '../../images/desktop/image-header.jpg';
import imgArrow from '../../images/icon-arrow-down.svg';

const Hero = () => {
    // Calculate the height of the hero section
    const heroHeight = `calc(100vh + 8rem)`; // h-screen + height of Navigation component

    return (
        <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imgHero})`, height: heroHeight }}>
            <Navigation />

            <div className={'flex flex-col justify-center items-center text-center text-ss_white mt-20'}>
                <h1 className="text-6xl font-black uppercase font-fraunces tracking-widest">
                    We are creatives
                </h1>
                <img src={imgArrow} alt="Arrow Down Icon" className="mt-20" />
            </div>
        </section>
    )
}

export default Hero;
