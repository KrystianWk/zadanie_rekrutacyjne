import React from "react";
import { OptionButtonProps } from "../../types/PosterTypes";

const OptionButton = ({ icon, text, onClick }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-[365px] h-[256px] bg-white97 rounded-[10px] p-[12px] flex flex-col justify-center items-center hover:bg-Black25 transition-[0.4s] hover:cursor-pointer focus:border-[4px] focus:border-Primary50">
      <div className="h-[128px] w-[128px] flex justify-center items-center">
        {icon}
      </div>
      <p className="text-[18px] mt-[25px] text-Black100">{text}</p>
    </button>
  );
};

export default OptionButton;
