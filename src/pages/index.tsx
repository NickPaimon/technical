import React, { Dispatch, SetStateAction } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { CandidateList, Candidate } from "@/types";
import { FormEvent, useEffect, useState } from "react";
import { getData } from "@/utils";
import { debounce } from "@/utils/debounce";
import logo from "../assets/left.png";
import frame from "../assets/frame.png";
import CardList from "./components/Cards/CardList";
import DropdownList from "./components/DropdownList/DropdownList";
import Search from "./components/Search/Search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState<Candidate[]>([
    {
      firstName: "",
      lastName: "",
      location: "",
      gender: "",
      workHistory: [
        {
          company: "",
          title: "",
          startDate: "",
          endDate: "",
        },
      ],
    },
  ]);
  const [searchedData, setSearchedData] = useState<Candidate[]>([
    {
      firstName: "",
      lastName: "",
      location: "",
      gender: "",
      workHistory: [
        {
          company: "",
          title: "",
          startDate: "",
          endDate: "",
        },
      ],
    },
  ]);
  const [list, setList] = useState<any>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [clearInput, setClearInput] = useState<boolean>(false);

  const debouncedSearchTerm = debounce(
    (nextValue: string) => setSearchTerm(nextValue),
    500
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<string>>
  ) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    debouncedSearchTerm(nextValue);
  };

  const grabPersonFromData = (person: Candidate) => {
    setList([...list, person]);
    setData((prev: any) =>
      prev.filter((p: any) => p.firstName !== person.firstName)
    );
    setClearInput(true);
    setSearchedData([]);
  };

  const putPersonaBack = (person: Candidate) => {
    setList((prev: any) =>
      prev.filter((p: any) => p.firstName !== person.firstName)
    );
    setData([...data, person]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const _data = await getData();
      setData(_data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchData = data.filter((_data) => {
        return _data.firstName.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchedData(searchData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="bg-white">
      <header className="p-4 bg-white">
        <Image src={logo} alt="logo" width="120" height="120" />
      </header>
      <div className="border border-grey-300 pt-2 pr-3 pl-3">
        <p className="text-black">Search</p>
        <Search
          handleChange={handleChange}
          clearInput={clearInput}
          setClearInput={setClearInput}
        />
        <DropdownList
          searchTerm={searchTerm}
          searchedData={searchedData}
          grabPersonFromData={grabPersonFromData}
        />
        <CardList persons={list} putPersonaBack={putPersonaBack} />
      </div>
    </div>
  );
}
