type Props = {
  searchedData: any;
  grabPersonFromData: (person: any) => void;
  searchTerm: string;
};

const DropdownList = ({
  searchedData,
  grabPersonFromData,
  searchTerm,
}: Props) => {
  return (
    <ul>
      {searchTerm.length > 0 &&
        searchedData.map((person: any) => (
          <li
            onClick={() => {
              grabPersonFromData(person);
            }}
            className="text-black cursor-pointer hover:bg-gray-200 p-2 pl-3"
            key={person.firstName}
          >
            {person.firstName}
          </li>
        ))}
    </ul>
  );
};

export default DropdownList;
