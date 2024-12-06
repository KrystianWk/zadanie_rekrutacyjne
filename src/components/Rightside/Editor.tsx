import RightHeader from "./RightHeader";
import Main from "./Main";
import { usePosterStore } from "../../store/posterStore";
import Button from "./Button";
import { exportToPng } from "./toPng";
import { EditorProps } from "../../types/PosterTypes";

const Editor = ({ posterRef }: EditorProps) => {
  const { posterReady } = usePosterStore();

  const handleExportClick = () => {
    exportToPng(posterRef.current, "poster.png");
  };

  return (
    <div className="w-[759px] h-[948px] flex flex-col relative">
      <RightHeader />
      <div className="border-[1px] border-white98 my-[32px]" />
      <div className="w-full h-[75px] bg-white97 py-[24px] px-[16px] rounded-[10px]">
        <h2 className="font-bold text-[18px] text-Black100">Add content</h2>
      </div>
      <Main />
      <div className="border-[1px] border-white98 my-[32px]" />
      <div className="absolute bottom-0 right-0">
        <Button
          value={"Export to PNG"}
          whenDisabled={!posterReady}
          functionOnClick={handleExportClick}
        />
      </div>
    </div>
  );
};

export default Editor;
