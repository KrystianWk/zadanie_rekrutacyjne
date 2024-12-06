import React, { useRef, useEffect } from "react";
import { AlertIcon, CloseIcon } from "../icons";
import Button from "./Button";
import { usePosterStore } from "../../store/posterStore";
import { ResetModalProps } from "../../types/PosterTypes";

const ResetModal: React.FC<ResetModalProps> = ({ closePopup }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  const reset = usePosterStore((state) => state.reset);

  const handleClickOutside = (e: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div
        ref={boxRef}
        className="bg-white p-5 rounded-lg shadow-lg flex justify-evenly align-middle flex-col h-[584px] w-[643px]  items-center absolute">
        <div className="flex flex-col justify-center items-center w-[387px]">
          <div className="flex justify-center items-center">
            <AlertIcon height={290} width={290} color={"#CB0000"} />
          </div>
          <div className="gap-[8px]">
            <h1 className="text-center text-[32px] font-bold text-Black100">
              WARNING
            </h1>
            <p className="text-center mt-2 font-medium text-Black75">
              You’re about to reset the whole process. Are you sure you want to
              do it?
            </p>
          </div>
        </div>
        <div className="w-[387px] flex justify-center gap-8">
          <button onClick={closePopup} className="text-[18px]">
            Close
          </button>
          <Button
            value={"Confirm"}
            whenDisabled={false}
            functionOnClick={() => {
              closePopup();
              reset();
            }}
          />
        </div>
        <button className="absolute top-6 right-6" onClick={closePopup}>
          <CloseIcon height={24} width={24} color={"#000000"} />
        </button>
      </div>
    </div>
  );
};

export default ResetModal;
