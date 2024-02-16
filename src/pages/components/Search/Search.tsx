import Image from "next/image";
import frame from "../../../assets/frame.png";
import { useEffect, useState } from "react";

type Props = {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  setClearInput: React.Dispatch<React.SetStateAction<boolean>>;
  clearInput: boolean;
};

const Search = ({ handleChange, clearInput, setClearInput }: Props) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (clearInput) {
      setValue("");
      setClearInput(false);
    }
  }, [clearInput, setClearInput]);

  return (
    <>
      <div className="flex items-start border border-gray-300 py-1">
        <div className="flex-shrink-0 border-transparent border-4 py-1 pl-2">
          <Image src={frame} alt="frame" className="h-8 w-8" />
        </div>
        <input
          type="text"
          placeholder="Michael Jordan"
          className="bg-white w-full p-3 text-black leading-tight focus:outline-none appearance-none bg-transparent border-none"
          value={value}
          onChange={(e) => handleChange(e, setValue)}
        />
      </div>
    </>
  );
};

export default Search;
