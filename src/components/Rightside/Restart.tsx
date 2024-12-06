import React from "react";
import { RestartBoxProps } from "../../types/PosterTypes";

const Restart = ({ closePopup, reset }: RestartBoxProps) => {
  const handleConfirm = () => {
    reset();
    closePopup();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure you want to reset?</h2>
        <button onClick={handleConfirm}>Yes</button>
        <button onClick={closePopup}>No</button>
      </div>
    </div>
  );
};

export default Restart;
