import menuItems from "@/data/menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-wrap">
      <div className="wrapper-footer w-full md:w-11/12 xl:w-7/12 mx-auto  pt-20">
        <div className="logo mb-14">
          <img className="w-20" src="images/logo4.png" alt="" />
        </div>
        <div className="top pb-16 flex flex-wrap">
          <div className="w-full mb-10 sm:mb-0 sm:w-5/12 ">
            <div className="addres mb-4 sm:mb-10">
              <p className="text-white">
                123 Fake Street Springfield, <br />
                IL 62701 United States
              </p>
            </div>
            <div className="contact">
              <a className="text-white block" href="tel:+44 20 1234 5678">
                +44 20 1234 5678
              </a>
              <a
                className="text-white block"
                href="mailto:contact@coaching.com"
              >
                contact@coaching.com
              </a>
            </div>
          </div>
          <div className=" w-full mb-10 sm:mb-0 sm:w-3/12">
            <h6 className="text-primary uppercase pb-5">Menu</h6>
            <ul>
              {menuItems.map((menu) => (
                <li key={menu.id} className="mb-2">
                  <a className="text-white" href={menu.link}>
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-4/12 social">
            <h6 className="text-primary pb-5 uppercase">Connect with Us</h6>
            <ul className="flex space-x-6">
              <li>
                <a
                  target="_blank"
                  className="text-white"
                  href="https://web.facebook.com/"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a target="_blank" className="text-white" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a target="_blank" className="text-white" href="">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom flex w-full items-center py-10">
          <div className="left">
            <p className="text-white text-xs">
              © 2024 Coach · All rights reserved
            </p>
          </div>
          <div className="right ml-auto flex">
            <ul className=" flex">
              <li className="mr-5">
                <Link href="/ln" className="text-white text-xs">
                  Legal notice
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white text-xs">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
