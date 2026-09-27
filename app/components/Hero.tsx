export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] px-4 py-12 sm:px-6 sm:py-14 md:flex md:items-center md:px-16 md:py-0"
    >
      {/* Hero Content */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        <p className="hero-welcome mb-4 text-xs uppercase tracking-[3px] text-[#7F9477] sm:mb-5 sm:text-sm sm:tracking-[4px]">
          Welcome
        </p>

        <h1 className="hero-name text-3xl font-serif leading-tight text-[#29262A] sm:text-4xl md:text-5xl">
          Hi, I&apos;m Sidra Tul Muntaha
        </h1>

        <h2 className="hero-title mt-3 text-xl text-[#E8A0B8] sm:mt-4 sm:text-2xl md:text-3xl">
          Web Developer
        </h2>

        <p className="hero-description mx-auto mt-5 max-w-xl text-sm leading-7 text-[#29262A]/70 sm:mt-6 sm:text-base sm:leading-8 md:mx-0 md:text-lg">
          I build clean, modern, and responsive web experiences with a focus on
functional development, beautiful design, and great user experiences.
        </p>

        {/* Button */}
        <a
          href="#projects"
          className="hero-button mt-7 inline-block rounded-full bg-[#E8A0B8] px-6 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7F9477] sm:mt-8 sm:px-7 sm:text-base"
        >
          Explore My Work
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
        <img
          src="/images/hero.png"
          alt="Creative workspace illustration"
          className="w-full max-w-[320px] object-contain sm:max-w-[380px] md:max-w-xl"
        />
      </div>
    </section>
  );
}