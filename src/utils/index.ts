import { mockData } from "../mock";
import { Candidate } from "@/types";

export const getData = (): Promise<Candidate[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 250);
  });
};

export const calculateDuration = (
  startDate: string,
  endDate: string,
  includeMonths: boolean
): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInMilliseconds = end.getTime() - start.getTime();

  let years = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  let months = (years - Math.floor(years)) * 12;
  years = Math.floor(years);
  months = Math.floor(months);
  return !includeMonths
    ? `${years}`
    : months === 0
    ? `${years} years`
    : `years and ${months} months`;
};
