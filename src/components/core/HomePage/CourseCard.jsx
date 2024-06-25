import React from "react";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white/15  shadow-[6px_-3px_13px_2px_#5a67d8]"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-white"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-white/85">{cardData?.description}</div>
      </div>
    </div>
  );
};

export default CourseCard;
