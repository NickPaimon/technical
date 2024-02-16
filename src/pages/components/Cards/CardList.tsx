import { Candidate } from "@/types";
import { Card } from "./Card";

type Props = {
  persons: Candidate[];
  putPersonaBack: (person: Candidate) => void;
};

const CardList = ({ persons, putPersonaBack }: Props) => {
  return (
    <>
      {persons.map((persona: Candidate) => (
        <Card
          key={persona.firstName}
          data={persona}
          onClick={() => putPersonaBack(persona)}
        />
      ))}
    </>
  );
};

export default CardList;
