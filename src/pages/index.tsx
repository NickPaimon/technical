import Image from "next/image";
import debounce from "lodash/debounce";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { getData } from "@/utils";
import { set } from "lodash";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const debounceSearch = debounce((name: string) => {
    getData(name).then((res: any) => {
      setData(res);
    });
  }, 1000);

  const handleChange = (e: any) => {
    setInput(e.target.value);
    debounceSearch(e.target.value);
  };

  return (
    <div className="p-4">
      <h1>Welcome to my app!</h1>
      <input
        type="text"
        placeholder="Search..."
        className="text-black"
        value={input}
        onChange={handleChange}
      />
      {data.map((person: any) => {
        return <p key={person.firstName}>{person.firstName}</p>;
      })}
    </div>
  );
}
