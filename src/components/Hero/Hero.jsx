import Navigation from "../Navigation/Navigation";

const Hero = () => {
    return (
        <section className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/desktop/image-header.jpg)' }}>
            <div>
                <Navigation/>
            </div>
            <div className="flex justify-center items-center text-center text-ss_white">
                <h1 className="text-5xl font-bold">
                    We are creatives
                </h1>
                <img src="/images/icon-arrow-down.svg" alt="Arrow Down" className="mt-4" />
            </div>
        </section>
    )
}

export default Hero;
