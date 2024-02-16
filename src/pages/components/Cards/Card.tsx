import manPhoto from "../../../assets/photos/man.png";
import womanPhoto from "../../../assets/photos/woman.png";
import close from "../../../assets/close.png";
import vector from "../../../assets/vector.png";
import carrot from "../../../assets/carrot.png";
import tree from "../../../assets/tree.png";
import square from "../../../assets/square.png";
import Image from "next/image";
import { Candidate } from "@/types";
import { calculateDuration } from "@/utils";
import { useMemo } from "react";

type Props = {
  data: Candidate;
  onClick: (person: Candidate) => void;
};

export const Card = (props: Props) => {
  const { firstName, lastName, location, gender, workHistory } = props.data;
  const icons = [carrot, tree, square];

  const fullExperience = useMemo(() => {
    return calculateDuration(
      workHistory[0].startDate,
      workHistory[workHistory.length - 1].endDate,
      false
    );
  }, [workHistory]);

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden pt-2">
      <div className="h-[52px] border border-gray-300 justify-end flex p-3 ">
        <Image
          src={close}
          alt="close"
          className="h-6 w-6 cursor-pointer"
          onClick={() => props.onClick(props.data)}
        />
      </div>
      <div>
        <div className="p-4">
          <div className="flex items-center justify-between  h-[86px]">
            <Image
              src={gender === "man" ? manPhoto : womanPhoto}
              alt="photo"
              height={24}
              width={24}
              className="h-16 w-16 rounded-md mr-4"
            />
            <div className="text-left">
              <p className="text-xl font-medium text-black">{`${firstName} ${lastName}`}</p>
              <div className="flex items-center">
                <Image src={vector} alt="vector" className="w-3 h-4" />
                <p className="text-gray-500 pl-1">{location}</p>
              </div>
            </div>
            <div className="ml-auto bg-white text-black border border-[rgba(223, 229, 233, 1)] text-xs font-semibold min-w-[120px] h-[62px] text-center py-2 rounded">
              <p>Experience</p>
              <p className="text-xl font-bold">
                {fullExperience.toString()}{" "}
                <span className="text-xs font-light">years</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-around items-center">
              <p className="text-sm font-medium text-gray-500">
                Work History · 5
              </p>
              <span className="h-0.5 ml-2 bg-gray-300 grow"></span>
            </div>
            <div>
              {workHistory.map((work, index) => {
                return (
                  <div key={index}>
                    <div className="mt-1 text-sm text-gray-900 flex items-center">
                      <Image
                        src={icons[index]}
                        alt="delta-bank"
                        className="w-5 h-5"
                      />
                      <p className="block font-medium ml-1">
                        {work.company} · {work.title}
                      </p>
                      <p className="block text-gray-500 ml-1">
                        {calculateDuration(work.startDate, work.endDate, true)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
