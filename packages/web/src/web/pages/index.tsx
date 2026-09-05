import { LangProvider } from "../components/site/lang-context";
import { Nav } from "../components/site/nav";
import { Hero } from "../components/site/hero";
import { Sets } from "../components/site/sets";
import { Bio } from "../components/site/bio";
import { Gallery } from "../components/site/gallery";
import { Videos } from "../components/site/videos";
import { Rider } from "../components/site/rider";
import { GearRental } from "../components/site/gear-rental";
import { Booking, Footer } from "../components/site/booking";

function Index() {
  return (
    <LangProvider>
      <div className="grain min-h-screen bg-bg text-fg">
        <Nav />
        <main>
          <Hero />
          <Sets />
          <Bio />
          <Gallery />
          <Videos />
          <Rider />
          <GearRental />
          <Booking />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default Index;
