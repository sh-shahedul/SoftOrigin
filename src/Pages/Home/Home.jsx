import About from '../../Components/About/About';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import UseTech from '../../Components/UseTech/UseTech';
import FeatureProjects from '../../Components/FeatureProject/FeatureProjects';
import Management from '../../Components/Management/Management';


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <FeatureProjects></FeatureProjects>
            <Management></Management>
            <UseTech></UseTech>

        </div>
    );
};

export default Home;
