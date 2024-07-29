import React from "react";

function LegalLayout({title,children}) {
  return (
    <div className="wrapper-page-legal pt-56">
      <div className="w-6/12 mx-auto">
        <div className="top pb-14">
          <h1 className="text-primary uppercase font-bold text-4xl">
            {title}
          </h1>
        </div>
        <div className="text text-secondary text-md">
            {children}
        </div>
      </div>
    </div>
  );
}

export default LegalLayout;
