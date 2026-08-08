import HeroServices from '../../Components/HeroServices/HeroServices';
import ServicesList from '../../Components/Services/Services';
import ServiceProcess from '../../Components/ServiceProcess/ServiceProcess';
import ServiceCapabilities from '../../Components/ServiceCapabilities/ServiceCapabilities';
import ServiceFaq from '../../Components/ServiceFaq/ServiceFaq';
import AboutCta from '../../Components/Cta/AboutCta';

const Services = () => (
    <>
        <HeroServices />
        <ServicesList />
        <ServiceProcess />
        <ServiceCapabilities />
        <ServiceFaq />
        <AboutCta />
    </>
);

export default Services;
