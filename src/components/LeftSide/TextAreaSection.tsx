import React, { useRef, useState, useEffect } from "react";
import { DeleteIcon, MoveIcon } from "../icons";
import useMoveAndScale from "../../hooks/useMoveAndScale";
import { TextAreaSectionProps } from "../../types/PosterTypes";

const TextAreaSection: React.FC<TextAreaSectionProps> = ({
  wrapperRef,
  setShowText,
  initialContent = "Type your text here",
  initialColor = "black",
}) => {
  const textAreaRef = useRef<HTMLDivElement>(null);

  const [color, setColor] = useState<string>(initialColor);
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

  return (
    <div
      ref={containerRef}
      className={`absolute top-[250px] left-[200px] w-[350px] h-[120px] border-[2px] px-[24px] py-[12px] gap-[10px] ${
        showEditBar ? "border-Primary" : "border-transparent"
      }`}
      onClick={() => setShowEditBar(true)}>
      <button
        className={`absolute -top-3 -right-3 bg-white p-1 rounded-full ${
          showEditBar ? "visible" : "invisible"
        }`}
        onClick={() => setShowText(false)}>
        <DeleteIcon width={16} height={16} color="red" />
      </button>

      <div
        ref={dragHandleRef}
        className={`absolute top-[-20px] left-[-20px] bg-white p-2 rounded-full cursor-grab shadow-md ${
          showEditBar ? "visible" : "invisible"
        }`}>
        <MoveIcon width={24} height={24} color="rgba(114, 9, 183, 1)" />
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
        className={`text-[32px] font-bold leading-[48px] w-[302px] h-[96px] flex items-center justify-center text-center p-2 outline-none overflow-hidden ${
          isTextEmpty ? "opacity-25" : "opacity-100 text-Black100"
        }`}
        style={{
          color,
        }}>
        {initialContent}
      </div>

      <div
        className={`w-[136px] h-[24px] flex flex-row gap-[6px] justify-center absolute bottom-[-32px] left-0 ${
          showEditBar ? "visible" : "invisible"
        }`}>
        {["black", "white", "red", "blue", "#00DA16"].map((colorOption) => (
          <button
            key={colorOption}
            className={`relative w-6 h-6 rounded-full cursor-pointer ${
              color === colorOption
                ? "after:content-[''] after:absolute after:inset-[-4px] after:rounded-full after:border-2 after:border-white"
                : ""
            }`}
            style={{
              backgroundColor: colorOption,
            }}
            onClick={() => setColor(colorOption)}></button>
        ))}
      </div>
    </div>
  );
};

export default TextAreaSection;
