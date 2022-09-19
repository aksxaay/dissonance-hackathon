import React from "react";
// import BasicExample from "./Components/BasicExample";
import CardHero from "./Components/CardHero";
import ContentSection from "./Components/ContentSection";
import FooterSection from "./Components/FooterSection";
import ModalSection from "./Components/ModalSection"
import CarouselSection from "./Components/CarouselSection";

const App = () => {
  return (
    <>
      {/* <BasicExample></BasicExample> */}
      <CardHero></CardHero>
      <ContentSection></ContentSection>
      <CarouselSection></CarouselSection>
      <ModalSection></ModalSection>
      <FooterSection />
      {/* <div>App</div> */}
    </>
  );
};

export default App;
