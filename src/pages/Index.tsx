
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Header from "@/components/Header";

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
