import { useRef } from "react";
import { usePosterStore } from "../../store/posterStore";
import { BackgroundIcon, ImageIcon } from "../icons";
import { TextIcon } from "../icons/TextIcon";
import OptionButton from "./Options";

const Main = () => {
  const { setFile, addImage, addText } = usePosterStore();

  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);

  const handleAddText = () => {
    addText("Type your text here", "black");
  };

  const handleAddImage = () => {
    inputImageRef.current?.click();
  };

  const handleAddBackground = () => {
    inputFileRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setFile(fileURL);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      addImage(imgURL);
    }
  };

  return (
    <div className="w-[759px] h-[609px] grid grid-cols-2 gap-x-[29px] gap-y-[32px] content-center">
      <OptionButton icon={<TextIcon />} text="Text" onClick={handleAddText} />
      <OptionButton
        icon={<ImageIcon />}
        text="Image"
        onClick={handleAddImage}
      />
      <OptionButton
        icon={<BackgroundIcon width={128} height={128} />}
        text="Background"
        onClick={handleAddBackground}
      />
      <input
        type="file"
        accept="image/*"
        ref={inputImageRef}
        className="hidden"
        onChange={handleImageUpload}
        onClick={(e) => (e.currentTarget.value = "")}
      />
      <input
        type="file"
        accept="image/*"
        ref={inputFileRef}
        className="hidden"
        onChange={handleFileUpload}
        onClick={(e) => (e.currentTarget.value = "")}
      />
    </div>
  );
};

export default Main;
