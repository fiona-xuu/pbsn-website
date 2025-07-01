import statsdecor from '@/assets/statsdecor.png';

const Stats = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-full mx-10 lg:mx-20 px-2 lg:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Stats Card */}
          <div className="relative flex flex-col lg:flex-row gap-4">
            {/* Main Rectangle */}
            <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden flex-1">
              <div className="relative z-10 pt-36">
                <div className="text-5xl font-bold mb-1">650+</div>
                <div className="text-5xl font-semibold mb-3 tracking-wide">Members</div>
                <div className="text-gray-300 text-sm">
                  Western University's<br />
                  Largest Business Club
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-700 rounded-full opacity-50"></div>
              <div className="absolute -right-8 top-12 w-16 h-16 bg-gray-600 rounded-full opacity-30"></div>
            </div>
            {/* Two Smaller Rectangles */}
            <div className="relative flex flex-row gap-4 justify-center">
              <div className="bg-gray-800 rounded-[3rem] p-6 text-white min-w-[150px] shadow-md flex items-center justify-center text-xl font-semibold">
              </div>
              <div className="bg-gray-700 rounded-[3rem] p-6 text-white min-w-[80px] shadow-md flex items-center justify-center text-xl font-semibold">
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div
            className="space-y-8 relative pr-4"
            style={{
              backgroundImage: `url(${statsdecor})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              backgroundSize: 'auto',
            }}
          >
            <div className="relative">
              <div className="top-0 w-px h-32 bg-gradient-to-b from-gray-300 to-transparent"></div>
              <div className="flex flex-col items-end pt-16">
                <h2 className="text-5xl font-bold text-gray-900 leading-wide tracking-wide text-right">
                  We're your<br />
                  student<br />
                  network.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
