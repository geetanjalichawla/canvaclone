import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageComponent } from './ImageComponent';

const HeroCarousel = () => {
    const responsive = {
        fourK: {
            breakpoint: { max: 3000, min: 1400 },
            items: 7,
            gap: 50
        },

        desktop: {
            breakpoint: { max: 1400, min: 1024 },
            items: 6,
            gap: 50
        },

        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            gap: 50

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            gap: 50

        }
    };

    const skill = [
        {
            img: "assets/carousel/c1webp.webp",
            title: "Posters",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c2.webp",
            title: "Resumes",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c3.webp",
            title: "Logos",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c4.webp",
            title: "Docs",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c5.webp",
            title: "Whiteboards ",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c6.webp",
            title: "Presentations",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c7.webp",
            title: "Social",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c8.webp",
            title: "Videos",
            className: "text-black ",
        },
        {
            img: "assets/carousel/c3.webp",
            title: "Prints",
            className: "text-black "

        },
        {
            img: "assets/carousel/c5.webp",
            title: "Instagram posts",
            className: "text-black "
        },

    ]

    return (
        <section className='w-full bg-white '>
            <div className=" rounded-3xl text-center w-full h-full">
                <Carousel responsive={responsive} infinite={true} className='w-full py-10' >
                    {skill.map((image, index) => (
                        <ImageComponent index={index} image={image}/>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default HeroCarousel;
