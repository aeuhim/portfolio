export default function ProjectSection() {
  return (
    <section className="py-5">
      <div className="container max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col xl:flex-row justify-between mb-28 md:mb-20">
          <div className="mb-10 xl:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Projects
            </h1>
            <p className="font-normal text-gray-500 text-xs md:text-base">
              I have brought here the fruits of my creative journey.
            </p>
          </div>
          <div className="space-y-24">
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                01
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5" />
              <div>
                <div className="flex flex-col sm:flex-row mb-5">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl sm:mr-auto">
                    Go Farm
                  </h1>
                  <a href="https://gofarm.today" target="blank_" className="flex flex-row sm:self-center group">
                    <img src="../link.svg" alt="Link Icon" className="mr-1 contrast-0 group-hover:contrast-50" />
                    <p className="font-semibold text-gray-400 group-hover:text-gray-500">
                      Check it out
                    </p>
                  </a>
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base max-w-screen-sm xl:w-96">
                  A web app that stands as a testament to my proficiency in an agile approach and microservices architecture. Through the synergy of ReactJS, NextJS, and FastAPI, I artfully constructed a dynamic platform seamlessly united with AWS Lambda and Vercel, resulting in unparalleled performance. Empowered by the capabilities of TensorFlow, Keras, and OpenCV, the app astutely calculates field dimensions, optimizes resource allocation, imparts insightful agricultural wisdom, and forecasts soil fertility. This project vividly illustrates both my technical acumen and steadfast dedication to engineering transformative, adaptive solutions.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                02
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5" />
              <div>
                <div className="flex flex-col sm:flex-row mb-5">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl sm:mr-auto">
                    Overseer
                  </h1>
                  <a href="https://overseer.gofarm.today" target="blank_" className="flex flex-row sm:self-center group">
                    <img src="../link.svg" alt="Link Icon" className="mr-1 contrast-0 group-hover:contrast-50" />
                    <p className="font-semibold text-gray-400 group-hover:text-gray-500">
                      Check it out
                    </p>
                  </a>
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base max-w-screen-sm xl:w-96">
                  An agriculture-centered web app, utilizing a monolithic architecture, demonstrates my proficiency in Django, TensorFlow, Keras, and OpenCV. Through a comprehensive approach, it provides real-time insights into crop health, soil conditions, pricing projections, and personalized farming advice. Hosted on AWS EC2, this advanced agricultural solution redefines resource utilization and yield optimization. This initiative highlights my commitment to excellence and a data-centric method that transforms conventional practices for improved profitability and efficiency.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                03
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5" />
              <div>
                <div className="flex flex-col sm:flex-row mb-5">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl sm:mr-auto">
                    Exam N Crypt
                  </h1>
                  <a href="https://play.google.com/store/apps/details?id=dev.aeuhim.examncrypt" target="blank_" className="flex flex-row sm:self-center group">
                    <img src="../link.svg" alt="Link Icon" className="mr-1 contrast-0 group-hover:contrast-50" />
                    <p className="font-semibold text-gray-400 group-hover:text-gray-500">
                      Check it out
                    </p>
                  </a>
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base max-w-screen-sm xl:w-96">
                  A revolutionary mobile app for teachers and students, built using Flutter, Material Design, and Firebase. This cross-platform solution redefines exam administration by enabling teachers to create, encrypt, and share exams efficiently. Notably, the encryption is designed for deferred decryption, allowing secure file transmission to students who can access the content later. With real-time delivery, robust anti-cheating measures, and the integration of a large language model for quiz creation, it exemplifies the future of digital assessments while highlighting my skills in cross-platform development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
