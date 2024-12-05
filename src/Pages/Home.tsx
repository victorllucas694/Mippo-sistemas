import ResponsiveAppBar from "../components/Global/ResponsiveAppBar/Index";
import SmartFooter from "../components/Global/SmartFooter";
import AboutInfo from "../components/Home/AboutInfo/Index";
import Contact from "../components/Home/Contact";
import HeaderSection from "../components/Home/HeaderSection/Index";
import Services from "../components/Home/Services";

function Home() {
    return (
        <>
            <ResponsiveAppBar />
            <HeaderSection />
            <AboutInfo />
            <Services />
            <Contact />
            <SmartFooter />
        </>
    )
}

export default Home;