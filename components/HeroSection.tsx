export default function HeroSection() {
  return (
    <section className="py-5">
      <div className="container max-w-screen-xl mx-auto px-5">
        <nav className="flex items-center justify-between mb-28 md:mb-20">
          <div>
            <p className="text-xs md:text-sm">
              Made possible by
            </p>
            <img src="../next.svg" alt="Next.js Logo" className="w-32 md:w-36" />
          </div>
          <a href="../resume-eric-michael-constantino.pdf" target="blank_">
            <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium text-gray-700 text-sm rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
              Get my resume
            </button>
          </a>
        </nav>
        <div className="text-center mb-28 md:mb-20">
          <div className="flex justify-center mb-10">
            <img src="../profile-picture.jpg" alt="Profile Picture" className="w-32 md:w-40 rounded-full" />
          </div>
          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-10">
            Eric Michael Constantino
          </h6>
          <h1 className="font-normal text-gray-900 text-4xl md:text-6xl leading-none mb-10">
            Full Stack Developer
          </h1>
          <div className="flex place-content-center flex-col md:flex-row mb-10">
            <p className="font-normal text-gray-600 text-sm md:text-xl md:mr-1">
              A curious individual with a deep passion for
            </p>
            <p className="font-normal text-gray-600 text-sm md:text-xl">
              philosophy, science, and technology.
            </p>
          </div>
          <a href="mailto:ericmichaelbedanaconstantino@gmail.com" target="blank_">
            <button className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
              Contact me
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
