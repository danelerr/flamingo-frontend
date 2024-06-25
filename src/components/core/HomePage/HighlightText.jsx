import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className=" text-[#B34367]   bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
// bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]/
// text-[#B34367]