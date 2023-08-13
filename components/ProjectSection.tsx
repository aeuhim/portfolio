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
                    GoFarm
                  </h1>
                  <a href="https://gofarm.today" target="_blank" className="flex flex-row items-center group">
                    <img src="../link.svg" alt="Link Icon" className="w-2 sm:w-3 mr-1 contrast-0 group-hover:contrast-50" />
                    <p className="font-semibold text-xs sm:text-sm text-gray-400 group-hover:text-gray-500">
                      Check it out
                    </p>
                  </a>
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base max-w-screen-sm xl:w-96">
                  An agriculture-centered web application that stands as a testament to my proficiency in an agile approach and microservices architecture. Through the synergy of ReactJS, NextJS, and FastAPI, I artfully constructed a dynamic platform seamlessly united with AWS Lambda and Vercel, resulting in unparalleled performance. Empowered by the capabilities of TensorFlow, Keras, and OpenCV, the app astutely calculates field dimensions, optimizes resource allocation, imparts insightful agricultural wisdom, and forecasts soil fertility. This project vividly illustrates both my technical acumen and steadfast dedication to engineering transformative, adaptive solutions.
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
                    SieveCV
                  </h1>
                  <a href="https://sievecv.com" target="_blank" className="flex flex-row items-center group">
                    <img src="../link.svg" alt="Link Icon" className="w-2 sm:w-3 mr-1 contrast-0 group-hover:contrast-50" />
                    <p className="font-semibold text-xs sm:text-sm text-gray-400 group-hover:text-gray-500">
                      Check it out
                    </p>
                  </a>
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base max-w-screen-sm xl:w-96">
                  An innovative web application revolutionizing document sorting and analysis, crafted to enhance the hiring process for job recruiters and HR professionals. Fueled by advanced AI algorithms, it seamlessly automates the sorting of resumes, cover letters, and curriculum vitae, swiftly identifying errors, analyzing content, and predicting candidates, thereby expediting shortlisting. Highlighting notable features like customizable criteria, candidate ranking, and automated responses, the project employs Angular, Django Rest Framework, AWS EC2, and a large language model, effectively showcasing my AI development skills while providing recruiters with an efficient, competitive edge in candidate selection.
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
                  <a href="https://play.google.com/store/apps/details?id=dev.aeuhim.examncrypt" target="_blank" className="flex flex-row items-center group">
                    <img src="../link.svg" alt="Link Icon" className="w-2 sm:w-3 mr-1 contrast-0 group-hover:contrast-50" />
                    <p className="font-semibold text-xs sm:text-sm text-gray-400 group-hover:text-gray-500">
                      Check it out
                    </p>
                  </a>
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base max-w-screen-sm xl:w-96">
                  A mobile application for educators and students, crafted with Flutter, Material Design, and Firebase. This cross-platform application reshapes the landscape of exam management, empowering teachers to efficiently compose, encrypt, and distribute exams. It seamlessly incorporates automated score calculation, grade tracking, and insightful analytics capabilities. Notably, the encryption protocol is designed for deferred decryption, ensuring secure content delivery for subsequent access by students. Enhanced by robust anti-cheating safeguards and integration of a large language model for quiz formulation, the application exemplifies the future of digital assessment, effectively underscoring my skills in cross-platform development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
