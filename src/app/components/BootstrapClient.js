"use client";

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../content/scripts/script.js");

    // const script = document.createElement("script");

    // script.src = "../content/scripts/script.js";
    // script.async = true;

    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  return null;
}

export default BootstrapClient;
