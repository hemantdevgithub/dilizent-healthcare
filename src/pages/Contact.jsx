import AddressSection from "../components/Contact/AddressSection/AddressSection";
import ContactUsSection from "../components/Contact/ContactUsSection/ContactUsSection";
import TopBanner from "../components/TopBanner/TopBanner";
const Contact = () => {
  return (
    <div>
      <TopBanner
        heading={"Contact Us"}
        img={"/contact/top-banner.jpg"}
        pageName={'Services'}
      ></TopBanner>
      <AddressSection />
      <ContactUsSection />
    </div>
  );
};

export default Contact;
