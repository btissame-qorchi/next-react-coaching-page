// _app.js

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasePathProvider } from "../context/BasePathContext";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

//Import font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(
  faFacebook,
  faTwitter,
  faLinkedin,
  faPhone,
  faArrowRight,
  faInstagram
);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <BasePathProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </BasePathProvider>
    </div>
  );
}

export default MyApp;
