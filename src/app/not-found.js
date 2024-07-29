import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "tailwindcss/tailwind.css";

function NotFound() {
  return (
    <div className="h-full bg-black">
      <Header />
      <div className="wrapper-404 bg-black h-full">
        <div className="container mx-auto text-white flex justify-center h-full items-center">
          <div className="inner relative">
            <h1 className="font-bold text-primary">404</h1>
            <div className="text text-center absolute -bottom-14 left-0 right-0">
              <p className="mb-8 text-md font-bold text-lg">Page non trouvée</p>
              <Link className="rounded-3xl px-6 py-2" href="/">
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
