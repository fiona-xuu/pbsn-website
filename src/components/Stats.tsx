
const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Card */}
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-6xl font-bold mb-4">650+</div>
                <div className="text-2xl font-semibold mb-2">Members</div>
                <div className="text-gray-300 text-sm">
                  Western University's<br />
                  Largest Business Club
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-700 rounded-full opacity-50"></div>
              <div className="absolute -right-8 top-12 w-16 h-16 bg-gray-600 rounded-full opacity-30"></div>
            </div>
          </div>
          
          {/* Right Side Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-8 top-0 w-px h-32 bg-gradient-to-b from-gray-300 to-transparent"></div>
              <div className="pl-8">
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  We're your<br />
                  student<br />
                  network.
                </h2>
              </div>
            </div>
            
            {/* Decorative Pattern */}
            <div className="flex justify-end">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 bg-gray-300 origin-bottom"
                      style={{
                        height: `${20 + (i * 3)}px`,
                        left: `${i * 6}px`,
                        bottom: 0,
                        transform: `rotate(${i * 4}deg)`,
                        transformOrigin: 'bottom center'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
