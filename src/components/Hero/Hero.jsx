import Navigation from "../Navigation/Navigation";
import imgHero from '../../images/desktop/image-header.jpg';
import imgArrow from '../../images/icon-arrow-down.svg';

const Hero = () => {
    // Calculate the height of the hero section
    const heroHeight = `calc(100vh + 8rem)`; // h-screen + height of Navigation component

    return (
        <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imgHero})`, height: heroHeight }}>
            <Navigation />

            <div className={'flex flex-col justify-center items-center text-center text-ss_white leading-snug mt-[60px]'}>
                <h1 className="text-[60px] font-black uppercase font-fraunces tracking-widest">
                    We are creatives
                </h1>
                <img src={imgArrow} alt="Arrow Down Icon" className="mt-[80px]" />
            </div>
        </section>
    )
}

export default Hero;
