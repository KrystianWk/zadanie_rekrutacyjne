import { useState } from "react";
import { ResetIcon, Logo } from "../icons/index";
import ResetModal from "./ResetModal";

const RightHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Logo height={64} width={64} color="#7209B7" />
        <h1 className="text-Black75 text-[32px] h-[48px]">CanvasEditor</h1>
      </div>
      <button
        className="flex h-[32px] w-[90px] text-[#CB0000] border-b-[1px] border-[#CB0000] gap-[8px] items-center"
        onClick={openPopup}>
        <p className="text-[18px]">Reset</p>
        <ResetIcon height={32} width={32} color="#CB0000" />
      </button>

      {isPopupOpen && <ResetModal closePopup={closePopup} />}
    </div>
  );
};

export default RightHeader;
