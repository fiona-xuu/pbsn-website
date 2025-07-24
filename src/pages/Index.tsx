
import Hero from "@/components/index page/Hero";
import Stats from "@/components/index page/Stats";
import Team from "@/components/index page/Team";
import Header from "@/components/index page/Header";
import Sponsors from "@/components/index page/Sponsors";
import PhotoAlbum from "@/components/index page/PhotoAlbum";
import Footer from "@/components/index page/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Stats />
      <Sponsors />
      <Team />
      <PhotoAlbum />
      <Footer />
      {/* Add more components as needed */}
    </div>
  );
};

export default Index;
