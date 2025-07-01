
import Hero from "@/components/index page/Hero";
import Stats from "@/components/index page/Stats";
import Team from "@/components/index page/Team";
import Header from "@/components/index page/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Stats />
      <Team />
    </div>
  );
};

export default Index;
