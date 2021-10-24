import React, { useEffect } from "react";

import "./page.scss";
import aos from "aos";
import "aos/dist/aos.css";

export const Page = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="row">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="3000"
        className="box"
      >
        test
      </div>
      <div
        data-aos="fade"
        data-aos-anchor-placement="top-center"
        data-aos-duration="3000"
        className="box"
      >
        test
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-duration="3000"
        className="box"
      >
        test
      </div>
    </div>
  );
};

export default Page;
