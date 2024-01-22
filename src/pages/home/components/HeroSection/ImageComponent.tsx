
interface ImageSchema {
    img: string;
    title: string; 
    className: string; 
  }


  interface ImageComponentSchema{
    index: number,
    image: ImageSchema
  }
export const ImageComponent = ({index , image} :ImageComponentSchema)=>{
    return (<div key={index} className='flex flex-col items-center p-2 relative hover:scale-110 transition-all duration-300 cursor-pointer' id={`Image-${index}`}>
    <img src={image.img} alt={image.title} className='mx-auto mr-4 rounded-lg' />
    <h5 className={`absolute top-6  md:text-xl text-sm font-bold ${image.className}`} id={`title-${index}`}>{image.title}</h5>
</div>)
}