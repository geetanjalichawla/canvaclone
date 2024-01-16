import HeroSection from "./components/HeroSection/hero"
import LeftRightComponent from "./components/imageAndDescription/LeftRightSection"
import Footer from "./components/layout/footer/foooter"
import NavBar from "./components/layout/header/navbar"
import Partner from "./components/partnerSection/partner"

function Page() {
  return (
    <div className="w-full space-y-4 md:space-y-16 ">
    <NavBar/>
    <HeroSection/>
    <Partner/>
    <LeftRightComponent
        title="Create with AI"
        para="Redefine the way you create with Magic Studio, our suite of AI-powered tools. Generate copy in your brand voice with Magic Write, or transform your photos with Magic Edit."
        button={<button className="bg-gray-100 text-black px-4 py-2 font-semibold">Discover now</button>}
        photo="assets/ai.webp"
      />    
      <LeftRightComponent
      title="Design with others"
      para="Invite friends and family to design with you, or set your whole team up to work together. Our collaboration features let you comment and work in real-time on Presentations, Whiteboards, Docs, Videos, or that birthday party planning."
      button={<button className="bg-gray-100 text-black px-4 py-2 font-semibold">Start designing</button>}
      photo="assets/with-other.webp"
      reversed
    /> 
      <LeftRightComponent
      title="Design and print in one place"
      para="Turn your memories into photo albums, your designs into T-shirts, and your branding into business cards, flyers or invites. Get all your printing done right here with free delivery to your doorstep."
      button={<button className="bg-gray-100 text-black px-4 py-2 font-semibold">Print your creation</button>}
      photo="assets/print.webp"
    /> 
    <Footer/>
    </div>

  )
}

export default Page