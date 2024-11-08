import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },

  {
    id: 4,
    name: "Contact",
    link: "/#",
  },
];

function Footer() {
  return (
    <div
      className="bg-[url('/images/f1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full"
    >
      <div className="bg-black/60 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className=" py-8 px-4">
            <a className="font-semibold text-2xl md:text-3xl font-pacifiko text-light">
              CoffeeLover{" "}
            </a>

            <p className="pt-4 text-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              tempore ea, illo cumque corporis expedita nulla numquam{" "}
            </p>

            <a
              className="inline-block border-2 text-white font-poppins font-semibold bg-red-600 py-2 px-4 mt-5 text-sm rounded-full"
              href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/"
            >
              Follow us
            </a>
          </div>

          <div className="col-span-2 grid grid-cols-2 md:pl-10 sm:grid-cols-3">
            <div className="py-8 px-4">
              <h1 className="text-xl  font-semibold text-white">
                Important Links
              </h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block text-light hover:scale-110 transition duration-500"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="py-8 px-4">
              <h1 className="text-xl  font-semibold text-white">Quick Links</h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block text-light hover:scale-110 transition duration-500"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl  font-semibold text-white">Adress</h1>

              <div className="mt-4 space-y-4 text-light">
                <p>Hyderabad Pakistan</p>
                <p>+92 1234567890</p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.facebook.com/profile.php?id=61552506270420">
                  <FaFacebook className="text-3xl duration-300 text-light hover:scale-110 "></FaFacebook>
                </a>

                <a href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/">
                  <FaLinkedin className="text-3xl duration-300 text-light hover:scale-110 "></FaLinkedin>
                </a>

                <a href="https://www.instagram.com/farheen11099/">
                  <FaInstagram className="text-3xl duration-300 text-light hover:scale-110 "></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      { /* Rights Reserved */ }
             <p className="text-lg mt-5 text-center  text-white font-semibold"> &copy; {new Date().getFullYear()} Syeda Farheen Zehra | All Rights Reserved</p>
      </div>

    </div>
  );
}

export default Footer;
