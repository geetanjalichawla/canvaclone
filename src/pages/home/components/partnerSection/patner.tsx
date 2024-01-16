import ScrollText from './scrollingText'

function Partner() {
    const images = ['assets/scrolling/salesforce-grayscale.webp',
        'assets/scrolling/skyscanner-grayscale.webp',
        'assets/scrolling/sony-music-monochrome.webp',
        'assets/scrolling/salesforce-grayscale.webp',
        'assets/scrolling/skyscanner-grayscale.webp',
        'assets/scrolling/sony-music-monochrome.webp',
        'assets/scrolling/salesforce-grayscale.webp',
        'assets/scrolling/skyscanner-grayscale.webp',
        'assets/scrolling/sony-music-monochrome.webp',
        'assets/scrolling/salesforce-grayscale.webp',
        'assets/scrolling/skyscanner-grayscale.webp',
        'assets/scrolling/sony-music-monochrome.webp',
        'assets/scrolling/salesforce-grayscale.webp',
        'assets/scrolling/skyscanner-grayscale.webp',
        'assets/scrolling/sony-music-monochrome.webp',
        'assets/scrolling/salesforce-grayscale.webp',
        'assets/scrolling/skyscanner-grayscale.webp',
        'assets/scrolling/sony-music-monochrome.webp'
    ]
    return (
        <div className='px-10 overflow-hidden w-full flex flex-col gap-10 items-center justify-center'>
            <h2 className="text-3xl  font-sans break-words antialiased font-bold">
                Trusted by well known companies</h2>
            <ScrollText images={images} />

        </div>
    )
}

export default Partner