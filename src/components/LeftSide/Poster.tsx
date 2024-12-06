import React from "react";
import poster_starter from "../../assets/images/poster_starter.png";
import TextAreaSection from "./TextAreaSection";
import ImageSection from "./ImageSection";
import { usePosterStore } from "../../store/posterStore";
import { PosterProps } from "../../types/PosterTypes";

const Poster: React.FC<PosterProps> = ({ posterRef }) => {
  const { file, images, texts, isBackgroundGray, removeText } =
    usePosterStore();

  return (
    <div
      className={`relative w-[759px] h-[948px] shadow-md ${
        isBackgroundGray ? "bg-Black50" : ""
      }`}
      ref={posterRef}>
      {file ? (
        <img
          src={file}
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
      ) : isBackgroundGray ? null : (
        <img
          src={poster_starter}
          alt="Default Poster"
          className="absolute w-full h-full object-cover"
        />
      )}

      {images.map((image) => (
        <ImageSection
          key={image.id}
          id={image.id}
          src={image.src}
          wrapperRef={posterRef}
        />
      ))}

      {texts.map((text) => (
        <TextAreaSection
          key={text.id}
          id={text.id}
          wrapperRef={posterRef}
          setShowText={() => removeText(text.id)}
          initialContent={text.content}
          initialColor={text.color}
          text={""}
          color={""}
        />
      ))}
    </div>
  );
};

export default Poster;
