import React, { useRef } from "react";
import { DeleteIcon, MoveIcon } from "../icons";
import useMoveAndScale from "../../hooks/useMoveAndScale";
import { ImageProps } from "../../types/PosterTypes";

const ImageSec: React.FC<ImageProps> = ({ image, setImage, wrapperRef }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const {
    containerRef: boxContainerRef,
    dragHandleRef,
    scaleHandleRef,
  } = useMoveAndScale({
    wrapperRef,
    editableRef: imageRef,
  });

  const handleDelete = () => {
    setImage(null);
  };

  return (
    <div
      ref={boxContainerRef}
      className="absolute select-none hover:cursor-pointer top-[200px] left-[100px] w-[200px] h-[200px]">
      <div className="absolute top-[-10px] right-[-10px]">
        <button
          onClick={handleDelete}
          className="h-[24px] w-[24px] bg-white rounded-full flex items-center justify-center">
          <DeleteIcon width={16} height={16} color="red" />
        </button>
      </div>
      <div
        ref={dragHandleRef}
        className="absolute top-[-20px] left-[-20px] h-[32px] w-[32px] bg-white rounded-full flex justify-center items-center cursor-grab">
        <MoveIcon width={16} height={16} color="purple" />
      </div>
      <div
        ref={scaleHandleRef}
        className="h-[24px] w-[24px] bg-Primary border-[4px] border-white rounded-full absolute bottom-[-13px] right-[-13px] cursor-nwse-resize"
      />
      <img
        ref={imageRef}
        src={image || ""}
        alt="Uploaded"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ImageSec;
