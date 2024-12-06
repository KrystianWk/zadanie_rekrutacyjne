import React, { useRef, useState } from "react";
import Editor from "./components/Rightside/Editor";
import Poster from "./components/LeftSide/Poster";
import Restart from "./components/Rightside/Restart";
import { usePosterStore } from "./store/posterStore";

const App = () => {
  const posterRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const reset = usePosterStore((state) => state.reset);

  return (
    <>
      {isPopupOpen && <Restart closePopup={closePopup} reset={reset} />}
      <div className="font-poppins flex justify-center align-middle gap-8 m-8">
        <div className="w-[759px] h-[948px]">
          <Poster posterRef={posterRef} />
        </div>
        <div className="w-[759px] h-[948px]">
          <Editor posterRef={posterRef} openPopup={openPopup} />
        </div>
      </div>
    </>
  );
};

export default App;
