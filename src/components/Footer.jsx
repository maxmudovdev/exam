/* eslint-disable react/no-unescaped-entities */
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black-100 text-white">
      <main className="w-full h-full flex flex-col items-center justify-between gap-5 px-5 xl:px-10 py-10">
        <section className="w-full h-full text-white flex flex-wrap items-start justify-between lg:justify-center gap-10 lg:gap-28">
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
            <h1 className="text-base font-semibold">Need Help</h1>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>FAQ's</li>
            <li>Carrer</li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
            <h1 className="text-base font-semibold">Company</h1>
            <li>About us</li>
            <li>euphoria Blog</li>
            <li>Collaboration</li>
            <li>euphoriastan</li>
            <li>Media</li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
            <h1 className="text-base font-semibold">More Info</h1>
            <li>Term and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Sitemap</li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
            <h1 className="text-base font-semibold">Location</h1>
            <li>support@euphoria</li>
            <li>Uzbekistan</li>
          </ul>
        </section>

        <section className="w-full h-full flex items-center justify-center sm:justify-between flex-wrap border-t-[1px] border-t-white gap-5 pt-5 ">
          <h1 className="text-white text-sm font-normal">
            2024 Euphoria
          </h1>
          <div className="flex items-center justify-center gap-4 text-white">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
            <a href="https://github.com"
             target="_blank"
             rel="noopener noreferrer"
             >
            <AiFillGithub className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
