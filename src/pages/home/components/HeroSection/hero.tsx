import HeroCarousel from './carousel';

function HeroSection() {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center gap-8 w-full px-4 py-8 lg:py-16'>
            <h1 className="text-4xl sm:text-4xl  md:text-4xl lg:text-5xl font-sans break-words antialiased font-bold text-center lg:text-left">
                What will you {"  "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-800 ">
                    design{"  "}
                </span>
                today?
            </h1>
            <p className='text-base sm:text-lg lg:text-xl leading-6 font-sans break-words antialiased text-gray-600 text-center lg:text-left'>
                Canva makes it easy to create professional designs and to share or print them.
            </p>

            <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold w-full sm:w-auto">
                Sign up for free
            </button>
            <HeroCarousel />
        </section>
    );
}

export default HeroSection;
