
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-white text-4xl font-bold tracking-wide">
              pbsn
            </div>
          </div>
          
          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-300 text-lg font-light tracking-wide">
              Welcome to
            </p>
            <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight">
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
