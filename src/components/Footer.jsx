import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 mt-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold font-unpin">Fatin Arnob</h2>
          <p className="text-neutral-400 mt-2">
            Frontend Developer Building Modern Web Experiences.
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6 trail-text cursor-none">

          <a
            href="https://github.com/Fatinur"
            target="_blank"
            className="hover:scale-130 transition trail-text cursor-none"
          >
            <FaGithub className="text-2xl"/>
          </a>

                <a
                href="https://www.linkedin.com/in/fatinur-islam-arnob-aaa980369"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-130 transition trail-text cursor-none"
                >
                <FaLinkedin className="text-2xl" />
                </a>
                <a
                href="mailto:fatinarnob05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-130 transition trail-text cursor-none"
                >
                <SiGmail className="text-2xl" />
                </a>

            <a
                href="https://www.linkedin.com/in/fatinur-islam-arnob-aaa980369"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-130 transition trail-text cursor-none"
                >
                <BsFacebook className="text-2xl" />
                </a>
           
            <a
                href="tel:+8801843791717"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-130 transition trail-text cursor-none"
                >
                <FaPhone className="text-2xl" />
                </a>


       
                

         

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-neutral-500 pb-6">
        © {new Date().getFullYear()} Fatin_Arnob. Built with React & Tailwind.
      </div>
    </footer>
  );
}