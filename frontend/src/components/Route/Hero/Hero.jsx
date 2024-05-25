import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://7linternational.com/wp-content/uploads/2022/06/mockup-tablet-demo-1920x600-1.jpg.webp)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
      <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          best shop <br /> to  buy and sell
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Online Sales in Tunisia with Eshopo: Find the Best Offers <br />Take advantage of exceptional opportunities with Eshopo and<br /> discover the best prices on the market.{" "}
          <br />
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
