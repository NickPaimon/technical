import { mockData } from "../mockData";

export const getData = (querry: string) => {
  return new Promise((resolve, reject) => {
    const searchData = mockData.filter((data) => {
      return data.firstName.toLowerCase().includes(querry.toLowerCase());
    });
    setTimeout(() => {
      resolve(searchData);
    }, 250);
  });
};
