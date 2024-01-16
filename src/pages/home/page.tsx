import HeroSection from "./components/HeroSection/hero"
import NavBar from "./components/layout/header/navbar"
import Partner from "./components/partnerSection/patner"

function Page() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Partner/>
    <div className="h-[2000vh]">

    </div>
    </>

  )
}

export default Page