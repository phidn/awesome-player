function HeroHome() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-8 pb-12 md:pt-10 md:pb-20">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Simplify local video{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              viewing.
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              A lightweight video player for local files with easy-to-use
              interface, offline support, and useful keyboard shortcuts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHome
