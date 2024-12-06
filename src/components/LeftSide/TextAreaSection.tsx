import React, { useRef, useState, useEffect } from "react";
import { DeleteIcon, MoveIcon } from "../icons";
import useMoveAndScale from "../../hooks/useMoveAndScale";
import { TextAreaSectionProps } from "../../types/PosterTypes";

const TextAreaSection: React.FC<TextAreaSectionProps> = ({
  wrapperRef,
  setShowText,
}) => {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>("black");
  const [showEditBar, setShowEditBar] = useState(false);
  const [isTextEmpty, setIsTextEmpty] = useState(true);

  const { containerRef, dragHandleRef, scaleHandleRef } = useMoveAndScale({
    wrapperRef,
    editableRef: textAreaRef,
  });

  useEffect(() => {
    const handleInput = () => {
      if (textAreaRef.current) {
        const textContent = textAreaRef.current.textContent?.trim();
        setIsTextEmpty(!textContent || textContent === "Type your text here");
      }
    };

    if (textAreaRef.current) {
      textAreaRef.current.addEventListener("input", handleInput);
    }

    return () => {
      if (textAreaRef.current) {
        textAreaRef.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowEditBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  const handleDelete = () => {
    setShowText(false);
  };

  return (
    <div
      ref={containerRef}
      className={`absolute top-[450px] left-[200px] w-[350px] h-[120px] border-[2px] px-[24px] py-[12px] gap-[10px] ${
        showEditBar ? "border-Primary" : "border-transparent"
      }`}
      onClick={() => setShowEditBar(true)}>
      <button
        className={`absolute -top-3 -right-3 bg-white p-1 rounded-full ${
          showEditBar ? "visible" : "invisible"
        }`}
        onClick={handleDelete}>
        <DeleteIcon width={18} height={18} color="red" />
      </button>

      <div
        ref={dragHandleRef}
        className={`absolute top-[-20px] left-[-20px] bg-white p-2 rounded-full cursor-grab shadow-md ${
          showEditBar ? "visible" : "invisible"
        }`}>
        <MoveIcon width={32} height={32} color="rgba(114, 9, 183, 1)" />
      </div>

      <div
        ref={scaleHandleRef}
        className={`h-[24px] w-[24px] bg-Primary border-[4px] border-white rounded-full absolute bottom-[-13px] right-[-13px] cursor-nwse-resize ${
          showEditBar ? "visible" : "invisible"
        }`}></div>

      <div
        ref={textAreaRef}
        contentEditable
        suppressContentEditableWarning
        className={`w-full h-full flex items-center justify-center text-center p-2 outline-none overflow-hidden ${
          isTextEmpty ? "opacity-50 black50" : "opacity-100 text-Black100"
        }`}
        style={{
          color,
        }}>
        Type your text here
      </div>

      <div
        className={`absolute -bottom-8 left-1/4 transform -translate-x-1/2 flex flex-row gap-1 ${
          showEditBar ? "visible" : "invisible"
        }`}>
        {["black", "white", "red", "blue", "green"].map((colorOption) => (
          <button
            key={colorOption}
            className={`w-6 h-6 rounded-full border ${
              color === colorOption ? "border-purple-500" : "border-gray-300"
            }`}
            style={{ backgroundColor: colorOption }}
            onClick={() => setColor(colorOption)}></button>
        ))}
      </div>
    </div>
  );
};

export default TextAreaSection;
