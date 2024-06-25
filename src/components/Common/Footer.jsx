import React from "react";
import { Link } from "react-router-dom";
import "./rotate.css"
// Images
import Logo from "../../assets/Logo/Logo-Small-Dark.png";


const BottomFooter = ["Política de privaciadd", "Política de cookies", "Términos y condiciones"];

const Footer = () => {
  return (


    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">



        {/* Section 1 */}
        <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">



          {/* <img src={Logo} alt="" className="object-contain" /> */}
          <div className="flex  space-x-2 ">
            <img src={Logo} alt="Logo" width={40} height={5} loading="lazy" />
            <h1 className="text-white font-extrabold text-xl py-1">Flamingo</h1>
          </div>
        </div>
      </div>



      {/* Section 1 */}
      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">


            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>


          <div className="text-center">🦩🦩🦩🦩🦩🦩🦩🦩🦩🦩🦩🦩🦩🦩🦩 Flamingo</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
