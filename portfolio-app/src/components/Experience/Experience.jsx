import TEN from "/src/assets/Images/TEN.webp";
import EazyByts from "/src/assets/Images/EazyByts.webp"

export default function Experience() {
  return (
    <>
      <div
        className="pt-6 px-8"
        style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}
      >
        <h1 className="pt-6 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Experience<span className="text-blue-600 dark:text-blue-500">.</span>
        </h1>

        <div className="exp-icon flex pt-4 items-center mb-4 flex-wrap justify-start gap-2">

          <div>
            <img className="py-2" src={TEN} alt="" style={{width: "5rem", borderRadius: ".5rem", marginRight: "1rem"}}/>
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-white">
              The Entrepreneurship Network
            </h2>
            <p className="text-lg text-gray-500">
              MERN stack Developer Intern &bull; October 2024 - Present*
            </p>
          </div>
        </div>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>

        <a
          href="https://www.entrepreneurshipnetwork.net/"
          className="mb-6 inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
        >
          The Entrepreneurship Network
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <div className="exp-icon flex items-center mb-4 flex-wrap justify-start gap-2">
          <div>
            <img src={EazyByts} alt="" style={{width: "5rem", borderRadius: ".5rem", marginRight: "1rem"}} />
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-white">
              EazyByts Infotech
            </h2>
            <p className="text-lg text-gray-500">
              Full stack Developer Intern &bull; April 2024 - May 2024
            </p>
          </div>
        </div>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <a
          href="https://eazybyts.com/"
          className="mb-6 inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
        >
          EazyByts Infotech
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
