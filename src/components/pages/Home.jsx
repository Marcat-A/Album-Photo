import React from "react";
import AlbumOfTheWeek from "../AlbumOfTheWeek";
import GreatestPhoto from "../GreatestPhoto";
import HeroSection from "../HeroSection";
import QuoteSection from "../QuoteSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AlbumOfTheWeek />
      <QuoteSection />
      <GreatestPhoto />
    </>
  );
}

export default Home;
