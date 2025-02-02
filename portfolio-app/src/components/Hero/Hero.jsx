import ProfilePic from "/src/assets/Images/img.jpg";
import Resume from "/src/assets/files/Anurag-Pardeshi-Resume.pdf"
import "./Hero.css";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume; // Path to your resume file in the public folder
    link.download = "Anurag-Pardeshi-Resume.pdf"; // Name of the file after download
    link.click();
  };
  const handleClick = () => {
    const message = "Hello, I need assistance!";
    const phoneNumber = "+918435304050"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message); 
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank'); // Opens the WhatsApp chat
  };
  return (
    <>
    <div className="hero-div-resp px-2">
      <div
        className="flex justify-center items-center flex-wrap"
      >
        <div className="hero flex flex-wrap justify-center hero-div-resp2 items-center w-100 px-6">
          <div className="max-w-2xl max-width-resp">
            <p className="text-lg mb-2 hey font-normal text-gray-500 dark:text-gray-400">
              Hey! I'm Anurag Pardeshi,
            </p>
            <h1 className="mb-4 font-h font-extrabold leading-none tracking-tight text-gray-900 dark:text-white ">
              <span className="text-blue-600 dark:text-blue-500">
                Full Stack{" "}
              </span>{" "}
              Developer
            </h1>

            <p className="mb-6 text-lg mx-auto font-c font-normal text-gray-500 dark:text-gray-400">
              I am a Full Stack Developer based in Indore. Skilled in the MERN
              stack, I build dynamic, user-friendly web applications and strive
              to deliver innovative, clean, and efficient solutions.
            </p>
            <div className="flex justify-start items-start button flex-wrap" style={{ gap: "1rem" }}>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-x-8"
                onClick={handleDownload}
              >
                Download Resume
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
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-x-8"
              onClick={handleClick}
              >
                Whatsapp me
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
          </div>
          <div className="flex justify-center items-center">
          <img
            className="rounded-full image-description"
            src={ProfilePic}
            alt="image description"
          />
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
