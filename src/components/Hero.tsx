import pbsnlogo from '../assets/pbsn-logo.png';
import bg from '../assets/bg.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center mx-5 mt-7 mb-3 rounded-t-[5rem] rounded-b-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-20 pl-20">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-8">
            <img src={pbsnlogo} alt="PBSN Logo" className="h-16 w-auto" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-200 text-2xl font-light tracking-wide">
              Welcome to
            </p>
            <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight">
              The<br />
              Pre-Business<br />
              Students'<br />
              Network
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
