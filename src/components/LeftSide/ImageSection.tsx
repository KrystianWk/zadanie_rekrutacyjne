import React, { useRef, useState } from "react";
import { DeleteIcon, MoveIcon } from "../icons";
import useMoveAndScale from "../../hooks/useMoveAndScale";
import { usePosterStore } from "../../store/posterStore";
import { ImageSectionProps } from "../../types/PosterTypes";

const ImageSection: React.FC<ImageSectionProps> = ({ id, src, wrapperRef }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [showEditBar, setShowEditBar] = useState(false);
  const { removeImage, setSelectedImageId } = usePosterStore();

  const { containerRef, dragHandleRef, scaleHandleRef } = useMoveAndScale({
    wrapperRef,
    editableRef: imageRef,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageId(id);
    setShowEditBar(true);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeImage(id);
    setShowEditBar(false);
    setSelectedImageId(null);
  };

  return (
    <div
      ref={containerRef}
      className={`absolute top-[250px] left-[200px] w-[200px] h-[200px] border-[2px] ${
        showEditBar ? "border-Primary" : "border-transparent"
      }`}
      onClick={handleClick}>
      <button
        className={`absolute -top-3 -right-3 bg-white p-1 rounded-full ${
          showEditBar ? "visible" : "invisible"
        }`}
        onClick={handleDelete}>
        <DeleteIcon width={16} height={16} color="red" />
      </button>

      <div
        ref={dragHandleRef}
        className={`absolute top-[-20px] left-[-20px] bg-white p-2 rounded-full cursor-grab shadow-md ${
          showEditBar ? "visible" : "invisible"
        }`}>
        <MoveIcon width={24} height={24} color="purple" />
      </div>

      <div
        ref={scaleHandleRef}
        className={`h-[24px] w-[24px] bg-Primary border-[4px] border-white rounded-full absolute bottom-[-13px] right-[-13px] cursor-nwse-resize ${
          showEditBar ? "visible" : "invisible"
        }`}></div>

      <img
        ref={imageRef}
        src={src}
        alt="Uploaded"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ImageSection;
