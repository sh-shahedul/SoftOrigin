import CoreValues from '../../Components/CoreValues/CoreValues';
import AboutCta from '../../Components/Cta/AboutCta';
import GrowthJourney from '../../Components/GrowthJourney/GrowthJourney';
import HeroAbout from '../../Components/HeroAbout/HeroAbout';
import Milestones from '../../Components/Milestones/Milestones';
import Mission from '../../Components/Mission/Mission';
import OurStory from '../../Components/OurStory/OurStory';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

const About = () => {
    return (
        <>
            <HeroAbout />
          
            <OurStory />
            <Mission />
            <CoreValues />
            <Milestones></Milestones>
            <GrowthJourney></GrowthJourney>
            <WhyChooseUs></WhyChooseUs>
            <AboutCta></AboutCta>
        </>
    );
};

export default About;
