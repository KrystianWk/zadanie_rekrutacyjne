import { ButtonProps } from "../../types/PosterTypes";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.functionOnClick}
      className="px-[30px] py-[6px] rounded-[5px] bg-Primary text-white text-[15px] font-semibold hover:bg-[#550788] focus:outline-none focus:ring-2 focus:ring-[#7209B7] focus:ring-opacity-50 disabled:bg-[#CDCDCD] transition-[0.4s] disabled:cursor-not-allowed"
      disabled={props.whenDisabled}>
      {props.value}
    </button>
  );
};

export default Button;
